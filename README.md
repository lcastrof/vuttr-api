<h1 align="center">API  VUTTR</h1>

<h3 align="center">Desafio de backend proposto pela <a href="https://app.bossabox.com">BossaBox</a><h3>

---

## 📜 Sobre
[Documentação](https://app.swaggerhub.com/apis/lcastrof/vuttr-api/1.0.0)

**Deploy feito usando heroku, podendo ser acessado** [aqui](https://vuttr-backend-challenge.herokuapp.com/tools).

Aplicação feita em Node.JS para o projeto Very Usefull Tools to Remember(VUTTR) que consiste em uma lista de ferramentas úteis no dia-a-dia que são válidas de serem lembradas, servindo como repositório para o gerenciamento dessas ferramentas.

É possível adicionar, remover e listar ferramentas.

Utilizei esse projeto para treinar um pouco de arquitetura de software, utilizando conceitos como SOLID e DDD, tentando seguir boas práticas. Além de desenvolver a aplicação utilizando TDD.

---

## 📑 Tecnologias Utilizadas
- [NodeJS](https://nodejs.org)
- [Typescript](https://www.typescriptlang.org/index.html)
- [TypeORM](https://typeorm.io/#/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)
- [Swagger](https://swagger.io/)
- [Express](https://expressjs.com/pt-br/)
- [Jest](https://jestjs.io/)

---

## 📦 Baixando o projeto

### Requisitos
Para esse projeto, foi utilizado o gerenciador de pacotes [yarn](https://yarnpkg.com/), mas a instalação dos pacotes pode ser feita usando o [npm](https://www.npmjs.com/).

### Instalando

```bash
# Clonar repositório
$ git clone https://github.com/lcastrof/vuttr-api

# Entrar no diretório
$ cd vuttr-api

# Instalar as dependências
$ yarn install
```

### Executando
Para executar com sucesso o projeto localmente, é necessário ter um container do docker com uma imagem de um banco PostgreSQL com as configurações corretas para que o TypeORM faça a conexão através do arquivo ormconfig.json.

Em seguida rode `yarn dev:server`

---

## 🔄 Rotas da aplicação

- `GET /tools`: Lista todas as ferramentas cadastradas.

- `GET /tools?tag={tag}`: Lista as ferramentas que possuem a tag passada como parâmetro.

- `POST /tools`: Cria uma nova ferramenta. O corpo da requisição deve conter as informações para que a ferramenta seja registrada.

- `DELETE /tools/{id}`: Deleta a ferramenta de ID especificado (ID deve ser uuid).

- `GET /api-docs`: Documentação da API.

### Exemplos
- Retorno ao executar uma listagem:
```json
{
  "id": "f3f3b672-f49a-414e-88bd-fa27a1caa766",
  "title": "hotel",
  "link": "https://github.com/typicode/hotel",
  "description": "Local app manager. Start apps within your browser develoer tool with local .localhost domain and https out of the box.",
  "tags": [
  "organizing",
  "domain",
  "node",
  "webapp",
  "https",
  "developer",
  "proxy"
  ],
  "created_at": "2020-07-13T20:09:29.474Z",
  "updated_at": "2020-07-13T20:09:29.474Z"
}
```

- Corpo da requisição para criar uma ferramenta:
```json
{
  "title": "hotel",
  "link": "https://github.com/typicode/hotel",
  "description": "Local app manager. Start apps within your browser develoer tool with local .localhost domain and https out of the box.",
  "tags": [
  "organizing",
  "domain",
  "node",
  "webapp",
  "https",
  "developer",
  "proxy"
  ]
}
```

---

## 🤖 Testes

### Executando
```bash
$ yarn test
```

### Especificações

- `should be able to create a new tool`: Para passar, a aplicação deve permitir a criação de uma ferramenta, retornando um JSON com as informações da ferramenta.

- `should not be able to create two tools with the same title`: Para passar, a aplicação **não** deve permitir a criação de duas ferramentas de mesmo nome.

- `should be able to delete a tool`: Para passar, a aplicação deve permitir que uma ferramenta seja deletada.

- `should not be able to delete a tool with an invalid id`: Para passar, a aplicação **não** deve permitir que uma ferramenta com ID inválido seja deletada.

- `should be able to find a tool passing a tag`: Para passar, a aplicação deve permitir buscar uma ferramenta com um filtro de tag.

- `should be able to list all the created tools`: Para passar, a aplicação deve permitir a listagem de todas as ferramentas cadastradas.

---

Desenvolvido por Lucas de Castro Fernandino
