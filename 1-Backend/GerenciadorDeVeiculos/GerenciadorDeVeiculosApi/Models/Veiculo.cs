namespace GerenciadorDeVeiculosApi.Models;

public class Veiculo
{
    public int Id { get; set; }
    public string Marca { get; set; } = string.Empty;
    public string Modelo { get; set; } = string.Empty;
    public int Ano { get; set; }
    public string Placa { get; set; } = string.Empty;
}