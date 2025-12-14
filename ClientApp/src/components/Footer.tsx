import React from 'react';
import { Scale, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
            <div className="max-w-6xl mx-auto px-4">

                {/* GRID DE 3 COLUNAS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Coluna 1: Marca e Sobre */}
                    <div>
                        <div className="flex items-center gap-2 mb-6 text-white">
                            <Scale size={32} className="text-amber-500" />
                            <div>
                                <h2 className="text-2xl font-serif font-bold leading-none">JurisBlog</h2>
                                <span className="text-xs text-slate-500 tracking-widest uppercase">Direito & Justiça</span>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-400 mb-6">
                            Comprometidos com a defesa dos seus direitos e a excelência jurídica.
                            Trazendo informação clara e acessível para todos.
                        </p>

                        {/* Redes Sociais */}
                        <div className="flex gap-4 items-center">
                            {/* WhatsApp (SVG Personalizado) */}
                            <button className="hover:text-amber-500 transition" title="WhatsApp">
                                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                            </button>

                            <button className="hover:text-amber-500 transition"><Instagram size={20} /></button>

                            {/* TikTok (SVG Personalizado) */}
                            <button className="hover:text-amber-500 transition" title="TikTok">
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="block">
                                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.62-1.12v8.76c0 5.29-5.43 7.31-9.65 5.71-2.73-1.04-4.22-3.83-3.79-6.67.31-2.06 1.76-3.83 3.73-4.59 1.94-.78 4.2-.39 5.86.87V6.53c-.77-.29-1.59-.47-2.42-.47-3.32.06-6.04 2.81-6.04 6.15 0 3.31 2.65 6.01 5.96 6.09 3.25.08 6.01-2.5 6.03-5.75L16.29 6h-3.76l-.005-5.98z" />
                                </svg>
                            </button>

                            <button className="hover:text-amber-500 transition"><Facebook size={20} /></button>
                            <button className="hover:text-amber-500 transition"><Linkedin size={20} /></button>
                        </div>
                    </div>

                    {/* Coluna 2: Links Rápidos */}
                    <div>
                        <h3 className="text-white font-bold mb-6 border-b border-slate-700 pb-2 inline-block">Navegação</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <button onClick={() => navigate('/')} className="hover:text-amber-500 transition flex items-center gap-2">
                                    Início
                                </button>
                            </li>
                            <li>
                                <button onClick={() => navigate('/sobre')} className="hover:text-amber-500 transition flex items-center gap-2">
                                    Sobre o Escritório
                                </button>
                            </li>
                            <li>
                                <button onClick={() => navigate('/contato')} className="hover:text-amber-500 transition flex items-center gap-2">
                                    Fale Conosco
                                </button>
                            </li>
                            <li>
                                <button onClick={() => navigate('/admin')} className="hover:text-amber-500 transition flex items-center gap-2 text-amber-600 font-bold">
                                    Área do Advogado
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Coluna 3: Contato */}
                    <div>
                        <h3 className="text-white font-bold mb-6 border-b border-slate-700 pb-2 inline-block">Contatos</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-amber-500 mt-1 shrink-0" />
                                <span>Av. Paulista, 1000 - Bela Vista<br />São Paulo - SP, 01310-100</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-amber-500 shrink-0" />
                                <span>(11) 9999-9999</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-amber-500 shrink-0" />
                                <span>contato@juris.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* BARRA INFERIOR (Copyright) */}
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} JurisBlog Advogados Associados. Todos os direitos reservados.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <span>OAB/SP 123.456</span>
                        <span className="hover:text-slate-300 cursor-pointer">Termos de Uso</span>
                        <span className="hover:text-slate-300 cursor-pointer">Privacidade</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;