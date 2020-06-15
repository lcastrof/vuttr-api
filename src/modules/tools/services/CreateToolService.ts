import Tool from '@modules/tools/infra/typeorm/entities/Tool';
import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IToolsRepository from '../repositories/IToolsRepository';

interface Request {
  title: string;
  link: string;
  description: string;
  tags: string[];
}

@injectable()
class CreateToolService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository
  ) {}

  public async execute({
    title,
    link,
    description,
    tags,
  }: Request): Promise<Tool> {
    const existTool = await this.toolsRepository.findByTitle(title);

    if (existTool) {
      throw new AppError('This tool already exists');
    }

    const tool = await this.toolsRepository.create({
      title,
      link,
      description,
      tags,
    });

    return tool;
  }
}

export default CreateToolService;
