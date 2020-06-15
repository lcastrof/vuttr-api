import Tool from '@modules/tools/infra/typeorm/entities/Tool';
import IToolsRepository from '@modules/tools/repositories/IToolsRepository';
import ICreateAppointmentDTO from '@modules/tools/dtos/ICreateToolDTO';

import { getRepository, Repository } from 'typeorm';

class ToolsRepository implements IToolsRepository {
  private ormRepository: Repository<Tool>;

  constructor() {
    this.ormRepository = getRepository(Tool);
  }

  public async index(): Promise<Tool[] | undefined> {
    const tools = await this.ormRepository.find();

    return tools;
  }

  public async findByTag(tag: string): Promise<Tool[]> {
    const tools = await this.ormRepository.find();

    const findTools = tools.filter(tool => tool.tags.includes(tag));

    return findTools;
  }

  public async findByTitle(title: string): Promise<Tool | undefined> {
    const tool = await this.ormRepository.findOne({
      where: {
        title,
      },
    });

    return tool;
  }

  public async findById(id: string): Promise<Tool | undefined> {
    const tool = await this.ormRepository.findOne(id);

    return tool;
  }

  public async remove(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async create({
    title,
    description,
    link,
    tags,
  }: ICreateAppointmentDTO): Promise<Tool> {
    const tool = this.ormRepository.create({
      title,
      description,
      link,
      tags,
    });

    await this.ormRepository.save(tool);

    return tool;
  }
}

export default ToolsRepository;
