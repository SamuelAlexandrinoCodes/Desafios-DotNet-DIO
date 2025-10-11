using Microsoft.AspNetCore.Mvc.Testing;
using Xunit;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Authentication;
using System.Text.Encodings.Web;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.TestHost; // <-- Novo 'using' necessário

namespace GerenciadorDeVeiculosApi.Tests;

public class VeiculosApiTests : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly HttpClient _client;

    public VeiculosApiTests(WebApplicationFactory<Program> factory)
    {
        _client = factory.WithWebHostBuilder(builder =>
        {
            // Use ConfigureTestServices para sobrescrever os serviços de produção
            builder.ConfigureTestServices(services =>
            {
                // Removemos a necessidade de encontrar e remover o serviço anterior.
                // Esta abordagem é mais limpa e sobrescreve a configuração padrão.
                services.AddAuthentication(options =>
                {
                    options.DefaultAuthenticateScheme = "TestScheme"; // <-- Ordem crucial: define nosso esquema como padrão
                    options.DefaultChallengeScheme = "TestScheme";
                })
                .AddScheme<AuthenticationSchemeOptions, TestAuthHandler>("TestScheme", options => { });
            });
        }).CreateClient();
    }

    [Fact]
    public async Task GetVeiculos_Endpoint_ComAutorizacao_DeveRetornarSucesso()
    {
        // Arrange
        // Como nosso esquema de teste agora é o padrão, o cabeçalho de autorização
        // não é mais estritamente necessário, mas é uma boa prática mantê-lo para clareza.
        // O sistema usará o handler "TestScheme" por padrão de qualquer maneira.

        // Act
        var response = await _client.GetAsync("/veiculos");

        // Assert
        response.EnsureSuccessStatusCode();
        Assert.Equal("application/json; charset=utf-8", response.Content.Headers.ContentType?.ToString());
    }
}

// Handler de autenticação falso para os testes (permanece o mesmo)
public class TestAuthHandler : AuthenticationHandler<AuthenticationSchemeOptions>
{
    public TestAuthHandler(IOptionsMonitor<AuthenticationSchemeOptions> options,
        ILoggerFactory logger, UrlEncoder encoder)
        : base(options, logger, encoder) { }

    protected override Task<AuthenticateResult> HandleAuthenticateAsync()
    {
        var claims = new[] {
            new Claim(ClaimTypes.Name, "Test User"),
            new Claim(ClaimTypes.Role, "Gerente"),
        };
        var identity = new ClaimsIdentity(claims, "Test");
        var principal = new ClaimsPrincipal(identity);
        var ticket = new AuthenticationTicket(principal, "TestScheme");

        var result = AuthenticateResult.Success(ticket);
        return Task.FromResult(result);
    }
}