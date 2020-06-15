import { Router } from 'express';
import toolsRouter from '@modules/tools/infra/http/routes/tools.routes';

const routes = Router();

routes.use('/tools', toolsRouter);

export default routes;
