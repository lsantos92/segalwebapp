# SEGAL DATA PORTAL
## Introdução
Este projeto foi desenvolvido no âmbito da unidade curricular de Projeto do 3º ano de curso de Engenharia Informática da Universidade da Beira Interior.

O objetivo deste projeto é desenvolver uma aplicação web que permita disponibilizar um conjunto de dados de forma a que os utilizadores possam consultar e interagir com os mesmos.

## Ambiente de desenvolvimento
Para o desenvolvimento deste projeto foi utilizado o sistema operativo macOs Ventura 13.4, o editor de texto Visual Studio Code 1.80, o browser Brave 1.52 e o Node.js 18.14.

## Instalação
> Esta aplicação está em fase de desenvolvimento, pelo que ainda não está disponível para instalação.

Para instalar o projeto é necessário ter o Node.js instalado na máquina. Para isso, basta aceder ao site oficial do Node.js e fazer o download da versão 18.14.

Após a intalação do Node.js, é necessário instalar as dependências do projeto. Para isso, basta aceder à pasta do projeto e dentro da mesma aceder à pasta `server` e executar o seguinte comando:
```bash
npm install
```
Após a instalação das dependências, é necessário executar o seguinte comando para iniciar o servidor:
```bash
npm run dev
```
Após a execução do comando, o servidor estará a correr na porta 3001.

Depois de configurar o servidor, é necessário configurar o cliente. Para isso, basta aceder à pasta do projeto e dentro da mesma aceder à pasta `client` e executar o seguinte comando:
```bash
npm install
```
Após a instalação das dependências, é necessário executar o seguinte comando para iniciar o cliente:
```bash
npm start
```
Após a execução do comando, o cliente estará a correr na porta 3000.
## Variaveis de ambiente
Para o correto funcionamento do projeto é necessário criar um ficheiro `.env` na pasta `server` com as seguintes variáveis de ambiente:
```bash
GRC_URL = "sftp://username:password@grc.ubi.pt"
SERVER_PORT = 3001
GRC_DIR = "/media/NAS/grc_data/"
```
> De lembrar que o `username` e `password` e têm que ser requisitado ao SEGAL.

Deve ser criado outro ficheiro `.env` na pasta `client` com as seguintes variáveis de ambiente:
```bash
API_URL = "http://localhost:3001"
```

## Utilização
Para utilizar o projeto, basta aceder ao seguinte link: [http://localhost:3000](http://localhost:3000)

## Autores
- [Luís Santos, 30646](https://github.com/lsantos92)

## Links
- [Repositório do projeto](https://github.com/lsantos92/segalwebapp)
- [Relatório do projeto](https://www.overleaf.com/read/fwptvtcfwpkz)
