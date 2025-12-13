import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HomePublica = () => {
    const navigate = useNavigate();
    const [artigos, setArtigos] = useState([]);
    const [termoBusca, setTermoBusca] = useState('');

    const carregarArtigos = async (termo = '') => {
        try {
            const url = termo
                ? `https://localhost:7298/artigos?termo=${encodeURIComponent(termo)}`
                : 'https://localhost:7298/artigos';

            const resposta = await fetch(url);
            if (resposta.ok) {
                const dados = await resposta.json();
                setArtigos(dados);
            }
        } catch (error) {
            console.error("Erro:", error);
        }
    };

    useEffect(() => {
        carregarArtigos();
    }, []);

    const handleBuscar = (e: React.FormEvent) => {
        e.preventDefault();
        carregarArtigos(termoBusca);
    };

    return (
        <div className="min-h-screen font-sans">

            {/* --- 1. HERO SECTION (IMAGEM JURÍDICA NOVA) --- */}
            {/* w-full garante largura total. Sem margens acima. */}
            <div className="relative h-[500px] w-full flex items-center justify-center text-white">
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{
                        // Nova imagem: Martelo da justiça e livros (Unsplash)
                        backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1920&auto=format&fit=crop")',
                        filter: 'brightness(0.3)' // Um pouco mais escuro para destacar o texto
                    }}
                />

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight drop-shadow-lg">
                        Insights Jurídicos Modernos
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-200 mb-10 font-light drop-shadow-md">
                        Um canal confiável e prático com tudo o que você precisa saber sobre seus direitos.
                    </p>

                    {/* Barra de Pesquisa */}
                    <form onSubmit={handleBuscar} className="flex max-w-lg mx-auto bg-white rounded-full overflow-hidden p-1 shadow-2xl transform hover:scale-105 transition duration-300">
                        <input
                            type="text"
                            placeholder="Pesquisar artigo (ex: Trabalhista)"
                            className="flex-1 px-6 py-3 text-slate-700 outline-none placeholder:text-slate-400"
                            value={termoBusca}
                            onChange={(e) => setTermoBusca(e.target.value)}
                        />
                        <button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white rounded-full p-3 px-6 font-bold flex items-center gap-2 transition">
                            <Search size={20} /> <span className="hidden md:inline">Pesquisar</span>
                        </button>
                    </form>
                </div>
            </div>

            {/* --- 2. CONTAINER DO CONTEÚDO --- */}
            {/* Como tiramos o container do layout principal, precisamos adicionar aqui para o grid não bater nas bordas */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-serif font-bold text-slate-800 mb-8 border-l-4 border-amber-600 pl-4">
                    Últimas Publicações
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {artigos.map((artigo: any) => (
                        <div key={artigo.id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 border border-slate-100 flex flex-col group overflow-hidden">
                            <div className="h-56 bg-slate-200 relative overflow-hidden">
                                {artigo.urlImagem ? (
                                    <img
                                        src={artigo.urlImagem}
                                        alt={artigo.titulo}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-slate-400 bg-slate-100">
                                        <span className="font-serif text-5xl opacity-20">⚖️</span>
                                    </div>
                                )}
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} className="text-amber-600" />
                                        {new Date(artigo.dataPublicacao).toLocaleDateString()}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <User size={14} className="text-amber-600" />
                                        {artigo.autor || "Jurídico"}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-amber-600 transition">
                                    {artigo.titulo}
                                </h3>

                                <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-1">
                                    {artigo.conteudo.replace(/<[^>]+>/g, '').substring(0, 100)}...
                                </p>

                                <button
                                    onClick={() => navigate(`/artigo/${artigo.id}`)}
                                    className="text-amber-600 font-bold hover:text-amber-800 flex items-center gap-2 text-sm transition mt-auto"
                                >
                                    LER ARTIGO COMPLETO <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {artigos.length === 0 && (
                    <div className="text-center py-20 bg-white rounded-lg border border-slate-200">
                        <p className="text-slate-500 text-lg mb-2">Nenhum artigo encontrado para sua busca.</p>
                        <button
                            onClick={() => { setTermoBusca(''); carregarArtigos(''); }}
                            className="text-amber-600 font-bold hover:underline"
                        >
                            Limpar filtros e ver tudo
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomePublica;