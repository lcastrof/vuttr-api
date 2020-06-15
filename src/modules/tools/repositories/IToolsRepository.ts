import Tool from '@modules/tools/infra/typeorm/entities/Tool';
import ICreateToolDTO from '@modules/tools/dtos/ICreateToolDTO';

export default interface IToolsRepository {
  create(data: ICreateToolDTO): Promise<Tool>;
  remove(id: string): Promise<void>;
  index(): Promise<Tool[] | undefined>;
  findByTag(tag: string): Promise<Tool[]>;
  findById(id: string): Promise<Tool | undefined>;
  findByTitle(title: string): Promise<Tool | undefined>;
}
