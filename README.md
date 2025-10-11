# Desafios de C# e .NET - DIO

[English Version](#english-version-) | [Versão em Português](#versão-em-português-)

![.NET](https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=.net&logoColor=white)
![C#](https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![xUnit](https://img.shields.io/badge/xUnit-80AC4D?style=for-the-badge&logo=xunit&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

---

## English Version 🇬🇧

This repository contains the solutions to code challenges and projects I developed during the Fullstack .NET track on the DIO platform.

### 🚀 Completed Projects

| Project | Technology | Brief Description |
| :--- | :--- | :--- |
| **Vehicle Management API** | ASP.NET Core, EF Core, PostgreSQL, Docker, JWT, xUnit | A complete REST API built with Minimal APIs, featuring CRUD, JWT authentication, role-based authorization, a full test suite, and deployed to the cloud with Docker. |
| **DIO Sign-Up Page Clone** | React, Vite, styled-components | A pixel-perfect recreation of the DIO sign-up screen, focusing on advanced styling with styled-components, controlled forms, and client-side validation. |
| **GitHub Repo Explorer** | React, Vite, Axios, TailwindCSS | A React SPA that uses the GitHub API to fetch and display a user's repositories, demonstrating asynchronous data fetching and dynamic rendering. |
| **Calculator with TDD** | .NET 8, xUnit, FluentAssertions, Coverlet | A calculator app developed using a strict TDD methodology, ensuring 100% test coverage and CI automation with GitHub Actions. |
| **Unit Testing Challenge** | .NET 8, xUnit | Implementation of unit tests for list and string validation methods, covering a wide range of scenarios to ensure code quality. |

### 🛠️ Execution Instructions

#### Vehicle Management API (Cloud Deployed)
- **Live Access (Swagger):** `https://gerenciador-de-veiculos.onrender.com/swagger/index.html`
- **Test Credentials:** Use `POST /login` with `username: admin` and `password: admin123`.

#### DIO Sign-Up Page Clone (Local Execution)
1. Navigate to the `dio-clone-cadastro` project folder.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

#### GitHub Repo Explorer (Local Execution)
1. Navigate to the `github-repo-explorer` project folder.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

---

## Versão em Português 🇧🇷

Repositório com as soluções para os desafios de código e projetos desenvolvidos durante a trilha de Fullstack .NET na plataforma da DIO.

### 🚀 Projetos Concluídos

| Projeto | Tecnologia | Breve Descrição |
| :--- | :--- | :--- |
| **API de Gerenciamento de Veículos** | ASP.NET Core, EF Core, PostgreSQL, Docker, JWT, xUnit | API REST completa construída com Minimal APIs, com CRUD, autenticação JWT, autorização por papéis, suíte de testes e implantada na nuvem com Docker. |
| **Clone da Página de Cadastro DIO** | React, Vite, styled-components | Recriação da tela de cadastro da DIO, focando em estilização com styled-components, formulários controlados, validação de entradas e navegação simulada. |
| **Explorador de Repositórios GitHub**| React, Vite, Axios, TailwindCSS | Uma SPA em React que utiliza a API do GitHub para buscar e exibir os repositórios de um usuário, demonstrando busca de dados e renderização dinâmica. |
| **Calculadora com TDD** | .NET 8, xUnit, FluentAssertions, Coverlet | Aplicação de calculadora com histórico, desenvolvida com a metodologia TDD, garantindo 100% de cobertura de testes e automação com GitHub Actions. |
| **Desafio de Testes Unitários** | .NET 8, xUnit | Implementação de testes unitários para métodos de validação de listas e strings, cobrindo uma vasta gama de cenários para garantir a qualidade do código. |

### 🛠️ Instruções para Execução

#### API de Gerenciamento de Veículos (Deploy na Nuvem)
- **Acesse a API Ao Vivo (Swagger):** `https://gerenciador-de-veiculos.onrender.com/swagger/index.html`
- **Credenciais para Teste:** Utilize a rota `POST /login` com `username: admin` e `password: admin123` para obter um token JWT.

#### Clone da Página de Cadastro DIO (Execução Local)
1. Navegue até a pasta do projeto `dio-clone-cadastro`.
2. Instale as dependências: `npm install`
3. Execute o servidor de desenvolvimento: `npm run dev`

#### Explorador de Repositórios GitHub (Execução Local)
1. Navegue até a pasta do projeto `github-repo-explorer`.
2. Instale as dependências: `npm install`
3. Execute o servidor de desenvolvimento: `npm run dev`