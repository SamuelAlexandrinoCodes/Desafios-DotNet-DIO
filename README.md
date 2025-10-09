# Desafios de C# e .NET - DIO

[English Version](#english-version-) | [Versão em Português](#versão-em-português-)

![.NET](https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=.net&logoColor=white)
![C#](https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white)
![xUnit](https://img.shields.io/badge/xUnit-80AC4D?style=for-the-badge&logo=xunit&logoColor=white)
![FluentAssertions](https://img.shields.io/badge/FluentAssertions-329664?style=for-the-badge&logo=fluentassertions&logoColor=white)
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
| **Vehicle Management API** | ASP.NET Core, EF Core, PostgreSQL, Docker, JWT, xUnit | A complete REST API built with Minimal APIs, featuring CRUD, JWT authentication, role-based authorization, a full test suite (Unit, Integration, API), and deployed to the cloud with Docker. |
| **Calculator with TDD** | .NET 8, xUnit, FluentAssertions, Coverlet | A calculator application with history, developed using a strict TDD (Test-Driven Development) methodology, ensuring 100% test coverage and CI automation with GitHub Actions. |
| **Unit Testing Challenge** | .NET 8, xUnit | Implementation of unit tests for list and string validation methods, covering a wide range of scenarios to ensure code quality and correctness. |
| **Task Scheduler with Entity Framework** | ASP.NET Core / EF Core | A REST API for task management, with CRUD endpoints and custom queries. Documented and tested via Swagger. |
| **Hotel System Simulation** | C# / .NET | A console application that simulates a hotel reservation system, demonstrating Object-Oriented Programming concepts. |
| **Parking System Simulation** | C# / .NET | A console application to manage a parking lot, calculating fees based on the duration of stay. |
| **Smartphone Abstraction with OOP** | C# / .NET | A demonstration of Inheritance and Polymorphism by creating an abstract `Smartphone` class and derived classes. |

### 🛠️ Execution Instructions

#### Vehicle Management API (Cloud Deployed)

This API is containerized with Docker and deployed on the Render platform.
1.  **Access the Live API (Swagger):** `https://gerenciador-de-veiculos.onrender.com/swagger/index.html`
2.  **Test Credentials:** Use `POST /login` with `username: admin` and `password: admin123` to get a JWT.
3.  **Source Code:** Located in the `GerenciadorDeVeiculos` subfolder.

#### Calculator with TDD

This project is a class library with a test suite. The instructions are to run the tests and check the coverage report.
1.  Navigate to the `CalculadoraTDD` solution folder.
2.  Run the tests with the command:
    ```bash
    dotnet test
    ```
3.  To run tests and generate the coverage report, use:
    ```bash
    dotnet test /p:CollectCoverage=true /p:CoverletOutputFormat=opencover
    ```

#### Unit Testing Challenge

1.  Navigate to the `ImplementandoValidacoesTestesUnitarios` solution folder.
2.  Run the tests from the root of the solution folder with the command:
    ```bash
    dotnet test
    ```

---

## Versão em Português 🇧🇷

Repositório com as soluções para os desafios de código e projetos desenvolvidos durante a trilha de Fullstack .NET na plataforma da DIO.

### 🚀 Projetos Concluídos

A tabela abaixo resume os principais projetos. Instruções detalhadas para a execução se encontram na seção seguinte.

| Projeto | Tecnologia | Breve Descrição |
| :--- | :--- | :--- |
| **API de Gerenciamento de Veículos** | ASP.NET Core, EF Core, PostgreSQL, Docker, JWT, xUnit | API REST completa construída com Minimal APIs, com CRUD, autenticação JWT, autorização por papéis, suíte de testes (Unidade, Integração, API) e implantada na nuvem com Docker. |
| **Calculadora com TDD** | .NET 8, xUnit, FluentAssertions, Coverlet | Aplicação de calculadora com histórico, desenvolvida com a metodologia TDD (Test-Driven Development), garantindo 100% de cobertura de testes e automação com GitHub Actions. |
| **Desafio de Testes Unitários** | .NET 8, xUnit | Implementação de testes unitários para métodos de validação de listas e strings, cobrindo uma vasta gama de cenários para garantir a qualidade e corretude do código. |
| **Agenda de Tarefas com Entity Framework** | ASP.NET Core / EF Core | API REST para gerenciamento de tarefas, com endpoints CRUD e consultas personalizadas. Documentada e testada via Swagger. |
| **Sistema de Hotelaria** | C# / .NET | Aplicação de console que simula um sistema de reserva de hotel, demonstrando conceitos de Programação Orientada a Objetos. |
| **Sistema de Estacionamento** | C# / .NET | Aplicação de console para gerenciar um estacionamento, calculando o valor a ser pago com base no tempo de permanência. |
| **Abstraindo um Celular com POO** | C# / .NET | Demonstração de Herança e Polimorfismo através da criação de uma classe abstrata `Smartphone` e classes filhas. |

### 🛠️ Instruções para Execução

#### API de Gerenciamento de Veículos (Deploy na Nuvem)

Esta API foi containerizada com Docker e implantada na plataforma Render.
1.  **Acesse a API Ao Vivo (Swagger):** `https://gerenciador-de-veiculos.onrender.com/swagger/index.html`
2.  **Credenciais para Teste:** Utilize a rota `POST /login` com `username: admin` e `password: admin123` para obter um token JWT.
3.  **Código-Fonte:** O código-fonte completo desta solução (API e Testes) está na subpasta `GerenciadorDeVeiculos`.

#### Calculadora com TDD

Este projeto é uma biblioteca de classes com uma suíte de testes. As instruções são para executar os testes e verificar a cobertura.
1.  Navegue até a pasta da solução `CalculadoraTDD`.
2.  Execute os testes com o comando:
    ```bash
    dotnet test
    ```
3.  Para executar os testes e gerar o relatório de cobertura, use:
    ```bash
    dotnet test /p:CollectCoverage=true /p:CoverletOutputFormat=opencover
    ```

#### Desafio de Testes Unitários

1.  Navegue até a pasta da solução `ImplementandoValidacoesTestesUnitarios`.
2.  Execute os testes a partir da raiz da solução com o comando:
    ```bash
    dotnet test
    ```