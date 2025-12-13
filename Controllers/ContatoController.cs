using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MailKit;
using System.Linq.Expressions;

namespace MariaBlogJuridico.Controllers
{
    public class MensagemContato
    {
        public string Nome { get; set; }
        public string Email { get; set; }
        public string? Assunto { get; set; }
        public string Mensagem { get; set; }
    }

    [Route("[controller]")]
    [ApiController]
    public class ContatoController : ControllerBase
    {
        [HttpPost]
        public IActionResult EnviarEmail([FromBody] MensagemContato dados)
        {
            try
            {
                // Aqui simulamos o envio mostrando no Output do Visual Studio
                // Para ver isso, olhe a janelinha "Saída" lá embaixo quando enviar
                System.Diagnostics.Debug.WriteLine($"[NOVO E-MAIL] De: {dados.Nome} ({dados.Email})");
                System.Diagnostics.Debug.WriteLine($"Assunto: {dados.Assunto}");
                System.Diagnostics.Debug.WriteLine($"Mensagem: {dados.Mensagem}");

                return Ok(new { mensagem = "Mensagem enviada com sucesso!" });
            }
            catch (Exception ex)
            {
                return BadRequest("Erro: " + ex.Message);
            }

        }
        
    }
}
