# Desafios de C# e .NET - DIO

![.NET](https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=.net&logoColor=white)
![C#](https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)

Repositório com as soluções para os desafios de código e projetos desenvolvidos durante a trilha de Fullstack .NET na plataforma da DIO.

## 🚀 Projetos Concluídos

A tabela abaixo resume os principais projetos. Instruções detalhadas para a execução se encontram na seção seguinte.

| Projeto | Tecnologia | Breve Descrição |
| :--- | :--- | :--- |
| **API de Gerenciamento de Veículos** | ASP.NET Core, EF Core, PostgreSQL, Docker, JWT | API REST completa construída com Minimal APIs, com CRUD, autenticação JWT, autorização por papéis, suíte de testes (xUnit) e implantada na nuvem com Docker. |
| **Agenda de Tarefas com Entity Framework** | ASP.NET Core / EF Core | API REST para gerenciamento de tarefas, com endpoints CRUD e consultas personalizadas. Documentada e testada via Swagger. |
| **Sistema de Hotelaria** | C# / .NET | Aplicação de console que simula um sistema de reserva de hotel, demonstrando conceitos de Programação Orientada a Objetos. |
| **Sistema de Estacionamento** | C# / .NET | Aplicação de console para gerenciar um estacionamento, calculando o valor a ser pago com base no tempo de permanência. |
| **Abstraindo um Celular com POO** | C# / .NET | Demonstração de Herança e Polimorfismo através da criação de uma classe abstrata `Smartphone` e classes filhas. |

## 🛠️ Instruções para Execução

### API de Gerenciamento de Veículos (Deploy na Nuvem)

Esta API foi containerizada com Docker e implantada na plataforma Render.

1.  **Acesse a API Ao Vivo (Swagger):**
    A documentação interativa da API está disponível no seguinte endereço:
    **`https://gerenciador-de-veiculos.onrender.com/swagger/index.html`**

2.  **Credenciais para Teste:**
    Para testar os endpoints protegidos, utilize a rota `POST /login` com as seguintes credenciais para obter um token JWT:
    * **username:** `admin`
    * **password:** `admin123`

3.  **Código-Fonte:**
    O código-fonte completo desta solução (API e Testes) está na subpasta `GerenciadorDeVeiculos` deste repositório.

### Agenda de Tarefas com Entity Framework (Execução Local)

1.  Clone o repositório e entre na pasta do projeto:
    ```bash
    cd AgendamentoDeTarefasEntityFramework/AgendaTarefas
    ```
2.  Execute o projeto com o comando:
    ```bash
    dotnet run
    ```
3.  Acesse a documentação do Swagger no seu navegador para testar a API:
    [http://localhost:5157/swagger](http://localhost:5157/swagger)