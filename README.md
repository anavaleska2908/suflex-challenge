# Desafio Técnico da Suflex
<strong>Backend</strong>: REST API feita com Express.js, banco de dados Postgres utilizando TypeORM.</br>
<strong>Frontend (web)</strong>: Feita com React.js, Typescript e bibliotecas como hook-form, router-dom, yup, toastify (para feedback ao usuário) e estilização a partir do styled-components.</br>

## Backend
- Rota para cadastro de usuários;
- Rota para autenticação de usuário com JWT (Json Web Token);
- Middleware para dados de login e para autenticação;
- Middleware (na pasta errors) para retorno de erros;
- Testes unitários com Jest.

## Frontend
- Páginas responsivas;
- Barra de busca pelo nome do personagem;
- Filtros listando todos os personagens, somente aliens, somente humanos e personagens favoritados;
- Card do personagem com respectivos nomes e fotos;
- Modal apresentando informações mais detalhadas do personagem clicado;
- Páginas de cadastro e login;
- Estando logado: botão de adicionar e remover o personagem nos favoritos;
- Estando logado: botão de deslogar o usuário;
- Testes unitários com React Testing Library;
- Teste e2e com cypress;

## Para testar
Para testar essa aplicação, você precisa ter o [node.js 16 LTS](https://nodejs.org/) e o [yarn](https://yarnpkg.com/) instalado no PC. E, então instalar os pacotes com o comando ```yarn``` nos diretórios "backend" e "web". Iniciar um banco de dados postgres, criar uma arquivo .env, usando o .env.example como base para declarar suas variáveis de ambiente.

No diretório "backend", execute as migrations para criar as tabelas no banco de dados com o comando ```yarn typeorm migration:run -d src/data-source.ts``` e inicie a API com o comando ```yarn run dev```.

No diretório "web", execute o comando ```yarn start``` para iniciar a aplicação. Ao terminar de rodar, uma aba se abrirá no navegador trazendo a página "Home".

</br>

## Rotas no Backend

<hr/>

## Rotas que não precisam de autenticação
<hr/>
<br/>
  
<h2 align ='center'>Criação de usuário</h2>

`POST /users - FORMATO DA REQUISIÇÃO`
```json
{
	"name": "Jane Doe",
	"email": "janedoe@email.com",
	"password": "123456"
}
```

Caso dê tudo certo, a resposta será assim:

`POST /users - FORMATO DA RESPOSTA - STATUS 201`
```json
{
	"id": 1,
	"name": "Jane Doe",
	"email": "janedoe@email.com",
	"created_at": "2022-07-27T13:33:55.368Z"
}
```

<!--<h2 align ='center'>Possíveis erros:</h2>
Caso acabe passando um email já existente, a resposta de erro será assim:-->

<h2 align = "center"> Login do usuário</h2>

`POST /login - FORMATO DA REQUISIÇÃO`
```json
{
	"email": "janedoe@email.com",
	"password": "123456"
}
```

Caso dê tudo certo, a resposta será assim:
`POST /login/ - FORMATO DA RESPOSTA - STATUS 200`
```json
{
	"id": 1,
	"name": "Jane Doe",
	"email": "janedoe@email.com",
	"created_at": "2022-07-27T13:33:55.368Z",
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphbmVkb2VAZW1haWwuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE2NTg5Mjg4ODgsImV4cCI6MTY1OTAxNTI4OH0.aoJTf79-32RBiifVAhR8Mf2BArkK-Om52uDq6kwvqqs"
}
```

<h2 align ='center'>Possíveis erros:</h2>
Caso o usuário passe o "email" ou "senha" errados, a resposta de erro será assim:

<br/>Campos Obrigatórios no `POST /login/`: "email" e "senha".

No exemplo, a requisição foi feita faltando o campo "email":
`POST /login/ - FORMATO DA RESPOSTA - STATUS 400`

```json
{
	"status": "error",
	"message": "Invalid email or password!"
}
``` 

<br/>
<hr/>

## Rotas que necessitam de autorização
<hr/>

Rotas que necessitam de autorização deve ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:
> Authorization: Bearer {token}

Após o usuário estar logado, ele deve conseguir criar um personagem favorito, listar todos os personagens favoritos criados pelo próprio usuário, bem como deletá-los.

<h2 align ='center'>Criação de personagens favoritos</h2>

`POST /favoritesCharacters - FORMATO DA REQUISIÇÃO`
```json
{ 
	"user": 1, 
	"character": 6, 
	"name": "Abadango Cluster Princess",
	"status": "Alive",
	"species": "Alien",
	"type": "",
	"gender": "Female",
	"origin": {
		"name": "Abadango",
		"url": "https://rickandmortyapi.com/api/location/2"
	},
	"location": {
		"name": "Abadango",
		"url": "https://rickandmortyapi.com/api/location/2"
	},
	"image": "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
	"episode": [
		"https://rickandmortyapi.com/api/episode/27"
	],
	"url": "https://rickandmortyapi.com/api/character/6",
	"created": "2017-11-04T19:50:28.250Z"
}
```

Caso dê tudo certo, a resposta será assim:

`POST /favoritesCharacters - FORMATO DA RESPOSTA - STATUS 201`
```
{
	"user": 1,
	"character": 6,
	"name": "Abadango Cluster Princess",
	"status": "Alive",
	"species": "Alien",
	"type": "",
	"gender": "Female",
	"origin": {
		"name": "Abadango",
		"url": "https://rickandmortyapi.com/api/location/2"
	},
	"location": {
		"name": "Abadango",
		"url": "https://rickandmortyapi.com/api/location/2"
	},
	"image": "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
	"episode": [
		"https://rickandmortyapi.com/api/episode/27"
	],
	"url": "https://rickandmortyapi.com/api/character/6",
	"created": "2017-11-04T19:50:28.250Z"
}
```

<h2 align ='center'> Listando personagens favoritos </h2>
Aqui conseguimos ver todas os personagens cadastrados pelo usuário.

No params, o id a ser passado é do usuário.

`GET /favoritesCharacters/:id - FORMATO DA RESPOSTA - STATUS 200`
```json
[
	{
		"character": 6,
		"id": 6,
		"name": "Abadango Cluster Princess",
		"status": "Alive",
		"species": "Alien",
		"type": "",
		"gender": "Female",
		"origin": {
			"name": "Abadango",
			"url": "https://rickandmortyapi.com/api/location/2"
		},
		"location": {
			"name": "Abadango",
			"url": "https://rickandmortyapi.com/api/location/2"
		},
		"image": "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
		"episode": [
			"https://rickandmortyapi.com/api/episode/27"
		],
		"url": "https://rickandmortyapi.com/api/character/6",
		"created": "2017-11-04T19:50:28.250Z"
	}
]
```

<h2 align ='center'> Deletando um personagem favorito </h2>
Também é possível deletar um usuário, utilizando esse endpoint:

`DELETE /favoritesCharacters/:id?owner=id`
```
Não é necessário um corpo da requisição.
```

Caso tudo dê certo, o status de retorno será 204.