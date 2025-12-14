namespace JurisBlog.Models
{
    public class Artigo
    {
        public int id { get; set; }
        public string Titulo { get; set; }
        public string Conteudo { get; set;}
        public DateTime DataPublicacao { get; set;}
        public string Autor { get; set;}

        // Campo que armazena a URL da imagem do artigo
        public string? UrlImagem { get; set; }
    }
}
