using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore; // Necessário para o banco de dados
using JurisBlog.Data;        // Necessário para ver o AppDbContext
using JurisBlog.Models;      // Necessário para ver o Artigo

namespace JurisBlog.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ArtigosController : ControllerBase
    {
        private readonly AppDbContext _context;

        // Construtor: O sistema entrega-nos a ligação ao banco aqui
        public ArtigosController(AppDbContext context)
        {
            _context = context;
        }

        // GET: /Artigos (Lê todos do banco)
        // GET: /Artigos?termo=trabalhista
        [HttpGet]
        public async Task<IEnumerable<Artigo>> Get([FromQuery] string? termo)
        {
            var query = _context.Artigos.AsQueryable();

            if (!string.IsNullOrEmpty(termo))
            {
                // Filtra se o termo aparecer no Título OU no Conteúdo
                query = query.Where(a => a.Titulo.Contains(termo) || a.Conteudo.Contains(termo));
            }

            // Ordena: Artigos mais novos aparecem primeiro (Decrescente)
            return await query.OrderByDescending(a => a.DataPublicacao).ToListAsync();
        }

        // GET: /Artigos/5 (Lê um específico)
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPorId(int id)
        {
            var artigo = await _context.Artigos.FindAsync(id);

            if (artigo == null) return NotFound();

            return Ok(artigo);
        }

        // POST: /Artigos/upload
        [HttpPost("upload")]
        public async Task<IActionResult> UploadImagem(IFormFile arquivo)
        {
            if (arquivo == null || arquivo.Length == 0)
                return BadRequest("Nenhuma imagem enviada.");

            // 1. Gera um nome único para a imagem (ex: 3842-foto.jpg)
            var nomeArquivo = Guid.NewGuid().ToString() + Path.GetExtension(arquivo.FileName);

            // 2. Caminho onde vai salvar (Pasta wwwroot/imagens)
            var caminhoPasta = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "imagens");

            // Garante que a pasta existe
            if (!Directory.Exists(caminhoPasta))
                Directory.CreateDirectory(caminhoPasta);

            var caminhoCompleto = Path.Combine(caminhoPasta, nomeArquivo);

            // 3. Salva o arquivo no disco
            using (var stream = new FileStream(caminhoCompleto, FileMode.Create))
            {
                await arquivo.CopyToAsync(stream);
            }

            // 4. Retorna a URL pública para o React usar
            // Exemplo: https://localhost:7298/imagens/3842-foto.jpg
            var urlImagem = $"{Request.Scheme}://{Request.Host}/imagens/{nomeArquivo}";

            return Ok(new { url = urlImagem });
        }

        // POST: /Artigos (Cria um novo)
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Artigo novoArtigo)
        {
            // Define a data de agora
            novoArtigo.DataPublicacao = DateTime.Now;

            // Adiciona ao contexto (mas ainda não gravou)
            _context.Artigos.Add(novoArtigo);

            // Grava de verdade no SQL
            await _context.SaveChangesAsync();

            return Ok(novoArtigo);
        }

        // PUT: /Artigos/5 (Atualiza)
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Artigo artigoAtualizado)
        {
            // Verifica se existe
            var artigoExistente = await _context.Artigos.FindAsync(id);
            if (artigoExistente == null) return NotFound();

            // Atualiza os dados
            artigoExistente.Titulo = artigoAtualizado.Titulo;
            artigoExistente.Conteudo = artigoAtualizado.Conteudo;
            artigoExistente.Autor = artigoAtualizado.Autor;
            // Não mexemos na data original

            // Grava as alterações
            await _context.SaveChangesAsync();

            return Ok(artigoExistente);
        }

        // DELETE: /Artigos/5 (Apaga)
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var artigo = await _context.Artigos.FindAsync(id);
            if (artigo == null) return NotFound();

            _context.Artigos.Remove(artigo);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}