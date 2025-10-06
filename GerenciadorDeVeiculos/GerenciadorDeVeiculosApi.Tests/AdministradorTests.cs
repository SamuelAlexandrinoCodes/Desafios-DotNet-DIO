using GerenciadorDeVeiculosApi.Models;
using Xunit;

namespace GerenciadorDeVeiculosApi.Tests;

public class AdministradorTests
{
    [Fact]
    public void DeveSerPossivelCriarUmAdministradorComDadosValidos()
    {
        // Padrão de Teste: Arrange, Act, Assert

        // Arrange (Organização): Preparamos os dados de entrada para o teste.
        var usernameEsperado = "testuser";
        var roleEsperada = "Gerente";

        // Act (Ação): Executamos a ação que queremos testar.
        var admin = new Administrador
        {
            Id = 1,
            Username = usernameEsperado,
            Password = "some_password_hash",
            Role = roleEsperada
        };

        // Assert (Verificação): Verificamos se o resultado da ação foi o esperado.
        Assert.NotNull(admin);
        Assert.Equal(usernameEsperado, admin.Username);
        Assert.Equal(roleEsperada, admin.Role);
    }
}