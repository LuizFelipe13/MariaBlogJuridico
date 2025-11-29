var builder = WebApplication.CreateBuilder(args);

// ... outros serviços ...
builder.Services.AddControllers();

// Permite que o React converse com o C#
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

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Ativa a política que criamos acima
app.UseCors("PermitirReact");

app.UseAuthorization();
app.MapControllers();
app.MapFallbackToFile("/index.html");

app.Run();