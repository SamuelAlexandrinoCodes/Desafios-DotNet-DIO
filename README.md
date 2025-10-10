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
| **React Calculator** | React, Vite, TailwindCSS | A modern, responsive calculator built as a Single Page Application (SPA), using functional components, React Hooks for state management, and keyboard support. |
| **Calculator with TDD** | .NET 8, xUnit, FluentAssertions, Coverlet | A calculator application with history, developed using a strict TDD (Test-Driven Development) methodology, ensuring 100% test coverage and CI automation with GitHub Actions. |
| **Unit Testing Challenge** | .NET 8, xUnit | Implementation of unit tests for list and string validation methods, covering a wide range of scenarios to ensure code quality and correctness. |
| **Task Scheduler with EF** | ASP.NET Core / EF Core | A REST API for task management, with CRUD endpoints and custom queries. Documented and tested via Swagger. |
| **Hotel System Simulation** | C# / .NET | A console application that simulates a hotel reservation system, demonstrating Object-Oriented Programming concepts. |

### 🛠️ Execution Instructions

#### Vehicle Management API (Cloud Deployed)

1.  **Access the Live API (Swagger):** `https://gerenciador-de-veiculos.onrender.com/swagger/index.html`
2.  **Test Credentials:** Use `POST /login` with `username: admin` and `password: admin123` to get a JWT.
3.  **Source Code:** Located in the `GerenciadorDeVeiculos` subfolder.

#### React Calculator (Local Execution)

1.  Navigate to the `calculadora-react` project folder.
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev