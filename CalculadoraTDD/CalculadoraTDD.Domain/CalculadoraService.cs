namespace CalculadoraTDD.Domain;

public class CalculadoraService
{
    private readonly List<OperacaoHistorico> _historico = new();

    public double Somar(double a, double b)
    {
        double resultado = a + b;
        _historico.Add(new OperacaoHistorico($"{a} + {b}", resultado, DateTime.Now));
        return resultado;
    }

    public double Subtrair(double a, double b)
    {
        double resultado = a - b;
        _historico.Add(new OperacaoHistorico($"{a} - {b}", resultado, DateTime.Now));
        return resultado;
    }

    public double Multiplicar(double a, double b)
    {
        double resultado = a * b;
        _historico.Add(new OperacaoHistorico($"{a} * {b}", resultado, DateTime.Now));
        return resultado;
    }

    public double Dividir(double a, double b)
    {
        if (b == 0)
        {
            throw new DivideByZeroException();
        }
        double resultado = a / b;
        _historico.Add(new OperacaoHistorico($"{a} / {b}", resultado, DateTime.Now));
        return resultado;
    }

    public List<OperacaoHistorico> ListarHistorico()
    {
        // Retorna uma nova lista ordenada para evitar modificações externas
        return _historico.OrderByDescending(o => o.Timestamp).ToList();
    }

    public void LimparHistorico()
    {
        _historico.Clear();
    }
}