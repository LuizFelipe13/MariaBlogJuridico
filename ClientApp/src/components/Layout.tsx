import React, { useState } from 'react';
import { BookOpen, PenTool, Settings, LogOut, Menu } from 'lucide-react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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

        < nav className = "flex-1 p-4 space-y-2" >
            <NavItem icon={
                <BookOpen size={ 20 } />} text="Meus Artigos" isOpen={isSidebarOpen} active / >
                    <NavItem icon={
                        <PenTool size={ 20 } />} text="Novo Artigo" isOpen={isSidebarOpen} / >
                            <NavItem icon={
                                <Settings size={ 20 } />} text="Configurações" isOpen={isSidebarOpen} / >
                                    </nav>

                                    < div className = "p-4 border-t border-slate-700" >
                                        <NavItem icon={
                                            <LogOut size={ 20 } />} text="Sair" isOpen={isSidebarOpen} / >
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

            // Pequeno componente auxiliar para os botões do menu
            const NavItem = ({ icon, text, isOpen, active = false }: any) => (
                <div className= {`flex items-center gap-4 p-3 rounded cursor-pointer transition-colors ${active ? 'bg-amber-600 text-white' : 'hover:bg-slate-800 text-slate-300'}`
        }>
            { icon }
        { isOpen && <span className="whitespace-nowrap font-medium" > { text } </span> }
        </div>
);

        export default Layout;