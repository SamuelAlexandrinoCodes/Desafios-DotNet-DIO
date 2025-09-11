using DesafioProjetoHospedagem.Models;
using System;

// Adicionando o using para o seu catálogo
using static DesafioProjetoHospedagem.Models.CatalogoSuites;

try
{
    Reserva novaReserva = new Reserva(diasReservados: 10);
    novaReserva.CriarReservaInterativa();
}
catch (OperationCanceledException ex)
{
    Console.ForegroundColor = ConsoleColor.Red;
    Console.WriteLine($"\nOperação finalizada: {ex.Message}");
    Console.ResetColor();
}
catch (Exception ex)
{
    Console.WriteLine($"Ocorreu um erro inesperado: {ex.Message}");
}
