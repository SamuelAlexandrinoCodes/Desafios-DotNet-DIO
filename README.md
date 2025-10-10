# Desafios de C# e .NET - DIO

[English Version](#english-version-) | [Versão em Português](#versão-em-português-)

![.NET](https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=.net&logoColor=white)
![C#](https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![xUnit](https://img.shields.io/badge/xUnit-80AC4D?style=for-the-badge&logo=xunit&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)

---

## English Version 🇬🇧

This repository contains the solutions to code challenges and projects I developed during the Fullstack .NET track on the DIO platform.

### 🚀 Completed Projects

The table below summarizes the main projects. Detailed execution instructions can be found in the following section.

| Project | Technology | Brief Description |
| :--- | :--- | :--- |
| **Vehicle Management API** | ASP.NET Core, EF Core, PostgreSQL, Docker, JWT, xUnit | A complete REST API built with Minimal APIs, featuring CRUD, JWT authentication, role-based authorization, a full test suite, and deployed to the cloud with Docker. |
| **GitHub Repo Explorer** | React, Vite, Axios, TailwindCSS | A React SPA that uses the GitHub API to fetch and display a user's repositories, sorted by stars, demonstrating asynchronous data fetching and dynamic rendering. |
| **React Calculator** | React, Vite, TailwindCSS | A modern, responsive calculator built as a Single Page Application (SPA), using functional components, React Hooks for state management, and keyboard support. |
| **Calculator with TDD** | .NET 8, xUnit, FluentAssertions, Coverlet | A calculator application with history, developed using a strict TDD (Test-Driven Development) methodology, ensuring 100% test coverage and CI automation with GitHub Actions. |
| **Unit Testing Challenge** | .NET 8, xUnit | Implementation of unit tests for list and string validation methods, covering a wide range of scenarios to ensure code quality and correctness. |
| **Task Scheduler with EF** | ASP.NET Core / EF Core | A REST API for task management, with CRUD endpoints and custom queries. Documented and tested via Swagger. |

### 🛠️ Execution Instructions

#### Vehicle Management API (Cloud Deployed)

1.  **Access the Live API (Swagger):** `https://gerenciador-de-veiculos.onrender.com/swagger/index.html`
2.  **Test Credentials:** Use `POST /login` with `username: admin` and `password: admin123` to get a JWT.

#### GitHub Repo Explorer (Local Execution)
1. Navigate to the `github-repo-explorer` project folder.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

#### React Calculator (Local Execution)

1.  Navigate to the `calculadora-react` project folder.
2.  Install dependencies: `npm install`
3.  Run the development server: `npm run dev`

---

## Versão em Português 🇧🇷

Repositório com as soluções para os desafios de código e projetos desenvolvidos durante a trilha de Fullstack .NET na plataforma da DIO.

### 🚀 Projetos Concluídos

A tabela abaixo resume os principais projetos. Instruções detalhadas para a execução se encontram na seção seguinte.

| Projeto | Tecnologia | Breve Descrição |
| :--- | :--- | :--- |
| **API de Gerenciamento de Veículos** | ASP.NET Core, EF Core, PostgreSQL, Docker, JWT, xUnit | API REST completa construída com Minimal APIs, com CRUD, autenticação JWT, autorização por papéis, suíte de testes e implantada na nuvem com Docker. |
| **Explorador de Repositórios GitHub**| React, Vite, Axios, TailwindCSS | Uma SPA em React que utiliza a API do GitHub para buscar e exibir os repositórios de um usuário, ordenados por estrelas, demonstrando busca de dados e renderização dinâmica. |
| **Calculadora em React** | React, Vite, TailwindCSS | Uma calculadora moderna e responsiva construída como uma SPA, utilizando componentes funcionais, Hooks para gerenciamento de estado e suporte a teclado. |
| **Calculadora com TDD** | .NET 8, xUnit, FluentAssertions, Coverlet | Aplicação de calculadora com histórico, desenvolvida com a metodologia TDD, garantindo 100% de cobertura de testes e automação com GitHub Actions. |
| **Desafio de Testes Unitários** | .NET 8, xUnit | Implementação de testes unitários para métodos de validação de listas e strings, cobrindo uma vasta gama de cenários para garantir a qualidade do código. |
| **Agenda de Tarefas com EF** | ASP.NET Core / EF Core | API REST para gerenciamento de tarefas, com endpoints CRUD e consultas personalizadas. Documentada e testada via Swagger. |


### 🛠️ Instruções para Execução

#### API de Gerenciamento de Veículos (Deploy na Nuvem)

1.  **Acesse a API Ao Vivo (Swagger):** `https://gerenciador-de-veiculos.onrender.com/swagger/index.html`
2.  **Credenciais para Teste:** Utilize a rota `POST /login` com `username: admin` e `password: admin123` para obter um token JWT.

#### Explorador de Repositórios GitHub (Execução Local)
1. Navegue até a pasta do projeto `github-repo-explorer`.
2. Instale as dependências: `npm install`
3. Execute o servidor de desenvolvimento: `npm run dev`

#### Calculadora em React (Execução Local)

1.  Navegue até a pasta do projeto `calculadora-react`.
2.  Instale as dependências: `npm install`
3.  Execute o servidor de desenvolvimento: `npm run dev`