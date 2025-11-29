using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MariaBlogJuridico.Models;

namespace MariaBlogJuridico.Controllers
{
    [Route("[controller]")] // Isso cria o endereço /artigos
    [ApiController]
    public class ArtigosController : ControllerBase
    {
        // Uma lista estática para guardar os artigos na memória (enquanto o servidor roda)
        private static List<Artigo> ListaDeArtigos = new List<Artigo>
        {
            new Artigo {id = 1, Titulo = "Exemplo de artigo", Conteudo = "<p>Texto...</p>",
                DataPublicacao = DateTime.Now, Autor = "Sistema"}
        };

        [HttpGet]

        // Devolve todos os artigos para o Frontend
        public IEnumerable<Artigo> Get() {
            return ListaDeArtigos;
        }

        // GET: /Artigos/5
        [HttpGet("{id}")]
        public IActionResult GetPorId(int id) { 

            // Busca na lista o artigo que tem aquele ID
            var artigo = ListaDeArtigos.FirstOrDefault(a => a.id == id);

            if (artigo == null)
            {
                return NotFound(); // Retorna erro 404 se não achar
            }

            return Ok(artigo); // Retorna o artigo encontrado
        }

        // DELETE: /Artigos/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var artigo = ListaDeArtigos.FirstOrDefault(a => a.id == id);
            if (artigo == null) return NotFound();

            ListaDeArtigos.Remove(artigo);
            return NoContent();
        }

        [HttpPost]
        public IActionResult Post([FromBody] Artigo novoArtigo)
        {
            // Recebe o artigo novo
            novoArtigo.id = ListaDeArtigos.Count + 1;
            novoArtigo.DataPublicacao = DateTime.Now;

            // Salva na lista
            ListaDeArtigos.Add(novoArtigo);

            return Ok(novoArtigo);
        }
        // PUT: /Artigos/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Artigo artigoAtualizado)
        {
            // 1. Busca o artigo antigo na lista
            var artigoExistente = ListaDeArtigos.FirstOrDefault(a => a.id == id);

            if (artigoExistente== null) return NotFound();

            // 2. Atualiza os dados
            artigoExistente.Titulo = artigoAtualizado.Titulo;
            artigoExistente.Conteudo = artigoAtualizado.Conteudo;
            artigoExistente.Autor = artigoExistente.Autor;
            // Nota: não atualizamos a DataPublicacao para manter a original

            return Ok(artigoExistente);
        }
    }
}
