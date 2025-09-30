# Desafios de C# e .NET - DIO

![.NET](https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=.net&logoColor=white)
![C#](https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)

Repositório com as soluções para os desafios de código e projetos desenvolvidos durante a trilha de Fullstack .NET na plataforma da DIO.

## 🚀 Projetos Concluídos

A tabela abaixo resume os principais projetos. Instruções detalhadas para a execução (quando aplicável) se encontram na seção seguinte.

| Projeto                                     | Tecnologia              | Breve Descrição                                                                                                                |
| :------------------------------------------ | :---------------------- | :----------------------------------------------------------------------------------------------------------------------------- |
| **Agenda de Tarefas com Entity Framework** | ASP.NET Core / EF Core  | API REST para gerenciamento de tarefas, com endpoints CRUD e consultas personalizadas. Documentada e testada via Swagger.      |
| **Sistema de Hotelaria** | C# / .NET               | Aplicação de console que simula um sistema de reserva de hotel, demonstrando conceitos de Programação Orientada a Objetos.       |
| **Sistema de Estacionamento** | C# / .NET               | Aplicação de console para gerenciar um estacionamento, calculando o valor a ser pago com base no tempo de permanência.         |
| **Abstraindo um Celular com POO** | C# / .NET               | Demonstração de Herança e Polimorfismo através da criação de uma classe abstrata `Smartphone` e classes filhas `Nokia` e `Iphone`. |

## 🛠️ Instruções para Execução

### Agenda de Tarefas com Entity Framework

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

4.  Para testar o endpoint de criação (`POST`), utilize o seguinte JSON como exemplo no corpo da requisição:
    ```json
    {
      "titulo": "Estudar Entity Framework",
      "descricao": "Revisar conceitos de DbContext e Migrations",
      "data": "2025-10-01T09:00:00",
      "concluida": false
    }
    ```