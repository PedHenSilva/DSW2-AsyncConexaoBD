# DSW2 - Async Conexão com Banco de Dados

Projeto acadêmico da disciplina **Desenvolvimento Web 2** (FATEC), com o objetivo de demonstrar e comparar diferentes abordagens de conexão com banco de dados **MySQL** em **Node.js**: a forma tradicional baseada em _callbacks_ e a forma moderna baseada em _Promises_/`async-await`, expostas através de uma API construída com **Express**.

## 🎯 Objetivo

O foco do projeto é didático: entender como o Node.js lida com operações assíncronas de I/O (no caso, consultas a um banco de dados) e comparar na prática:

- **Conexão síncrona/callback** — usando o pacote `mysql`.
- **Conexão assíncrona** — usando o pacote `mysql2` com `async/await`.

## 🚀 Tecnologias Utilizadas

> ![NodeJS](https://img.shields.io/badge/node.js-%236DA55F.svg?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![MySQL](https://img.shields.io/badge/mysql-%234479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)

## 🗂️ Estrutura Atual

```
DSW2-AsyncConexaoBD/
├── src/
│   ├── server.js                  # inicializa o Express
│   ├── app.js                     # configuração do app (middlewares/rotas)
│   └── database/
│       ├── conexaoCallback.js     # conexão com callback
│       ├── conexaoAsync.js        # versão com async/await
│       └── teste.js               # script de teste da conexão
├── package.json
├── package-lock.json
├── LICENSE
└── README.md
```

## ⚙️ Como Executar

```bash
git clone https://github.com/PedHenSilva/DSW2-AsyncConexaoBD.git
cd DSW2-AsyncConexaoBD
npm install
node src/server.js
```

> Certifique-se de ter um servidor MySQL rodando localmente e de configurar as credenciais de acesso (host, usuário, senha, banco) antes de iniciar.

## 👥 Integrantes

- Hugo Gustavo Martins da Silva
- Luiz Felipe Silva Grava
- Maciel dos Santos
- Pedro Henrique Oliveira Silva

## 👨🏻‍🏫 Professor Orientador

- PhD. Bruno Zolotareff dos Santos | Disciplina: Desenvolvimento Web 2
