import React from 'react';
import { Scale, UserCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer.tsx';

interface LayoutProps {
    children: React.ReactNode;
}

const PublicLayout: React.FC<LayoutProps> = ({ children }) => {
    const navigate = useNavigate();

    // SEU NÚMERO DE WHATSAPP AQUI (formato: código país + ddd + número, apenas números)
    const numeroWhatsApp = "5511942089446";
    const mensagemPadrao = "Olá! Gostaria de uma consultoria jurídica.";

    return (
        <div className="min-h-screen bg-slate-50 font-sans flex flex-col">

            {/* Navbar Superior */}
            <nav className="bg-slate-900 text-white shadow-lg relative z-20">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between items-center h-20">

                        <div onClick={() => navigate('/')} className="flex items-center gap-2 cursor-pointer hover:text-amber-500 transition">
                            <Scale size={32} className="text-amber-500" />
                            <div>
                                <h1 className="text-2xl font-serif font-bold leading-none">JurisBlog</h1>
                                <span className="text-xs text-slate-400 tracking-widest uppercase">Direito & Justiça</span>
                            </div>
                        </div>

                        <div className="hidden md:flex space-x-8 items-center">
                            <button onClick={() => navigate('/')} className="hover:text-amber-500 transition">Home</button>
                            <button onClick={() => navigate('/sobre')} className="hover:text-amber-500 transition">Sobre o Escritório</button>
                            <button onClick={() => navigate('/contato')} className="hover:text-amber-500 transition">Contato</button>

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
            <main className="flex-1 bg-slate-50 relative z-10">
                {children}
            </main>

            {/* BOTÃO FLUTUANTE DO WHATSAPP */}
            <a
                href={`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagemPadrao)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition duration-300 flex items-center justify-center group"
                title="Fale conosco no WhatsApp"
            >
                {/* Efeito de 'Pulse' (Opcional, para chamar atenção) */}
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-20 animate-ping group-hover:opacity-0"></span>

                {/* Ícone do WhatsApp (SVG Original) */}
                <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            </a>

            {/* Rodapé */}
            <Footer />

        </div>
    );
};

export default PublicLayout;