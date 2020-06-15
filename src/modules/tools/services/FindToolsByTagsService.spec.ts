import FakeToolsRepository from '../repositories/fakes/FakeToolsRepository';
import CreateToolService from './CreateToolService';
import FindToolsByTagsService from './FindToolsByTagsService';

let fakeToolsRepository: FakeToolsRepository;
let createTool: CreateToolService;
let findToolsByTags: FindToolsByTagsService;

describe('FindToolsByTags', () => {
  beforeEach(() => {
    fakeToolsRepository = new FakeToolsRepository();
    createTool = new CreateToolService(fakeToolsRepository);
    findToolsByTags = new FindToolsByTagsService(fakeToolsRepository);
  });

  it('should be able to find a tool passing a tag', async () => {
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

    const findTags = await findToolsByTags.execute('test3');

    expect(findTags).toMatchObject([tool, tool2]);
  });
});
