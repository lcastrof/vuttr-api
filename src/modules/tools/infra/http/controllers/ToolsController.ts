import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateToolService from '@modules/tools/services/CreateToolService';
import ListToolsService from '@modules/tools/services/ListToolsService';
import FindToolsByTagsService from '@modules/tools/services/FindToolsByTagsService';
import DeleteToolService from '@modules/tools/services/DeleteToolService';

export default class ToolsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createTool = container.resolve(CreateToolService);

    const { title, link, description, tags } = request.body;

    const tool = await createTool.execute({ title, link, description, tags });

    return response.status(201).json(tool);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const deleteTool = container.resolve(DeleteToolService);

    const { id } = request.params;

    await deleteTool.execute(id);

    return response.status(200).send();
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const tag = request.query.tag?.toString();

    if (tag) {
      const findTools = container.resolve(FindToolsByTagsService);

      const tools = await findTools.execute(tag);

      return response.status(200).json(tools);
    }

    const listTools = container.resolve(ListToolsService);

    const tools = await listTools.execute();

    return response.status(200).json(tools);
  }
}
