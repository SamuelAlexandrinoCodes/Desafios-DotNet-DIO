# Clone da Tela de Cadastro DIO com React

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![React Icons](https://img.shields.io/badge/React_Icons-E91E63?style=for-the-badge&logo=react-icons&logoColor=white)

Este projeto é uma recriação funcional e estilizada da tela de cadastro da plataforma DIO, desenvolvido como um desafio prático de front-end utilizando React e `styled-components`.

## 🎯 Visão Geral do Projeto

O objetivo foi construir uma Single Page Application (SPA) que simula o fluxo completo de cadastro e login de um usuário. A aplicação demonstra o uso de componentes funcionais, gerenciamento de estado com Hooks, validação de formulários do lado do cliente e uma navegação simulada entre as telas de cadastro, login e um painel de boas-vindas.



## ✨ Funcionalidades Principais

- **Estilização Avançada:** A interface foi construída inteiramente com **`styled-components`**, demonstrando uma abordagem de CSS-in-JS para criar componentes de UI encapsulados e reutilizáveis.
- **Formulários Controlados:** Todos os campos do formulário são controlados pelo estado do React (`useState`), permitindo validações em tempo real.
- **Validação de Entradas:** Implementação de um sistema de validação que verifica campos obrigatórios, formato de e-mail, força da senha e confirmação de senha.
- **Fluxo de Usuário Completo:** Simulação da navegação entre as telas de Cadastro, Login e um Dashboard pós-login, com persistência de usuários em memória durante a sessão.
- **UI Profissional:** Interface limpa e moderna, com ícones (`react-icons`) e feedback visual para o usuário durante o carregamento e em caso de sucesso ou erro.

## 🛠️ Tecnologias Utilizadas

- **React:** Biblioteca principal para a construção da interface de usuário.
- **Hooks (`useState`):** Para gerenciamento de todo o estado da aplicação.
- **Vite:** Ferramenta de build para um ambiente de desenvolvimento rápido e moderno.
- **Styled-components:** Para a estilização componentizada e CSS-in-JS.
- **React-icons:** Para a inclusão de ícones de alta qualidade na interface.

## ⚙️ Como Executar Localmente

1.  **Clone o repositório e navegue até a pasta do projeto:**
    ```bash
    # Se estiver clonando o repositório principal
    cd Desafios-DotNet-DIO/dio-clone-cadastro
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

4.  Abra seu navegador e acesse a URL fornecida (geralmente `http://localhost:5173`).