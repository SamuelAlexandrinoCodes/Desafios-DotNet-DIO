using GerenciadorDeVeiculosApi.Data;
using GerenciadorDeVeiculosApi.Models;
using Microsoft.EntityFrameworkCore;
using Xunit;

namespace GerenciadorDeVeiculosApi.Tests;

public class PersistenciaTests
{
    [Fact]
    public async Task DeveSerPossivelSalvarUmVeiculoNoBancoDeDados()
    {
        // Arrange (Organização)
        // 1. Configura o banco de dados em memória com um nome único para este teste
        var options = new DbContextOptionsBuilder<VeiculoContext>()
            .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString())
            .Options;

        // 2. Cria o veículo que será salvo
        var novoVeiculo = new Veiculo
        {
            Marca = "Tesla",
            Modelo = "Model S",
            Ano = 2024,
            Placa = "TSL2024"
        };
        
        // Act (Ação)
        // Usamos um bloco 'using' para garantir que o contexto seja descartado corretamente.
        using (var context = new VeiculoContext(options))
        {
            // 3. Adiciona o veículo ao contexto e salva as alterações
            context.Veiculos.Add(novoVeiculo);
            await context.SaveChangesAsync();
        }

        // Assert (Verificação)
        // 4. Verificamos se o veículo foi salvo e recebeu um Id do banco.
        Assert.NotEqual(0, novoVeiculo.Id);

        // 5. Para confirmar, criamos um novo contexto para o mesmo banco e
        // verificamos se conseguimos encontrar o registro que acabamos de salvar.
        using (var context = new VeiculoContext(options))
        {
            var veiculoSalvo = await context.Veiculos.FirstOrDefaultAsync(v => v.Id == novoVeiculo.Id);
            Assert.NotNull(veiculoSalvo);
            Assert.Equal("Tesla", veiculoSalvo.Marca);
        }
    }
}