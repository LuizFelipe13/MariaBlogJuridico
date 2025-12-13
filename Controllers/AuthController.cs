using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using MariaBlogJuridico.Data;
using MariaBlogJuridico.Models;

namespace MariaBlogJuridico.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AuthController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] Usuario login)
        {
            // 1. Verifica se o usuário existe
            var usuario = await _context.Usuarios
                .FirstOrDefaultAsync(u => u.Email == login.Email && u.Senha == login.Senha);

            if (usuario == null)
                return Unauthorized("Usuário ou senha inválidos");

            // 2. Gera o Token (Código igual ao que você já tinha)
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("MinhaChaveSuperSecretaDePeloMenos32Caracteres!"); // Use a mesma chave do Program.cs
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] { new Claim("id", usuario.Id.ToString()) }),
                Expires = DateTime.UtcNow.AddHours(2),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            // 3. RETORNO ATUALIZADO: Devolvemos o Token E o Nome
            return Ok(new
            {
                token = tokenString,
                nome = usuario.Nome ?? "Administrador" // Se o banco estiver null, manda "Administrador"
            });
        }

        // Método auxiliar para criar o primeiro usuário (rode uma vez pelo Postman ou Swagger)
        [HttpPost("registrar")]
        public async Task<IActionResult> Registrar([FromBody] Usuario novoUsuario)
        {
            _context.Usuarios.Add(novoUsuario);
            await _context.SaveChangesAsync();
            return Ok(novoUsuario);
        }
    }
}