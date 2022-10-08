<h1 align="center">
    <a href="https://imgbb.com/"><img src="https://media-exp1.licdn.com/dms/image/C4D0BAQH-JFz_c5nxLA/company-logo_200_200/0/1662658756755?e=1673481600&v=beta&t=aWOsLYKZ7gXAtt4HvnPreSi8ZOV30dnhRh9mQse5UhA" alt="logo-web" border="0"></a>
    <br>
    Desafio técnico desenvolvido para o processo seletivo da empresa Hubla.
</h1>

<div align="center">
<a href="https://ibb.co/XxTSPtD"><img src="https://i.ibb.co/zVwGgZF/demo2.png" alt="demo2" border="0"></a>

<a href="https://ibb.co/7y1xjzf"><img src="https://i.ibb.co/pXL6bP7/demo1.png" alt="demo1" border="0"></a>

</div>

## Como executar o projeto

Primeiramente, criar um arquivo `.env` baseado no arquivo `.env.example`.
Em seguida, certifique que está com a aplicação backend executando, assim será possível interagir com o frontend enviando arquivos e listando informações.

Instalando as dependências:

```bash
$ npm install
```

Iniciando o projeto:

```bash
$ npm run start:dev
```

## Testes

Obs: Certifique que está com a aplicação rodando para que possa ser executado os testes.

Executando os testes no modo interativo:

```bash
$ npm run cypress:open
```

Executando os testes no modo headless:

```bash
$ npm run cypress:run
```

## Layout do projeto

Figma: https://www.figma.com/file/jl1S99ipTVdCuXauPOMrwo/Hubla?node-id=0%3A1

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
│   └────MainLayout
├───pages
│   ├───TransactionPage
│   └───UploadPage
├───routes
├───services
├───styles
└───theme
```

<h4 align="center">Made with 💚 by Cassio Oliveira</h4>
