import Tool from '@modules/tools/infra/typeorm/entities/Tool';
import { inject, injectable } from 'tsyringe';
import IToolsRepository from '../repositories/IToolsRepository';

@injectable()
class ListToolsService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository
  ) {}

  public async execute(): Promise<Tool[] | undefined> {
    const tools = await this.toolsRepository.index();

    return tools;
  }
}

export default ListToolsService;
