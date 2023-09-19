# API de Usuário com Padrões SOLID

Esta é uma API de usuário desenvolvida em Node.js que segue os princípios dos padrões SOLID. Ela permite a criação de informações de usuário, além de enviar e-mails de confirmação de conta.

## Recursos Principais

- **Cadastro de Usuário**: Crie novos usuários fornecendo informações básicas.

- **Envio de E-mails**: Envie e-mails de confirmação de conta.

## Pré-requisitos

- Node.js
- npm (Node Package Manager)
- TypeScript
- Express
- uuidv4
- nodemailer

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/antonioN313/apiSolid.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd apiSolid
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

## Uso

1. Inicie o servidor:

   ```bash
   npm start
   ```

2. A API estará acessível em `http://localhost:3333`.

## Endpoints

- `POST /api/users`: Cria um novo usuário.
- `POST /api/users/:id/send-email`: Envia um e-mail de confirmação para um usuário.

## Contribuição

Se você deseja contribuir com este projeto, siga as etapas abaixo:

1. Faça um fork do repositório.
2. Crie uma branch com a sua contribuição: `git checkout -b feature/nova-funcionalidade`.
3. Faça as alterações necessárias e adicione testes, se aplicável.
4. Envie um pull request para a branch principal.

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter detalhes.

---
