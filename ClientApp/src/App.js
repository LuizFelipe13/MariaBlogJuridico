import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/Login.tsx';
import RotaProtegida from './components/RotaProtegida.tsx';
import Sobre from './pages/Sobre.tsx';

// Layouts
import Layout from './components/Layout.tsx';       // Layout Admin (Sidebar)
import PublicLayout from './components/PublicLayout.tsx'; // Layout Público (Navbar)

// Páginas Admin
import NovoArtigo from './pages/NovoArtigo.tsx';
import EditarArtigo from './pages/EditarArtigo.tsx';

// Páginas Públicas
import HomePublica from './pages/HomePublica.tsx';
import LerArtigo from './pages/LerArtigo.tsx';
import Contato from './pages/Contato.tsx';

import { Edit, Trash2, Eye, Share2 } from 'lucide-react';

// --- Componente Dashboard (Admin) ---
// Mantive o código do seu Dashboard aqui, só mudei o nome da rota depois
const Dashboard = () => {
    const navigate = useNavigate();
    const [artigos, setArtigos] = useState([]);

    const carregarArtigos = async () => {
        try {
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
                const resposta = await fetch(`https://localhost:7298/artigos/${id}`, { method: 'DELETE' });
                if (resposta.ok) {
                    setArtigos(artigos.filter(a => a.id !== id));
                    alert("Artigo excluído!");
                } else { alert("Erro ao excluir."); }
            } catch (error) { console.error("Erro:", error); }
        }
    };

    useEffect(() => { carregarArtigos(); }, []);

    return (
        <>
            <div className="mb-8 flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-serif text-slate-800 font-bold">Painel Administrativo</h2>
                    <p className="text-slate-500">Bem-vinda, Dra. Maria.</p>
                </div>
                <button onClick={() => navigate('/novo')} className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded shadow-md transition font-medium">
                    + Escrever Novo Artigo
                </button>
            </div>
            {/* Tabela Simplificada para o código não ficar gigante aqui */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 text-slate-600 uppercase text-xs font-semibold">
                        <tr><th className="p-4">Título</th><th className="p-4">Data</th><th className="p-4 text-right">Ações</th></tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {artigos.map((artigo) => (
                            <tr key={artigo.id} className="hover:bg-slate-50">
                                <td className="p-4 font-medium text-slate-900">{artigo.titulo}</td>
                                <td className="p-4 text-slate-500">{new Date(artigo.dataPublicacao).toLocaleDateString()}</td>
                                <td className="p-4 flex gap-2 justify-end">
                                    <button onClick={() => navigate(`/editar/${artigo.id}`)} className="p-2 text-blue-600 hover:bg-blue-50 rounded"><Edit size={18} /></button>
                                    <button onClick={() => navigate(`/artigo/${artigo.id}`)} className="p-2 text-slate-600 hover:bg-slate-100 rounded"><Eye size={18} /></button>
                                    <button onClick={() => excluirArtigo(artigo.id)} className="p-2 text-red-600 hover:bg-red-50 rounded"><Trash2 size={18} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

// --- Roteamento Principal ---
function App() {
    return (
        <Routes>
            {/* Rota de Login (Pública) */}
            <Route path="/login" element={<Login />} />

            {/* Rotas Públicas */}
            <Route path="/" element={<PublicLayout><HomePublica /></PublicLayout>} />
            <Route path="/artigo/:id" element={<PublicLayout><LerArtigo /></PublicLayout>} />
            <Route path="/contato" element={<PublicLayout><Contato /></PublicLayout>} />

            {/* ROTAS PROTEGIDAS (Admin) - Note que envolvemos com <RotaProtegida> */}
            <Route path="/admin" element={
                <RotaProtegida>
                    <Layout><Dashboard /></Layout>
                </RotaProtegida>
            } />

            <Route path="/novo" element={
                <RotaProtegida>
                    <Layout><NovoArtigo /></Layout>
                </RotaProtegida>
            } />

            <Route path="/editar/:id" element={
                <RotaProtegida>
                    <Layout><EditarArtigo /></Layout>
                </RotaProtegida>
            } />
            <Route path="/sobre" element={
                <PublicLayout>
                    <Sobre />
                </PublicLayout>
            } />
        </Routes>
    );
}

export default App;