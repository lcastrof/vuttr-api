import { uuid } from 'uuidv4';

import Tool from '@modules/tools/infra/typeorm/entities/Tool';
import IToolsRepository from '@modules/tools/repositories/IToolsRepository';
import ICreateAppointmentDTO from '@modules/tools/dtos/ICreateToolDTO';

class ToolsRepository implements IToolsRepository {
  private tools: Tool[] = [];

  public async index(): Promise<Tool[] | undefined> {
    return this.tools;
  }

  public async findByTag(tag: string): Promise<Tool[]> {
    const findTools = this.tools.filter(tool => tool.tags.includes(tag));

    return findTools;
  }

  public async findById(id: string): Promise<Tool | undefined> {
    const findTool = this.tools.find(tool => tool.id === id);

    return findTool;
  }

  public async findByTitle(title: string): Promise<Tool | undefined> {
    const findTool = this.tools.find(tool => tool.title === title);

    return findTool;
  }

  public async remove(id: string): Promise<void> {
    const toolIndex = this.tools.findIndex(tool => tool.id === id);

    this.tools.splice(toolIndex, 1);
  }

  public async create({
    title,
    description,
    link,
    tags,
  }: ICreateAppointmentDTO): Promise<Tool> {
    const tool = new Tool();

    Object.assign(tool, { id: uuid(), title, description, link, tags });

    this.tools.push(tool);

    return tool;
  }
}

export default ToolsRepository;
