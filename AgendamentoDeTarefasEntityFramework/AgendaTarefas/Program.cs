using Microsoft.OpenApi.Models;
using AgendaTarefas.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Adiciona serviços ao container
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseInMemoryDatabase("AgendaDB")); // Banco em memória

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "AgendaTarefas API",
        Version = "v1",
        Description = "API para gerenciamento de tarefas com .NET e Entity Framework"
    });
});

var app = builder.Build();


// Configura o pipeline HTTP
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "AgendaTarefas API v1");
        c.RoutePrefix = "swagger"; // acessa em http://localhost:5157/swagger
    });
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
