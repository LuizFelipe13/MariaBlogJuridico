import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Importa o estilo do editor (Obrigatório)
import { Save, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NovoArtigo = () => {
    const [titulo, setTitulo] = useState('');
    const [conteudo, setConteudo] = useState('');
    const navigate = useNavigate();

    const handleSalvar = async () => {
        // 1. Validar se escreveu algo
        if (!titulo || !conteudo) {
            alert("Por favor, preencha o título e o conteúdo.");
            return;
        }

        try {
            // 2. Enviar para o C# (Backend)
            const resposta = await fetch('https://localhost:7298/artigos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    titulo: titulo,
                    conteudo: conteudo,
                    autor: "Dr. Luiz Felipe" // Depois podemos pegar do login
                })
            });

            // 3. Verificar se deu certo
            if (resposta.ok) {
                alert("Artigo publicado com sucesso! 🚀");
                navigate('/'); // Volta para a tela inicial
            } else {
                alert("Erro ao publicar. Tente novamente.");
            }
        } catch (error) {
            console.error("Erro de conexão:", error);
            alert("Falha ao conectar com o servidor.");
        }
    };

    return (
        <div className= "bg-white rounded-lg shadow-sm p-8" >
        <div className="flex justify-between items-center mb-6" >
            <h2 className="text-2xl font-serif font-bold text-slate-800" > Novo Artigo </h2>
                < button
    onClick = {() => navigate('/')}
className = "text-slate-500 hover:text-slate-800 flex items-center gap-2"
    >
    <ArrowLeft size={ 20 } /> Voltar
        </button>
        </div>

        < div className = "mb-6" >
            <label className="block text-sm font-bold text-slate-700 mb-2" > Título do Artigo </label>
                < input 
          type = "text" 
          value = { titulo }
onChange = {(e) => setTitulo(e.target.value)}
className = "w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-amber-500 focus:outline-none"
placeholder = "Ex: As novas leis trabalhistas..."
    />
    </div>

    < div className = "mb-8 h-80" >
        <label className="block text-sm font-bold text-slate-700 mb-2" > Conteúdo </label>
{/* Este é o editor rico estilo Word */ }
<ReactQuill 
          theme="snow"
value = { conteudo }
onChange = { setConteudo }
className = "h-64"
    />
    </div>

    < div className = "flex justify-end mt-12" >
        <button 
          onClick={ handleSalvar }
className = "bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded font-bold flex items-center gap-2 transition"
    >
    <Save size={ 20 } /> Publicar Artigo
        </button>
        </div>
        </div>
  );
};

export default NovoArtigo;