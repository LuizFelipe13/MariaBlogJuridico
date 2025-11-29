import React, { useState } from 'react';
import { BookOpen, PenTool, Settings, LogOut, Menu } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // 2. Iniciamos o GPS
    const navigate = useNavigate();
    const location = useLocation(); // Serve para saber em qual página estamos agora

    return (
        <div className= "flex h-screen bg-slate-50" >
        {/* Sidebar (Menu Lateral) */ }
        < div className = {`${isSidebarOpen ? 'w-64' : 'w-20'} bg-slate-900 text-white transition-all duration-300 flex flex-col`
}>
    <div className="p-4 flex items-center justify-between border-b border-slate-700" >
        { isSidebarOpen && <h1 className="font-serif text-xl font-bold text-amber-500" > JurisBlog </h1>}
<button onClick={ () => setIsSidebarOpen(!isSidebarOpen) } className = "p-1 hover:bg-slate-800 rounded" >
    <Menu size={ 24 } />
        </button>
        </div>

                < nav className="flex-1 p-4 space-y-2" >
                    {/* Botão Meus Artigos (Home) */}
                    <NavItem
                        icon={<BookOpen size={20} />}
                        text="Meus Artigos"
                        isOpen={isSidebarOpen}
                        // Fica ativo se o endereço for "/" ou vazio
                        active={location.pathname === '/'}
                        // Navega para a Home
                        onClick={() => navigate('/')} />
                    {/* Botão Novo Artigo */}

                    <NavItem
                        icon={<PenTool size={20} />}
                        text="Novo Artigo"
                        isOpen={isSidebarOpen}
                        // Fica ativo se o endereço for "/novo"
                        active={location.pathname === '/novo'}
                        // Navega para a tela de Novo Artigo
                        onClick={() => navigate('/novo')}
                    />

                    <NavItem
                        icon={<Settings size={20} />}
                        text="Configurações"
                        isOpen={isSidebarOpen}
                        // Exemplo: sem ação por enquanto
                        onClick={() => alert("Em construção!")}
                    />
                 </nav>

                 < div className = "p-4 border-t border-slate-700" >
                    <NavItem icon={<LogOut size={20} />}
                        text="Sair"
                        isOpen={isSidebarOpen}
                        onClick={() => alert("Fazendo Logout...")}/>
                  </div>
                </div>

                {/* Conteúdo Principal */ }
                <main className="flex-1 overflow-auto p-8" >
                    <div className="max-w-5xl mx-auto" >
                        { children }
                        </div>
                        </main>
                        </div>
  );
            };

// Pequeno componente auxiliar atualizado para aceitar o onClick
// Adicionei 'onClick' aqui nas propriedades
const NavItem = ({ icon, text, isOpen, active = false, onClick }: any) => (
    <div
        onClick={onClick} // Ligamos o clique aqui
        className={`flex items-center gap-4 p-3 rounded cursor-pointer transition-colors ${active ? 'bg-amber-600 text-white' : 'hover:bg-slate-800 text-slate-300'}`}
    >
        {icon}
        {isOpen && <span className="whitespace-nowrap font-medium">{text}</span>}
    </div>
);
        export default Layout;