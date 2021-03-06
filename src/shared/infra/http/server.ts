import 'reflect-metadata';
import 'module-alias/register';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';

import AppError from '@shared/errors/AppError';

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger';

import routes from './routes';

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();
app.use(cors());
app.use(express.json());

app.use(routes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.log(err);

  return response.status(500).json({
    status: 'error',
    message: 'internal server error',
  });
});

const port = process.env.DATABASE_URL ? process.env.PORT : 3000;

app.listen(port, () => {
  console.log('Server started on port 3000!');
});
