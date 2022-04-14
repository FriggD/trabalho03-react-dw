### Trabalho de Desenvolvimento Web 2021/22
### Alunas: Emili Everz Golombiéski e Gláucia Dias

#### Requisitos para rodar a Aplicação secauth:

1. 
2. 
3. 
4. 

Instruções:

1. 
2. Suba a api com o comando: 
    ```console
        $ 
    ```
2. Suba o client com o comando: 
    ```console
        $ 
    ```

# API:

## Models:
```json
Artigo: {
    id: number,
    name: String,
    author: String,
    ano: number
}
```

## Rotas:
### Cadastrar Artigo
##### Request
`POST /api/livros` 
body {
    titulo
}
##### Response
    Livro
    
### Listar todos os Artigos
##### Request
`GET /api/livro` 
##### Response
    Livro[]

### Buscar artigo por Id
##### Request
`GET /api/livro/:id` 
##### Response
    Livro

### Remover artigo
##### Request
`DEL /api/livro/:id` 

### Remover todos os artigos
##### Request
`DEL /api/livros` 