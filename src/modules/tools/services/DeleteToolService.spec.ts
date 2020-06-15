import AppError from '@shared/errors/AppError';
import FakeToolsRepository from '../repositories/fakes/FakeToolsRepository';
import CreateToolService from './CreateToolService';
import DeleteToolService from './DeleteToolService';

let fakeToolsRepository: FakeToolsRepository;
let createTool: CreateToolService;
let deleteTool: DeleteToolService;

describe('DeleteTool', () => {
  beforeEach(() => {
    fakeToolsRepository = new FakeToolsRepository();
    createTool = new CreateToolService(fakeToolsRepository);
    deleteTool = new DeleteToolService(fakeToolsRepository);
  });

  it('should be able to delete a tool', async () => {
    const tool = await createTool.execute({
      title: 'test',
      description: 'test description',
      link: 'test.com',
      tags: ['test1', 'test2', 'test3'],
    });

    const remove = jest.spyOn(fakeToolsRepository, 'remove');

    await deleteTool.execute(tool.id);

    expect(remove).toBeCalledWith(tool.id);
  });

  it('should not be able to delete a tool with an invalid id', async () => {
    await createTool.execute({
      title: 'test',
      description: 'test description',
      link: 'test.com',
      tags: ['test1', 'test2', 'test3'],
    });

    await expect(deleteTool.execute('wrong-id')).rejects.toBeInstanceOf(
      AppError
    );
  });
});
