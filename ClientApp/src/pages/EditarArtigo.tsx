import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Save, ArrowLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const EditarArtigo = () => {
    const { id } = useParams(); // Pega o ID da URL
    const navigate = useNavigate();

    const [titulo, setTitulo] = useState('');
    const [conteudo, setConteudo] = useState('');

    // 1. Carregar os dados antigos ao abrir a tela
    useEffect(() => {
        const carregarDados = async () => {
            try {
                const resposta = await fetch(`https://localhost:7298/artigos/${id}`);
                if (resposta.ok) {
                    const dados = await resposta.json();
                    setTitulo(dados.titulo);
                    setConteudo(dados.conteudo);
                } else {
                    alert("Artigo não encontrado.");
                    navigate('/');
                }
            } catch (error) {
                console.error("Erro:", error);
            }
        };
        carregarDados();
    }, [id, navigate]);

    // 2. Salvar as alterações (PUT)
    const handleAtualizar = async () => {
        try {
            const resposta = await fetch(`https://localhost:7298/artigos/${id}`, {
                method: 'PUT', // <--- MUDOU DE POST PARA PUT
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    titulo: titulo,
                    conteudo: conteudo,
                    autor: "Dr. Luiz Felipe" // Mantém o autor
                })
            });

            if (resposta.ok) {
                alert("Artigo atualizado com sucesso!");
                navigate('/');
            } else {
                alert("Erro ao atualizar.");
            }
        } catch (error) {
            console.error("Erro:", error);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-serif font-bold text-slate-800">Editar Artigo #{id}</h2>
                <button onClick={() => navigate('/')} className="text-slate-500 hover:text-slate-800 flex items-center gap-2">
                    <ArrowLeft size={20} /> Voltar
                </button>
            </div>

            <div className="mb-6">
                <label className="block text-sm font-bold text-slate-700 mb-2">Título do Artigo</label>
                <input
                    type="text"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-amber-500 outline-none"
                />
            </div>

            <div className="mb-8 h-80">
                <label className="block text-sm font-bold text-slate-700 mb-2">Conteúdo</label>
                <ReactQuill theme="snow" value={conteudo} onChange={setConteudo} className="h-64" />
            </div>

            <div className="flex justify-end mt-12">
                <button
                    onClick={handleAtualizar}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-bold flex items-center gap-2 transition"
                >
                    <Save size={20} /> Salvar Alterações
                </button>
            </div>
        </div>
    );
};

export default EditarArtigo;