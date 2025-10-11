using GerenciadorDeVeiculosApi.Data;
using GerenciadorDeVeiculosApi.Models;
using Microsoft.EntityFrameworkCore;

namespace GerenciadorDeVeiculosApi.Endpoints;

public static class VeiculosEndpoints
{
    public static void MapVeiculosEndpoints(this IEndpointRouteBuilder app)
    {
        // POST: /veiculos
        app.MapPost("/veiculos", async (VeiculoContext context, Veiculo veiculo) =>
        {
            context.Veiculos.Add(veiculo);
            await context.SaveChangesAsync();
            return Results.Created($"/veiculos/{veiculo.Id}", veiculo);
        })
        .RequireAuthorization(policy => policy.RequireRole("Adm", "Gerente"));

        // GET: /veiculos
        app.MapGet("/veiculos", async (VeiculoContext context) =>
        {
            var veiculos = await context.Veiculos.ToListAsync();
            return Results.Ok(veiculos);
        })
        .RequireAuthorization(policy => policy.RequireRole("Adm", "Gerente"));

        // GET: /veiculos/{id}
        app.MapGet("/veiculos/{id}", async (VeiculoContext context, int id) =>
        {
            var veiculo = await context.Veiculos.FindAsync(id);
            return veiculo != null ? Results.Ok(veiculo) : Results.NotFound();
        })
        .RequireAuthorization(policy => policy.RequireRole("Adm", "Gerente", "Cliente"));

        // PUT: /veiculos/{id}
        app.MapPut("/veiculos/{id}", async (VeiculoContext context, int id, Veiculo veiculoAtualizado) =>
        {
            var veiculo = await context.Veiculos.FindAsync(id);
            if (veiculo == null) return Results.NotFound();

            veiculo.Marca = veiculoAtualizado.Marca;
            veiculo.Modelo = veiculoAtualizado.Modelo;
            veiculo.Ano = veiculoAtualizado.Ano;
            veiculo.Placa = veiculoAtualizado.Placa;

            await context.SaveChangesAsync();
            return Results.Ok(veiculo);
        })
        .RequireAuthorization(policy => policy.RequireRole("Adm", "Gerente"));

        // DELETE: /veiculos/{id}
        app.MapDelete("/veiculos/{id}", async (VeiculoContext context, int id) =>
        {
            var veiculo = await context.Veiculos.FindAsync(id);
            if (veiculo == null) return Results.NotFound();

            context.Veiculos.Remove(veiculo);
            await context.SaveChangesAsync();
            return Results.NoContent();
        })
        .RequireAuthorization(policy => policy.RequireRole("Adm", "Gerente"));
    }
}