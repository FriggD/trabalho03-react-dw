### Trabalho de Desenvolvimento Web 2021/22
### Alunas: Emili Everz Golombiéski e Gláucia Dias

#### Requisitos para rodar a Aplicação:

1. npm instalado
2. Criação do .env, como exemplo o .env-example

##### Instruções:

1. Suba a api com o comando: 
```console
    $ cd backend
    $ npm install
    $ npm run start
```

2. Suba o client com o comando: 
```console
    $ cd frontend
    $ npm install
    $ npm run start
```

# API:

## Models:
```json
Livro: {
    id: number,
    name: String,
    author: String,
    ano: number
}
```

## Rotas:

### Listar todos os Livros
  GET /livro
* Pode receber como url arg: name
* Retorna: Lista de Objetos de livro   

### Buscar livro por Id
##### GET /livro/:id
* Recebe: id do livro
*retorna: Objeto do Livro, ou resposta de não encontrado

### Cadastrar Livro
##### Rota: POST /livros 
* Recebe no body: name, author, ano
* Retorna: Objeto do livro Cadastrado   

### Atualizar Livro
##### Rota: PUT /livros/:id
* Recebe no body: name, author, ano
* Retorna: Objeto do livro Atualizado

### Remover livro
##### DEL /livro/:id 

### Remover todos os livros
##### DEL /livro