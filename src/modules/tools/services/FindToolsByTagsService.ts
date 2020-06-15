import Tool from '@modules/tools/infra/typeorm/entities/Tool';
import { injectable, inject } from 'tsyringe';
import IToolsRepository from '../repositories/IToolsRepository';

@injectable()
class FindToolsByTagsService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository
  ) {}

  public async execute(tag: string): Promise<Tool[]> {
    const tool = await this.toolsRepository.findByTag(tag);

    return tool;
  }
}

export default FindToolsByTagsService;
