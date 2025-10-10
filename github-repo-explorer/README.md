# GitHub Repo Explorer 🚀

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

Uma Single Page Application (SPA) moderna construída com React para buscar e exibir os repositórios públicos de qualquer usuário do GitHub.

---

## 🎯 Visão Geral do Projeto

O **GitHub Repo Explorer** é uma ferramenta de front-end que demonstra a integração com APIs de terceiros. A aplicação permite que o usuário digite um nome de usuário do GitHub, realize uma busca assíncrona na API oficial do GitHub e visualize os repositórios retornados em uma interface limpa e responsiva, ordenados por popularidade (número de estrelas).



## ✨ Funcionalidades Principais

- **Busca Dinâmica:** Consome a API `https://api.github.com` para buscar dados de repositórios em tempo real.
- **Renderização Condicional:** Exibe mensagens claras para estados de carregamento (`loading`), erro (ex: usuário não encontrado) e sucesso.
- **Ordenação por Relevância:** Os repositórios retornados são automaticamente ordenados pelo número de estrelas para destacar os projetos mais importantes.
- **Design Responsivo:** A interface, construída com **TailwindCSS**, se adapta perfeitamente a telas de desktop e dispositivos móveis.
- **Componentização:** O código foi estruturado em componentes reutilizáveis (`Header`, `RepoList`, `RepoCard`) para máxima manutenibilidade, seguindo as melhores práticas do React.

## 🛠️ Tecnologias Utilizadas

- **React:** Biblioteca principal para a construção da interface de usuário.
- **Hooks (`useState`):** Para gerenciamento de estado local (nome de usuário, lista de repositórios, loading, erro).
- **Vite:** Ferramenta de build ultrarrápida para um ambiente de desenvolvimento moderno.
- **Axios:** Cliente HTTP para realizar as requisições à API do GitHub de forma segura e eficiente.
- **TailwindCSS:** Framework de CSS utilitário para a estilização rápida e moderna da aplicação.

## ⚙️ Como Executar Localmente

Para clonar e rodar este projeto em sua máquina, siga os passos abaixo.

### Pré-requisitos
- Node.js (versão LTS recomendada)
- npm (geralmente instalado com o Node.js)

### Passos
1.  **Clone o repositório:**
    ```bash
    # Se você está clonando o projeto inteiro
    git clone [https://github.com/SamuelAlexandrinoCodes/Desafios-DotNet-DIO.git](https://github.com/SamuelAlexandrinoCodes/Desafios-DotNet-DIO.git)
    cd Desafios-DotNet-DIO/github-repo-explorer
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

---