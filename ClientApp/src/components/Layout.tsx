import React, { useState } from 'react';
import { BookOpen, PenTool, Settings, LogOut, Menu, MessageSquare } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    // Função de Logout com Confirmação
    const handleLogout = () => {
        // Só executa se o usuário clicar em "OK" no alerta
        if (window.confirm("Tem certeza que você quer sair?")) {
            // 1. Remove o token e o nome do usuário
            localStorage.removeItem('token-blog');
            localStorage.removeItem('usuario-nome');

            // 2. Redireciona para o login
            navigate('/login');
        }
    };

    return (
        <div className="flex h-screen bg-slate-50">
            {/* Sidebar (Menu Lateral) */}
            <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-slate-900 text-white transition-all duration-300 flex flex-col`}>

                {/* Topo do Menu */}
                <div className="p-4 flex items-center justify-between border-b border-slate-700">
                    {isSidebarOpen && <h1 className="font-serif text-xl font-bold text-amber-500">JurisBlog</h1>}
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-1 hover:bg-slate-800 rounded">
                        <Menu size={24} />
                    </button>
                </div>

                {/* Lista de Links */}
                <nav className="flex-1 p-4 space-y-2">
                    <NavItem
                        icon={<BookOpen size={20} />}
                        text="Meus Artigos"
                        isOpen={isSidebarOpen}
                        active={location.pathname === '/admin' || location.pathname === '/'}
                        onClick={() => navigate('/admin')}
                    />

                    <NavItem
                        icon={<PenTool size={20} />}
                        text="Novo Artigo"
                        isOpen={isSidebarOpen}
                        active={location.pathname === '/novo'}
                        onClick={() => navigate('/novo')}
                    />

                    <NavItem
                        icon={<MessageSquare size={20} />}
                        text="Fale Conosco"
                        isOpen={isSidebarOpen}
                        active={location.pathname === '/contato'}
                        onClick={() => navigate('/contato')}
                    />

                    <NavItem
                        icon={<Settings size={20} />}
                        text="Configurações"
                        isOpen={isSidebarOpen}
                        onClick={() => alert("Em construção!")}
                    />
                </nav>

                {/* Rodapé do Menu com LOGOUT */}
                <div className="p-4 border-t border-slate-700">
                    <NavItem
                        icon={<LogOut size={20} />}
                        text="Sair"
                        isOpen={isSidebarOpen}
                        onClick={handleLogout} // Chama a função com confirmação
                    />
                </div>
            </div>

            {/* Conteúdo Principal */}
            <main className="flex-1 overflow-auto p-8">
                <div className="max-w-5xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
};

// Componente auxiliar NavItem
const NavItem = ({ icon, text, isOpen, active = false, onClick }: any) => (
    <div
        onClick={onClick}
        className={`flex items-center gap-4 p-3 rounded cursor-pointer transition-colors ${active ? 'bg-amber-600 text-white' : 'hover:bg-slate-800 text-slate-300'}`}
    >
        {icon}
        {isOpen && <span className="whitespace-nowrap font-medium">{text}</span>}
    </div>
);

export default Layout;