import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Scale } from 'lucide-react'; // Adicionei Scale

const Contato = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [enviando, setEnviando] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setEnviando(true);

        try {
            // Nota: Adicionei um "assunto" fixo para não dar erro 400 no backend antigo
            const resposta = await fetch('https://localhost:7298/contato', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome, email, mensagem, assunto: "Contato pelo Site" })
            });

            if (resposta.ok) {
                alert("Mensagem enviada! Entraremos em contato.");
                setNome(''); setEmail(''); setMensagem('');
            } else {
                alert("Erro ao enviar.");
            }
        } catch (error) {
            console.error(error);
            alert("Erro de conexão.");
        } finally {
            setEnviando(false);
        }
    };

    return (
        // Container externo para dar espaçamento do topo e centralizar
        <div className="max-w-5xl mx-auto px-4 py-16 min-h-screen flex items-center">

            <div className="w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">

                {/* Lado Esquerdo - Informações (Escuro) */}
                <div className="bg-slate-900 text-white p-10 md:w-2/5 flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl font-serif font-bold mb-6 text-amber-500">Fale Conosco</h2>
                        <p className="text-slate-300 mb-8 leading-relaxed">
                            Estamos prontos para atender sua demanda jurídica com agilidade e excelência.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="bg-slate-800 p-3 rounded-full">
                                    <Phone size={20} className="text-amber-500" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 uppercase font-bold">Telefone</p>
                                    <p>(11) 9999-9999</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-slate-800 p-3 rounded-full">
                                    <Mail size={20} className="text-amber-500" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 uppercase font-bold">E-mail</p>
                                    <p>contato@juris.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-slate-800 p-3 rounded-full">
                                    <MapPin size={20} className="text-amber-500" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 uppercase font-bold">Localização</p>
                                    <p>Av. Paulista, 1000 - SP</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-slate-800">
                        <p className="text-xs text-slate-500 text-center">
                            Segunda a Sexta • 09:00 às 18:00
                        </p>
                    </div>
                </div>

                {/* Lado Direito - Formulário (Claro) */}
                <div className="p-10 md:w-3/5 bg-white">

                    {/* --- ÁREA NOVA: LOGO E TÍTULO PARA PREENCHER O ESPAÇO --- */}
                    <div className="flex flex-col items-center mb-8">
                        <div className="bg-amber-50 p-4 rounded-full mb-4">
                            <Scale size={48} className="text-amber-600" />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-slate-800">Envie sua Mensagem</h3>
                        <p className="text-slate-500 text-center text-sm mt-2 max-w-xs">
                            Preencha o formulário abaixo e retornaremos o mais breve possível.
                        </p>
                    </div>
                    {/* -------------------------------------------------------- */}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Nome Completo</label>
                            <input
                                value={nome} onChange={e => setNome(e.target.value)}
                                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                                placeholder="Ex: Dr. João Silva"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">E-mail Profissional</label>
                            <input
                                type="email" value={email} onChange={e => setEmail(e.target.value)}
                                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                                placeholder="Ex: joao@email.com"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Como podemos ajudar?</label>
                            <textarea
                                rows={4} value={mensagem} onChange={e => setMensagem(e.target.value)}
                                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition resize-none"
                                placeholder="Descreva sua dúvida ou solicitação..."
                                required
                            />
                        </div>

                        <button disabled={enviando} className="w-full bg-amber-600 text-white p-4 rounded-lg font-bold hover:bg-amber-700 shadow-lg shadow-amber-600/20 flex justify-center items-center gap-2 transition transform active:scale-95">
                            {enviando ? "Enviando..." : <><Send size={20} /> Enviar Solicitação</>}
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contato;