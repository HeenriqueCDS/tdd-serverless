# Serverless TDD Talk - NodeBR

Este repositório contém o código de uma aplicação serverless e seus testes unitários, apresentados em uma palestra na NodeBR sobre Desenvolvimento Orientado a Testes (TDD) em aplicações serverless.

## Estrutura do Projeto

- **`src/functions/createUser.ts`**: Contém a implementação da Lambda function.
- **`src/responses.ts`**: Contém as respostas possíveis da função Lambda.
- **`src/schema.ts`**: Define o esquema de validação para o corpo da requisição.
- **`test/createUser.spec.ts`**: Contém os testes unitários para a função `createUser`.

## Testes Unitários

Os testes unitários foram desenvolvidos utilizando a biblioteca `vitest`. Cada teste verifica um cenário específico, incluindo casos de sucesso e falha.

- **`should not create if body is invalid`**: Verifica se a função retorna a resposta adequada quando o corpo da requisição é inválido.
- **`should not create if cpf is invalid`**: Verifica se a função retorna a resposta adequada quando o CPF fornecido é inválido.
- **`should no create if password does not have at least 8 characters`**: Verifica se a função retorna a resposta adequada quando a senha não tem pelo menos 8 caracteres.
- **`should no create if password does not have at least 1 number`**: Verifica se a função retorna a resposta adequada quando a senha não contém pelo menos um número.
- **`should not create if password does not have at least one uppercase letter`**: Verifica se a função retorna a resposta adequada quando a senha não contém pelo menos uma letra maiúscula.
- **`should create if everything is valid`**: Verifica se a função retorna a resposta adequada quando todos os critérios de validação são atendidos.

## Como Executar os Testes

1. Certifique-se de ter Node.js instalado.
2. Execute `npm install` para instalar as dependências.
3. Execute `npm run test` para rodar os testes.

Os testes serão executados, e os resultados serão exibidos no console.

Espero que essas atualizações reflitam corretamente a estrutura do projeto e os requisitos para rodar os testes. Em caso de dúvidas ou sugestões, sinta-se à vontade para entrar em contato!