import React from 'react';
import { Scale, UserCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface LayoutProps {
    children: React.ReactNode;
}

const PublicLayout: React.FC<LayoutProps> = ({ children }) => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            {/* Navbar Superior */}
            <nav className="bg-slate-900 text-white shadow-lg">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between items-center h-20">

                        {/* Logo */}
                        <div
                            onClick={() => navigate('/')}
                            className="flex items-center gap-2 cursor-pointer hover:text-amber-500 transition"
                        >
                            <Scale size={32} className="text-amber-500" />
                            <div>
                                <h1 className="text-2xl font-serif font-bold leading-none">JurisBlog</h1>
                                <span className="text-xs text-slate-400 tracking-widest uppercase">Direito & Justiça</span>
                            </div>
                        </div>

                        {/* Links do Menu */}
                        <div className="hidden md:flex space-x-8 items-center">
                            <button onClick={() => navigate('/')} className="hover:text-amber-500 transition">Home</button>
                            <button onClick={() => navigate('/sobre')} className="hover:text-amber-500 transition">Sobre o Escritório</button>
                            <button onClick={() => navigate('/contato')} className="hover:text-amber-500 transition">Contato</button>

                            {/* Botão para ir para o Admin */}
                            <button
                                onClick={() => navigate('/admin')}
                                className="bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded text-sm font-bold flex items-center gap-2 transition"
                            >
                                <UserCircle size={18} /> Área do Advogado
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Conteúdo da Página */}
            {/* Removemos padding (py-12, px-4) e largura máxima (max-w-6xl) */}
            <main className="flex-1 bg-slate-50">
                {children}
            </main>

            {/* Rodapé Simples */}
            <footer className="bg-slate-200 text-slate-600 text-center py-8 mt-auto border-t border-slate-300">
                <p>© 2025 JurisBlog - Todos os direitos reservados.</p>
                <p className="text-sm mt-2">OAB/SP 123.456</p>
            </footer>
        </div>
    );
};

export default PublicLayout;