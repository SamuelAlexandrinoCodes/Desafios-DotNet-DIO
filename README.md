# Desafios-DotNet-DIO
Repositório para os desafios e projetos de C# e .NET que desenvolvi na plataforma da DIO.

# Desafios de C# e .NET - DIO

Este repositório contém as soluções para os desafios de código e projetos que desenvolvi durante a trilha de FULLSTACK .NET na plataforma da DIO.

## Projetos Concluídos

| Projeto | Tecnologia | Breve Descrição |
| :--- | :--- | :--- |
| **Agenda de Tarefas com Entity Framework** | ASP.NET Core / EF Core | API REST para gerenciamento de tarefas, com endpoints CRUD e consultas personalizadas (`ObterTodos`, `ObterPorTitulo`, `ObterPorData`, `ObterPorStatus`). Documentada e testada via Swagger. |
## 🚀 Agenda de Tarefas – Como rodar
1. Entre na pasta do projeto:
   ```bash
   cd AgendamentoDeTarefasEntityFramework/AgendaTarefas
2. Execute
    dotnet run
3. Acesse no Navegador
    http://localhost:5157/swagger
4. Exemplo de JSON para POST
    {
    "titulo": "Estudar Entity Framework",
    "descricao": "Revisar conceitos de DbContext e Migrations",
    "data": "2025-10-01T09:00:00",
    "concluida": false
    }

| **Sistema de Hotelaria** | C# / .NET | Uma aplicação de console que simula um sistema de reserva de hotel. O projeto demonstra conceitos de Programação Orientada a Objetos, como classes (Pessoa, Suite, Reserva), listas, encapsulamento e interação com o usuário pelo terminal. |
| **Sistema de Estacionamento** | C# / .NET | Uma aplicação de console para gerenciar um estacionamento. O sistema permite cadastrar veículos, registrar a entrada e saída, e calcular o valor a ser pago com base no tempo de permanência. Utiliza conceitos de POO, listas e manipulação de dados em C#. |
| **Abstraindo um Celular com POO** | C# / .NET | Demonstração dos pilares da POO (Herança e Polimorfismo) através da criação de uma classe abstrata `Smartphone` e classes filhas `Nokia` e `Iphone`, cada uma com implementações próprias de métodos como `InstalarAplicativo`. |
