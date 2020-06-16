const swaggerDocument = {
  swagger: '2.0',
  info: {
    description:
      'Desafio da BossaBox de uma API para um repositório de ferramentas úteis',
    license: {
      name: 'MIT',
      url: 'https://opensource.org/licenses/MIT',
    },
    version: '1.0.0',
    title: 'API Very Useful Tools to Remember',
  },
  paths: {
    '/tools': {
      get: {
        summary: 'Lista ferramentas',
        description: 'Lista as ferramentas passando ou não uma tag de filtro',
        produces: ['application/json'],
        parameters: [
          {
            name: 'tag',
            in: 'query',
            description: 'Tag usada para o filtro de busca',
            required: false,
            type: 'string',
            'x-example': 'node',
          },
        ],
        responses: {
          '200': {
            description: 'Retorna as ferramentas',
            schema: {
              $ref: '#/definitions/Tool',
            },
          },
        },
      },
      post: {
        summary: 'Cria uma ferramenta',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Objeto a ser criado',
            required: false,
            schema: {
              $ref: '#/definitions/Tool',
            },
            'x-examples': {
              'application/json':
                '{\n    "title": "github",\n        "link": "https://github.com/",\n        "description": "Essencial tool for a developer. You probably know it.",\n        "tags": [\n            "github",\n            "domain",\n            "utils",\n            "repository",\n            "version",\n            "control"\n        ]\n}',
            },
          },
        ],
        responses: {
          '201': {
            description: 'Retorna a ferramenta criada',
            schema: {
              $ref: '#/definitions/Tool',
            },
          },
        },
      },
    },
    '/tools/{id}': {
      delete: {
        summary: 'Deleta uma ferramenta',
        consumes: ['application/json'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description:
              "O id deve ser o uuid de uma ferramenta criada. Exemplos: 'b35865db-6aeb-43d9-ad75-916aee9a30fc' and '3385ce8a-61d6-423c-9c59-8430eaa03667'",
            required: true,
            type: 'string',
          },
        ],
        responses: {
          '200': {
            description: 'Retorna um status de ok',
            schema: {
              type: 'string',
            },
          },
        },
      },
    },
  },
  definitions: {
    Tool: {
      type: 'object',
      required: ['description', 'id', 'link', 'tags', 'title'],
      properties: {
        id: {
          type: 'string',
        },
        title: {
          type: 'string',
        },
        link: {
          type: 'string',
        },
        description: {
          type: 'string',
        },
        tags: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
      },
    },
  },
};

export default swaggerDocument;
