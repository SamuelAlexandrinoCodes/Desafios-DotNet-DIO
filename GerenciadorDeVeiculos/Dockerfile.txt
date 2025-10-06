# Estágio 1: Build da Aplicação
# Usamos a imagem do SDK do .NET 9 para compilar nosso projeto
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# Copia os arquivos .csproj e restaura as dependências primeiro (camada de cache)
COPY ["GerenciadorDeVeiculosApi/GerenciadorDeVeiculosApi.csproj", "GerenciadorDeVeiculosApi/"]
COPY ["GerenciadorDeVeiculosApi.Tests/GerenciadorDeVeiculosApi.Tests.csproj", "GerenciadorDeVeiculosApi.Tests/"]
COPY ["GerenciadorDeVeiculos.sln", "."]
RUN dotnet restore "GerenciadorDeVeiculos.sln"

# Copia todo o resto do código-fonte
COPY . .

# Foca na pasta da API para o build e publish
WORKDIR "/src/GerenciadorDeVeiculosApi"
RUN dotnet publish "GerenciadorDeVeiculosApi.csproj" -c Release -o /app/publish --no-restore

# Estágio 2: Imagem Final de Execução
# Usamos a imagem de runtime do ASP.NET, que é muito menor e mais segura
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
COPY --from=build /app/publish .

# Define o comando para iniciar nossa API
ENTRYPOINT ["dotnet", "GerenciadorDeVeiculosApi.dll"]