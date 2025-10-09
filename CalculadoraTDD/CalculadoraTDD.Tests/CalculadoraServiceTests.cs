using CalculadoraTDD.Domain;
using FluentAssertions;
using System;
using System.Linq;

namespace CalculadoraTDD.Tests;

public class CalculadoraServiceTests
{
    private readonly CalculadoraService _calculadora;

    public CalculadoraServiceTests()
    {
        // Arrange global para todos os testes
        _calculadora = new CalculadoraService();
    }

    [Theory]
    [InlineData(1, 2, 3)]
    [InlineData(-1, -2, -3)]
    [InlineData(5.5, 2.5, 8.0)]
    public void DadoDoisNumeros_QuandoSomar_EntaoDeveRetornarASomaCorreta(double a, double b, double esperado)
    {
        // Act
        double resultado = _calculadora.Somar(a, b);

        // Assert
        resultado.Should().Be(esperado);
    }
    
    [Theory]
    [InlineData(5, 2, 3)]
    [InlineData(-1, 2, -3)]
    [InlineData(10.5, 2.5, 8.0)]
    public void DadoDoisNumeros_QuandoSubtrair_EntaoDeveRetornarADiferencaCorreta(double a, double b, double esperado)
    {
        // Act
        double resultado = _calculadora.Subtrair(a, b);

        // Assert
        resultado.Should().Be(esperado);
    }
    
    [Theory]
    [InlineData(3, 4, 12)]
    [InlineData(-2, 5, -10)]
    [InlineData(2.5, 2, 5.0)]
    public void DadoDoisNumeros_QuandoMultiplicar_EntaoDeveRetornarOProdutoCorreto(double a, double b, double esperado)
    {
        // Act
        double resultado = _calculadora.Multiplicar(a, b);

        // Assert
        resultado.Should().Be(esperado);
    }
    
    [Theory]
    [InlineData(10, 2, 5)]
    [InlineData(-15, 3, -5)]
    [InlineData(8.4, 2, 4.2)]
    public void DadoDoisNumeros_QuandoDividir_EntaoDeveRetornarOQuocienteCorreto(double a, double b, double esperado)
    {
        // Act
        double resultado = _calculadora.Dividir(a, b);

        // Assert
        resultado.Should().Be(esperado);
    }

    [Fact]
    public void DadoUmaDivisaoPorZero_QuandoExecutar_EntaoDeveLancarExcecao()
    {
        // Arrange
        Action acao = () => _calculadora.Dividir(10, 0);

        // Act & Assert
        acao.Should().Throw<DivideByZeroException>();
    }

    [Fact]
    public void DadoVariasOperacoes_QuandoSolicitarHistorico_EntaoDeveRetornarListaNaOrdemCorreta()
    {
        // Arrange
        _calculadora.Somar(1, 1);
        _calculadora.Subtrair(5, 2);
        
        // Act
        var historico = _calculadora.ListarHistorico();

        // Assert
        historico.Should().HaveCount(2);
        historico.First().Expressao.Should().Be("5 - 2"); // A última operação deve ser a primeira da lista
        historico.Last().Expressao.Should().Be("1 + 1");
    }

    [Fact]
    public void DadoUmHistoricoPreenchido_QuandoLimpar_EntaoHistoricoDeveFicarVazio()
    {
        // Arrange
        _calculadora.Multiplicar(10, 2);

        // Act
        _calculadora.LimparHistorico();
        var historico = _calculadora.ListarHistorico();

        // Assert
        historico.Should().BeEmpty();
    }
}