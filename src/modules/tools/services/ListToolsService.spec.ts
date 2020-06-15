import FakeToolsRepository from '../repositories/fakes/FakeToolsRepository';
import CreateToolService from './CreateToolService';
import ListToolsService from './ListToolsService';

let fakeToolsRepository: FakeToolsRepository;
let createTool: CreateToolService;
let listTools: ListToolsService;

describe('ListTools', () => {
  beforeEach(() => {
    fakeToolsRepository = new FakeToolsRepository();
    createTool = new CreateToolService(fakeToolsRepository);
    listTools = new ListToolsService(fakeToolsRepository);
  });

  it('should be able to list all the created tools', async () => {
    const tool = await createTool.execute({
      title: 'test',
      description: 'test description',
      link: 'test.com',
      tags: ['test1', 'test2', 'test3'],
    });

    const tool2 = await createTool.execute({
      title: 'test2',
      description: 'test description',
      link: 'test.com',
      tags: ['test3', 'test4', 'test5'],
    });

    const tool3 = await createTool.execute({
      title: 'test3',
      description: 'test description',
      link: 'test.com',
      tags: ['test3', 'test4', 'test5'],
    });

    const list = await listTools.execute();

    expect(list).toMatchObject([tool, tool2, tool3]);
  });
});
