# Calculadora com Desenvolvimento Guiado por Testes (TDD)

![.NET](https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=.net&logoColor=white)
![C#](https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white)
![xUnit](https://img.shields.io/badge/xUnit-80AC4D?style=for-the-badge&logo=xunit&logoColor=white)
![FluentAssertions](https://img.shields.io/badge/FluentAssertions-329664?style=for-the-badge&logo=fluentassertions&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

Este projeto é uma demonstração prática da metodologia de **Desenvolvimento Guiado por Testes (TDD)** aplicada a uma aplicação de calculadora com histórico. O foco não é a complexidade da calculadora em si, mas a disciplina e a qualidade do processo de engenharia de software empregado.

---

## 🎯 Objetivo do Projeto

O objetivo principal é demonstrar a construção de um software robusto, confiável e de fácil manutenção, garantindo que cada peça de lógica seja validada por testes automatizados antes mesmo de ser escrita.

## ✨ Princípios e Tecnologias em Ação

Este projeto serve como um caso de estudo para as seguintes práticas de engenharia de software de elite:

- **Desenvolvimento Guiado por Testes (TDD):** A lógica do `CalculadoraService` foi desenvolvida seguindo rigorosamente o ciclo **"Vermelho -> Verde -> Refatorar"**. Para cada funcionalidade, um teste que falhava foi escrito primeiro, seguido pelo código mínimo para fazê-lo passar, e então refatorado para garantir a qualidade.

- **Alta Cobertura de Testes:** A suíte de testes, construída com **xUnit** e **FluentAssertions**, foi projetada para alcançar **100% de cobertura de linha** na classe de serviço principal. A cobertura é medida com a ferramenta `Coverlet`, garantindo que toda a lógica de negócio esteja protegida contra regressões.

- **Integração Contínua (CI):** Um workflow com **GitHub Actions** está configurado para, a cada `push` ou `pull request`, executar automaticamente toda a suíte de testes. Isso cria um escudo de defesa que garante a integridade do código de forma contínua.

## ⚙️ Funcionalidades

- Operações aritméticas básicas: Soma, Subtração, Multiplicação e Divisão.
- Tratamento de erro para divisão por zero através de exceções.
- Histórico de todas as operações realizadas, ordenado da mais recente para a mais antiga.
- Funcionalidade para limpar o histórico de operações.

## 🛠️ Como Executar os Testes

Este projeto é uma biblioteca de classes com uma suíte de testes. As instruções são para executar os testes e verificar a cobertura de código.

### Pré-requisitos
- .NET SDK 8.0 ou superior

### Passos
1.  **Clone o repositório e navegue até a pasta da solução:**
    ```bash
    # Se estiver clonando o repositório principal
    cd Desafios-DotNet-DIO/CalculadoraTDD
    ```

2.  **Execute a suíte de testes:**
    A partir da pasta `CalculadoraTDD`, execute o comando:
    ```bash
    dotnet test
    ```
    O resultado esperado é a execução bem-sucedida de todos os 7 testes.

3.  **Gere o Relatório de Cobertura:**
    Para executar os testes e medir a cobertura de código, use o comando:
    ```bash
    dotnet test /p:CollectCoverage=true /p:CoverletOutputFormat=opencover
    ```
    Isto irá gerar um relatório `coverage.opencover.xml` e mostrar um resumo da cobertura no terminal.