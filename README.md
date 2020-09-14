
Desafio técnico de Estágio em desenvolvimento fullstack Linx.

Autor: Edson Nascimento Silva Neto.

## Inicializando o frontend
### Requer node >= 10
Para rodar o projeto (servidor de desenvolvimento):

- Abra um terminal dentro do diretório raiz do projeto e instale as dependências
necessárias com `npm install`.

- Em seguida, inicialize o projeto utilizando `npm start`, isto vai inicializar um servidor
dev na porta `localhost:3000`.

## Inicializando o backend

Para rodar a API localmente basta abrir um terminal
no diretório "API" do projeto e utilizar `node app.py`.
A aplicação começará então a receber requisições na porta 8000 localhost.

## Estrutura

```sh
dev-intern-challenge
|--API
|   |-- app.js
|--public
|   |--index.html
|   |--manifest.json
|   |--favicon.txt
|--src
|   |--App.css
|   |--App.js
|   |--App.test.js
|   |--index.css
|   |--index.js
|   |--serviceWorker.js
|   |--setupTests.js
|   |--Assets
|   |   |--asset files(png, jpg)
|   |   |--urls.json
|   |--components
|   |   |--Footer.js
|   |   |--HitsJumbo.js
|   |   |--ShortenerJumbo.js
|   |   |--TopBar.js
|   |   |--TopFive.js
|   |--containers
|   |   |--HitsBoxContainer.js
|   |   |--TopFiveContainer.js
|--Layout
|   |-- original_layout_files(jpg, png, psd, gif)
|--package.json
|--package.lock.json
|--README.md
|--final_result.png

```
