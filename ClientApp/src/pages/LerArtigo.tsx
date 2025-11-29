import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';

const LerArtigo = () => {
    const { id } = useParams(); // Pega o ID da URL (ex: /artigo/2)
    const navigate = useNavigate();
    const [artigo, setArtigo] = useState<any>(null);

    useEffect(() => {
        const buscarArtigo = async () => {
            try {
                // Busca o artigo específico no C#
                const resposta = await fetch(`https://localhost:7298/artigos/${id}`);
                if (resposta.ok) {
                    const dados = await resposta.json();
                    setArtigo(dados);
                } else {
                    alert("Artigo não encontrado!");
                    navigate('/');
                }
            } catch (error) {
                console.error("Erro:", error);
            }
        };
        buscarArtigo();
    }, [id, navigate]);

    if (!artigo) return <div className="p-10 text-center">Carregando...</div>;

    return (
        <div className="max-w-3xl mx-auto bg-white min-h-screen shadow-sm border-x border-slate-100">
            {/* Cabeçalho do Artigo */}
            <div className="p-8 border-b border-slate-100">
                <button onClick={() => navigate('/')} className="flex items-center text-slate-500 hover:text-amber-600 mb-6 transition">
                    <ArrowLeft size={20} className="mr-2" /> Voltar
                </button>

                <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4 leading-tight">
                    {artigo.titulo}
                </h1>

                <div className="flex items-center gap-6 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        {new Date(artigo.dataPublicacao).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                        <User size={16} />
                        <span className="font-semibold text-amber-600">{artigo.autor}</span>
                    </div>
                </div>
            </div>

            {/* Conteúdo do Artigo (O Texto Rico) */}
            <div className="p-8 prose prose-slate max-w-none">
                {/* Cuidado: Isso injeta o HTML que veio do editor */}
                <div dangerouslySetInnerHTML={{ __html: artigo.conteudo }} />
            </div>
        </div>
    );
};

export default LerArtigo;