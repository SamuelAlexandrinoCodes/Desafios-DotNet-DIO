using GerenciadorDeVeiculosApi.Data;
using GerenciadorDeVeiculosApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace GerenciadorDeVeiculosApi.Endpoints;

public static class AuthEndpoints
{
    public static void MapAuthEndpoints(this WebApplication app)
    {
        
        // NOVO ENDPOINT SEGURO PARA LISTAR USUÁRIOS
        app.MapGet("/administradores", async (VeiculoContext context) => 
        {
            var admins = await context.Administradores
                // O .Select() cria um novo objeto para cada item da lista
                // garantindo que o hash da senha NUNCA seja enviado.
                .Select(a => new { a.Id, a.Username, a.Role })
                .ToListAsync();
            
            return Results.Ok(admins);
        })
        .RequireAuthorization(policy => policy.RequireRole("Adm")); // Apenas 'Adm' pode acessar

        // ENDPOINT DE LOGIN
        

        app.MapPost("/login", async (VeiculoContext context, LoginRequest loginRequest, IConfiguration configuration) =>
        {
            var admin = await context.Administradores
                .FirstOrDefaultAsync(a => a.Username == loginRequest.Username);

            if (admin is null || loginRequest.Password != "admin123")
            {
                return Results.Unauthorized();
            }

            var key = Encoding.ASCII.GetBytes(configuration["Jwt:Key"]!);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(ClaimTypes.Name, admin.Username),
                    new Claim(ClaimTypes.Role, admin.Role)
                }),
                Expires = DateTime.UtcNow.AddHours(8),
                Issuer = configuration["Jwt:Issuer"],
                Audience = configuration["Jwt:Audience"],
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var stringToken = tokenHandler.WriteToken(token);

            return Results.Ok(new { token = stringToken });
        });
    }
}