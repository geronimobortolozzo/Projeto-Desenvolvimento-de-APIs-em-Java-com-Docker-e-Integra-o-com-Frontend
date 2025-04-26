
Projeto – Desenvolvimento de APIs em Java com Docker e Integração com Frontend

Este projeto consiste no desenvolvimento de duas APIs em Java com Spring Boot, onde uma utiliza MongoDB e a outra MySQL para armazenar os dados de usuários. As APIs estão containerizadas usando Docker e recebem requisições de um frontend simples que envia os dados simultaneamente para ambas.

✅ Funcionalidades
- Cadastro de usuários com campos: ID, Nome e Telefone
- Envio simultâneo dos dados para duas APIs distintas
- Armazenamento dos dados em MongoDB e MySQL
- Execução de todo o sistema com Docker Compose

🚀 Como rodar o projeto

1. Clone o repositório ou baixe os arquivos do projeto.

2. Certifique-se de ter o Docker e Docker Compose instalados na sua máquina.

3. Acesse a pasta do projeto no terminal e execute:

   docker-compose up --build

4. As duas APIs e os bancos de dados serão iniciados em containers.

5. Acesse o frontend e preencha o formulário.

6. Ao clicar em "Salvar", os dados serão enviados para os dois endpoints POST /usuarios de cada API.
