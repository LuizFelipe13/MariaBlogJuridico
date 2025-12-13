import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Save, ArrowLeft, Image as ImageIcon, Upload } from 'lucide-react'; // Adicionei ícones novos
import { useNavigate } from 'react-router-dom';

const NovoArtigo = () => {
    const [titulo, setTitulo] = useState('');
    const [conteudo, setConteudo] = useState('');
    const [urlImagem, setUrlImagem] = useState(''); // Guarda o link da foto
    const [uploading, setUploading] = useState(false); // Para mostrar "Carregando..."
    const navigate = useNavigate();

    // Função mágica que envia a foto para o C#
    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        setUploading(true);
        const arquivo = files[0];
        const formData = new FormData();
        formData.append('arquivo', arquivo);

        try {
            // Envia para o endpoint de upload que criamos
            const resposta = await fetch('https://localhost:7298/artigos/upload', {
                method: 'POST',
                body: formData
            });

            if (resposta.ok) {
                const dados = await resposta.json();
                setUrlImagem(dados.url); // O C# devolve a URL e nós guardamos aqui
            } else {
                alert("Erro ao fazer upload da imagem.");
            }
        } catch (error) {
            console.error(error);
            alert("Erro de conexão no upload.");
        } finally {
            setUploading(false);
        }
    };

    const handleSalvar = async () => {
        if (!titulo || !conteudo) {
            alert("Preencha título e conteúdo.");
            return;
        }

        try {
            const resposta = await fetch('https://localhost:7298/artigos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    titulo,
                    conteudo,
                    // AQUI ESTÁ A MUDANÇA:
                    // Tenta pegar o nome salvo no login. Se não tiver, usa um padrão.
                    autor: localStorage.getItem('usuario-nome') || "Equipe JurisBlog",
                    urlImagem: urlImagem
                })
            });

            if (resposta.ok) {
                alert("Artigo publicado com sucesso! 🚀");
                navigate('/admin');
            } else {
                alert("Erro ao publicar.");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-serif font-bold text-slate-800">Novo Artigo</h2>
                <button onClick={() => navigate('/admin')} className="text-slate-500 hover:text-slate-800 flex items-center gap-2">
                    <ArrowLeft size={20} /> Voltar
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                {/* Coluna Esquerda: Título e Upload */}
                <div className="md:col-span-2 space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Título do Artigo</label>
                        <input
                            type="text"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-amber-500 outline-none"
                            placeholder="Ex: As novas leis trabalhistas..."
                        />
                    </div>

                    {/* Área de Upload */}
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Capa do Artigo</label>
                        <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100 transition">
                            {urlImagem ? (
                                <div className="relative w-full h-48">
                                    <img src={urlImagem} alt="Capa" className="w-full h-full object-cover rounded" />
                                    <button
                                        onClick={() => setUrlImagem('')}
                                        className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full hover:bg-red-700"
                                    >
                                        X
                                    </button>
                                </div>
                            ) : (
                                <label className="cursor-pointer flex flex-col items-center">
                                    {uploading ? (
                                        <span className="text-amber-600 font-bold animate-pulse">Enviando foto...</span>
                                    ) : (
                                        <>
                                            <ImageIcon size={40} className="text-slate-400 mb-2" />
                                            <span className="text-slate-600 font-medium">Clique para enviar uma imagem</span>
                                            <span className="text-xs text-slate-400 mt-1">JPG, PNG (Max 5MB)</span>
                                        </>
                                    )}
                                    <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                                </label>
                            )}
                        </div>
                    </div>
                </div>

                {/* Coluna Direita: Dicas ou Preview (Opcional, deixei vazio por enquanto) */}
            </div>

            <div className="mb-8 h-80">
                <label className="block text-sm font-bold text-slate-700 mb-2">Conteúdo</label>
                <ReactQuill theme="snow" value={conteudo} onChange={setConteudo} className="h-64" />
            </div>

            <div className="flex justify-end mt-12">
                <button
                    onClick={handleSalvar}
                    disabled={uploading}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded font-bold flex items-center gap-2 transition disabled:opacity-50"
                >
                    <Save size={20} /> Publicar Artigo
                </button>
            </div>
        </div>
    );
};

export default NovoArtigo;