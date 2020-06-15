import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IToolsRepository from '../repositories/IToolsRepository';

@injectable()
class DeleteToolService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository
  ) {}

  public async execute(id: string): Promise<void> {
    const tool = await this.toolsRepository.findById(id);

    if (!tool) {
      throw new AppError('Invalid ID');
    }

    await this.toolsRepository.remove(id);
  }
}

export default DeleteToolService;
