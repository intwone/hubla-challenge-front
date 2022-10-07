<h1 align="center">
    <a href="https://imgbb.com/"><img src="https://media-exp1.licdn.com/dms/image/C4D0BAQH-JFz_c5nxLA/company-logo_200_200/0/1662658756755?e=1673481600&v=beta&t=aWOsLYKZ7gXAtt4HvnPreSi8ZOV30dnhRh9mQse5UhA" alt="logo-web" border="0"></a>
    <br>
    Desafio técnico desenvolvido para o processo seletivo da empresa Hubla.
</h1>

## 🏃 Como executar o projeto

Primeiramente, renomeie o arquivo `.env.example` para `.env`.

Instalando as dependências:

```bash
$ npm install
```

Iniciando o projeto:

```bash
$ npm run start:dev
```

## Funcionalidades

- Upload de arquivo
  - Não é possível enviar um arquivo que tenha a extensão diferente de `.txt`
- Listagem de informações
  - É possível filtrar as transações pelo tipo
  - É possível listar o valor total das transações

## Arquitetura

```
src
├───components
│   ├───DropzoneContentMessage
│   ├───FileUploaded
│   ├───Header
│   ├───NoContent
│   ├───TransactionCard
│   └───UploadFile
├───config
├───enums
├───helpers
├───layout
│   └────DropzoneContentMessage
├───pages
│   ├───TransactionPage
│   └───UploadPage
├───routes
├───services
├───styles
└───theme
```

<h4 align="center">Made with 💚 by Cassio Oliveira</h4>
