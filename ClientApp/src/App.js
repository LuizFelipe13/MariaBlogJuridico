import React, { useState, useEffect } from 'react'; // <--- Agora está tudo em uma linha só
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import NovoArtigo from './pages/NovoArtigo.tsx';
import { Edit, Trash2, Eye, Share2 } from 'lucide-react';
import LerArtigo from './pages/LerArtigo.tsx';
import EditarArtigo from './pages/EditarArtigo.tsx';

// --- Componente Dashboard ---
const Dashboard = () => {
    const navigate = useNavigate();
    // Estado para guardar os artigos que vêm do C#
    const [artigos, setArtigos] = useState([]);

    // Função para buscar os dados do Backend
    const carregarArtigos = async () => {
        try {
            // USE A SUA PORTA AQUI (a mesma que funcionou no NovoArtigo)
            // Certifique-se de que a porta 7298 é a correta do seu https
            const resposta = await fetch('https://localhost:7298/artigos');
            if (resposta.ok) {
                const dados = await resposta.json();
                setArtigos(dados);
            }
        } catch (error) {
            console.error("Erro ao buscar artigos", error);
        }
    };

        const excluirArtigo = async (id) => {
            if (window.confirm("Tem certeza que deseja excluir este artigo?")) {
                try {
                    const resposta = await fetch(`https://localhost:7298/artigos/${id}`, {
                        method: 'DELETE',
                    });

                    if (resposta.ok) {
                        // Atualiza a lista na tela removendo o item apagado
                        setArtigos(artigos.filter(a => a.id !== id));
                        alert("Artigo excluído!");
                    } else {
                        alert("Erro ao excluir.");
                    }
                } catch (error) {
                    console.error("Erro:", error);
                }
            }
        };
    

    // O useEffect roda 1 vez quando a tela abre
    useEffect(() => {
        carregarArtigos();
    }, []);

    return (
        <>
            <div className="mb-8 flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-serif text-slate-800 font-bold">Painel de Controle</h2>
                    <p className="text-slate-500">Bem-vinda, Dra. Maria.</p>
                </div>
                <button
                    onClick={() => navigate('/novo')}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded shadow-md transition font-medium"
                >
                    + Escrever Novo Artigo
                </button>
            </div>

            {/* Cards de Estatísticas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                    <p className="text-slate-500 text-sm font-bold uppercase">Total de Artigos</p>
                    <p className="text-3xl font-bold text-slate-800 mt-1">{artigos.length}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                    <p className="text-slate-500 text-sm font-bold uppercase">Leituras este mês</p>
                    <p className="text-3xl font-bold text-slate-800 mt-1">0</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                    <p className="text-slate-500 text-sm font-bold uppercase">Mensagens</p>
                    <p className="text-3xl font-bold text-slate-800 mt-1">0</p>
                </div>
            </div>

            {/* Tabela de Artigos Real */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-6 border-b border-slate-100">
                    <h3 className="text-lg font-bold text-slate-800">Artigos Recentes</h3>
                </div>
                <table className="w-full text-left">
                    <thead className="bg-slate-50 text-slate-600 uppercase text-xs font-semibold">
                        <tr>
                            <th className="p-4">Título</th>
                            <th className="p-4">Data</th>
                            <th className="p-4">Autor</th>
                            <th className="p-4 text-right">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {artigos.map((artigo) => (
                            <tr key={artigo.id} className="hover:bg-slate-50 transition">
                                <td className="p-4 font-medium text-slate-900">{artigo.titulo}</td>
                                <td className="p-4 text-slate-500">
                                    {new Date(artigo.dataPublicacao).toLocaleDateString()}
                                </td>
                                <td className="p-4">
                                    <span className="px-2 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700">
                                        {artigo.autor || "Sistema"}
                                    </span>
                                </td>
                                {/* Procure a parte da tabela onde tem os botões de ação */}
                                <td className="p-4 flex gap-2 justify-end">
                                    <button
                                        onClick={() => navigate(`/editar/${artigo.id}`)}
                                        className="p-2 text-blue-600 hover:bg-blue-50 rounded"
                                        title="Editar">
                                        <Edit size={18} />
                                    </button>

                                    {/* ATUALIZE ESTE BOTÃO AQUI: */}
                                    <button
                                        onClick={() => navigate(`/artigo/${artigo.id}`)}
                                        className="p-2 text-slate-600 hover:bg-slate-100 rounded"
                                        title="Ler Artigo"
                                    >
                                        <Eye size={18} />
                                    </button>

                                    <button className="p-2 text-amber-600 hover:bg-amber-50 rounded"><Share2 size={18} /></button>
                                    <button
                                        onClick={() => excluirArtigo(artigo.id)}
                                        className="p-2 text-red-600 hover:bg-red-50 rounded"
                                        title="Excluir">
                                        <Trash2 size={18} />
                                    </button>
                                </td>
                                {/*<td className="p-4 flex gap-2 justify-end">*/}
                                {/*    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded"><Edit size={18} /></button>*/}
                                {/*    <button className="p-2 text-red-600 hover:bg-red-50 rounded"><Trash2 size={18} /></button>*/}
                                {/*</td>*/}
                            </tr>
                        ))}

                        {artigos.length === 0 && (
                            <tr>
                                <td colSpan={4} className="p-8 text-center text-slate-500">
                                    Nenhum artigo encontrado. Escreva o primeiro!
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

// --- Componente Principal com as Rotas ---
function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/novo" element={<NovoArtigo />} />
                <Route path="/artigo/:id" element={<LerArtigo />} />
                <Route path="/editar/:id" element={<EditarArtigo />} />
            </Routes>
        </Layout>
    );
}

export default App;