using Microsoft.EntityFrameworkCore;
using JurisBlog.Data;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// 1. Adicionar serviços básicos (Controllers e Swagger)
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer(); // Necessário para o Swagger
builder.Services.AddSwaggerGen();           // Necessário para o Swagger

// 2. Configuração do Banco de Dados
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// 3. Configuração do CORS (Para o React funcionar)
builder.Services.AddCors(options =>
{
    options.AddPolicy("PermitirReact",
        policy =>
        {
            policy.AllowAnyOrigin()
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

// 4. Configuração do Login (JWT)
var chaveSeguranca = "MinhaChaveSuperSecretaDePeloMenos32Caracteres!";
var key = Encoding.ASCII.GetBytes(chaveSeguranca);

builder.Services.AddAuthentication(x =>
{
    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(x =>
{
    x.RequireHttpsMetadata = false;
    x.SaveToken = true;
    x.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(key),
        ValidateIssuer = false,
        ValidateAudience = false
    };
});

var app = builder.Build();

// --- CONFIGURAÇÃO DO PIPELINE (A ordem aqui importa muito!) ---

// 5. Ativar o Swagger (Se estiver em desenvolvimento)
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Arquivos estáticos (Frontend)
app.UseDefaultFiles();
app.UseStaticFiles();

app.UseRouting();

// 6. Ativar CORS e Segurança
app.UseCors("PermitirReact");
app.UseAuthentication(); // Quem é você?
app.UseAuthorization();  // O que você pode fazer?

app.MapControllers();
app.MapFallbackToFile("index.html");

app.Run();