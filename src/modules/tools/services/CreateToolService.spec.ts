import AppError from '@shared/errors/AppError';
import FakeToolsRepository from '../repositories/fakes/FakeToolsRepository';
import CreateToolService from './CreateToolService';

let fakeToolsRepository: FakeToolsRepository;
let createTool: CreateToolService;

describe('CreateTool', () => {
  beforeEach(() => {
    fakeToolsRepository = new FakeToolsRepository();
    createTool = new CreateToolService(fakeToolsRepository);
  });

  it('should be able to create a new tool', async () => {
    const tool = await createTool.execute({
      title: 'test',
      description: 'test description',
      link: 'test.com',
      tags: ['test1', 'test2', 'test3'],
    });

    expect(tool).toHaveProperty('id');
    expect(tool.title).toBe('test');
    expect(tool.description).toBe('test description');
    expect(tool.link).toBe('test.com');
    expect(tool.tags).toMatchObject(['test1', 'test2', 'test3']);
  });

  it('should not be able to create two tools with the same title', async () => {
    await createTool.execute({
      title: 'title-test',
      description: 'test description',
      link: 'test.com',
      tags: ['test1', 'test2', 'test3'],
    });

    await expect(
      createTool.execute({
        title: 'title-test',
        description: 'diferent description',
        link: 'test2.com',
        tags: ['test0', 'test1', 'test4'],
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
