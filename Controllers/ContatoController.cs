using Microsoft.AspNetCore.Mvc;
using MimeKit;             // Biblioteca para montar o e-mail
using MailKit.Net.Smtp;    // Biblioteca para enviar
using MailKit.Security;    // Segurança

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
                // 1. Montar o "Envelope" do E-mail
                var email = new MimeMessage();

                // DE: Quem está enviando (Geralmente é o próprio sistema)
                // Coloque SEU e-mail do Gmail aqui
                email.From.Add(new MailboxAddress("Site JurisBlog", "luiz.felipesbc@gmail.com"));

                // PARA: Quem vai receber (O Advogado/Você)
                // Coloque o e-mail onde você quer RECEBER os avisos
                email.To.Add(new MailboxAddress("Advogado", "luiz.felipesbc@gmail.com"));

                email.Subject = "Novo Contato do Site: " + (dados.Assunto ?? "Sem Assunto");

                // CORPO: O texto da mensagem
                email.Body = new TextPart("plain")
                {
                    Text = $@"
                        Olá! Você recebeu um novo contato através do site.

                        -------------------------------------------------
                        DADOS DO CLIENTE:
                        Nome: {dados.Nome}
                        E-mail: {dados.Email}
                        Assunto: {dados.Assunto}
                        -------------------------------------------------
                        
                        MENSAGEM:
                        {dados.Mensagem}
                    "
                };

                // 2. Conectar no Gmail e Enviar
                using (var client = new SmtpClient())
                {
                    // Conecta no servidor do Gmail (smtp.gmail.com na porta 587)
                    client.Connect("smtp.gmail.com", 587, SecureSocketOptions.StartTls);

                    // AQUI É O PULO DO GATO:
                    // Use seu e-mail completo e a SENHA DE APP (aquela de 16 letras), não a senha normal
                    client.Authenticate("luiz.felipesbc@gmail.com", "isho hulz plgu tcwx ");

                    client.Send(email);
                    client.Disconnect(true);
                }

                return Ok(new { mensagem = "E-mail enviado com sucesso!" });
            }
            catch (Exception ex)
            {
                // Se der erro (ex: senha errada), o frontend vai saber
                return BadRequest("Erro no envio: " + ex.Message);
            }
        }
    }
}