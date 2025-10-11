using Microsoft.EntityFrameworkCore;
using GerenciadorDeVeiculosApi.Models;

namespace GerenciadorDeVeiculosApi.Data;

public class VeiculoContext : DbContext
{
    public VeiculoContext(DbContextOptions<VeiculoContext> options) : base(options) { }
    public DbSet<Veiculo> Veiculos { get; set; } = null!;
    public DbSet<Administrador> Administradores { get; set; } = null!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Administrador>().HasData(
            new Administrador
            {
                Id = 1,
                Username = "admin",
                Password = "HASH_SIMULADO_DA_SENHA_ADMIN123", // In a real application, passwords should be hashed and salted.
                Role = "Adm"
            }
        );
    }
}