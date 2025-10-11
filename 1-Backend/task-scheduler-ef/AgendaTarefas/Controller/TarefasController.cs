using Microsoft.AspNetCore.Mvc;
using AgendaTarefas.Data;
using AgendaTarefas.Models;
using Microsoft.EntityFrameworkCore;

namespace AgendaTarefas.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TarefaController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TarefaController(AppDbContext context)
        {
            _context = context;
        }

        // GET /Tarefa/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Tarefa>> GetById(int id)
        {
            var tarefa = await _context.Tarefas.FindAsync(id);
            return tarefa == null ? NotFound() : tarefa;
        }

        // PUT /Tarefa/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Tarefa tarefa)
        {
            if (id != tarefa.Id) return BadRequest();
            _context.Entry(tarefa).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE /Tarefa/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var tarefa = await _context.Tarefas.FindAsync(id);
            if (tarefa == null) return NotFound();
            _context.Tarefas.Remove(tarefa);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // GET /Tarefa/ObterTodos
        [HttpGet("ObterTodos")]
        public async Task<ActionResult<IEnumerable<Tarefa>>> GetAll()
            => await _context.Tarefas.ToListAsync();

        // GET /Tarefa/ObterPorTitulo?titulo=xxx
        [HttpGet("ObterPorTitulo")]
        public async Task<ActionResult<IEnumerable<Tarefa>>> GetByTitulo(string titulo)
            => await _context.Tarefas
                             .Where(t => t.Titulo.Contains(titulo))
                             .ToListAsync();

        // GET /Tarefa/ObterPorData?data=2025-09-30
        [HttpGet("ObterPorData")]
        public async Task<ActionResult<IEnumerable<Tarefa>>> GetByData(DateTime data)
            => await _context.Tarefas
                             .Where(t => t.Data.Date == data.Date)
                             .ToListAsync();

        // GET /Tarefa/ObterPorStatus?status=true
        [HttpGet("ObterPorStatus")]
        public async Task<ActionResult<IEnumerable<Tarefa>>> GetByStatus(bool status)
            => await _context.Tarefas
                             .Where(t => t.Concluida == status)
                             .ToListAsync();

        // POST /Tarefa
        [HttpPost]
        public async Task<ActionResult<Tarefa>> Create(Tarefa tarefa)
        {
            _context.Tarefas.Add(tarefa);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = tarefa.Id }, tarefa);
        }
    }
}
