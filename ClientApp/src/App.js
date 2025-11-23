import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import NovoArtigo from './pages/NovoArtigo.tsx'; // Importe a tela nova
import { Edit, Trash2, Eye, Share2 } from 'lucide-react';

// --- Componente Dashboard (A tela que você já fez) ---
const Dashboard = () => {
    const navigate = useNavigate(); // Hook para navegar

    return (
        <>
            <div className="mb-8 flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-serif text-slate-800 font-bold">Painel de Controle</h2>
                    <p className="text-slate-500">Bem-vindo, Dra. Maria dos Reis.</p>
                </div>
                <button
                    onClick={() => navigate('/novo')} // Agora o botão funciona!
                    className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded shadow-md transition font-medium"
                >
                    + Escrever Novo Artigo
                </button>
            </div>

            {/* Cards de Estatísticas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                    <p className="text-slate-500 text-sm font-bold uppercase">Total de Artigos</p>
                    <p className="text-3xl font-bold text-slate-800 mt-1">12</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                    <p className="text-slate-500 text-sm font-bold uppercase">Leituras este mês</p>
                    <p className="text-3xl font-bold text-slate-800 mt-1">3.4k</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                    <p className="text-slate-500 text-sm font-bold uppercase">Mensagens</p>
                    <p className="text-3xl font-bold text-slate-800 mt-1">5</p>
                </div>
            </div>

            {/* Tabela de Artigos */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-6 border-b border-slate-100">
                    <h3 className="text-lg font-bold text-slate-800">Artigos Recentes</h3>
                </div>
                <table className="w-full text-left">
                    <thead className="bg-slate-50 text-slate-600 uppercase text-xs font-semibold">
                        <tr>
                            <th className="p-4">Título</th>
                            <th className="p-4">Data</th>
                            <th className="p-4">Status</th>
                            <th className="p-4 text-right">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-slate-50 transition">
                            <td className="p-4 font-medium text-slate-900">Impactos da Reforma Tributária 2025</td>
                            <td className="p-4 text-slate-500">23/11/2025</td>
                            <td className="p-4"><span className="px-2 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">Publicado</span></td>
                            <td className="p-4 flex gap-2 justify-end">
                                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded"><Edit size={18} /></button>
                                <button className="p-2 text-red-600 hover:bg-red-50 rounded"><Trash2 size={18} /></button>
                            </td>
                        </tr>
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
                </Routes>
            </Layout>
        
    );
}

export default App;