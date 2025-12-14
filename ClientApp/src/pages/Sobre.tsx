import React from 'react';
import { Shield, Users, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Sobre = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-slate-50 min-h-screen font-sans">

            {/* 1. HERO SECTION (Topo com Título) */}
            <div className="bg-slate-900 text-white py-20">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-amber-500">
                        Excelência e Tradição
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Há mais de 15 anos defendendo seus direitos com ética, transparência e resultados comprovados.
                    </p>
                </div>
            </div>

            {/* 2. QUEM SOMOS (Texto + Imagem) */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Imagem do Escritório */}
                    <div className="md:w-1/2">
                        <div className="relative">
                            <div className="absolute top-4 -left-4 w-full h-full border-2 border-amber-500 rounded-lg"></div>
                            <img
                                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop"
                                alt="Nosso Escritório"
                                className="relative rounded-lg shadow-xl w-full h-[400px] object-cover"
                            />
                        </div>
                    </div>

                    {/* Texto */}
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-serif font-bold text-slate-800 mb-6">
                            Compromisso com a Justiça
                        </h2>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                            Fundado em 2008, o <strong>JurisBlog Advogados</strong> nasceu com a missão de oferecer uma advocacia moderna e humanizada. Entendemos que por trás de cada processo existe uma história de vida ou o futuro de uma empresa.
                        </p>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Nossa equipe é formada por especialistas em diversas áreas do direito, prontos para atuar de forma combativa e estratégica, garantindo que seus direitos sejam respeitados em qualquer instância.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center gap-2 text-slate-700 font-medium">
                                <CheckCircle size={20} className="text-amber-600" /> Atendimento Personalizado
                            </div>
                            <div className="flex items-center gap-2 text-slate-700 font-medium">
                                <CheckCircle size={20} className="text-amber-600" /> Especialistas Seniores
                            </div>
                            <div className="flex items-center gap-2 text-slate-700 font-medium">
                                <CheckCircle size={20} className="text-amber-600" /> Tecnologia Jurídica
                            </div>
                            <div className="flex items-center gap-2 text-slate-700 font-medium">
                                <CheckCircle size={20} className="text-amber-600" /> Transparência Total
                            </div>
                        </div>

                        <button
                            onClick={() => navigate('/contato')}
                            className="bg-slate-900 text-white px-8 py-3 rounded hover:bg-slate-800 transition flex items-center gap-2"
                        >
                            Fale com um Especialista <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </div>

            {/* 3. NOSSOS VALORES (Cards) */}
            <div className="bg-white py-16 border-y border-slate-100">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif font-bold text-slate-800">Nossos Pilares</h2>
                        <p className="text-slate-500 mt-2">O que guia nossa atuação todos os dias</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 bg-slate-50 rounded-xl text-center hover:-translate-y-2 transition duration-300">
                            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Shield size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">Ética Inegociável</h3>
                            <p className="text-slate-600 text-sm">
                                Atuamos com total transparência e lealdade aos nossos clientes, respeitando rigorosamente o código de ética.
                            </p>
                        </div>

                        <div className="p-8 bg-slate-50 rounded-xl text-center hover:-translate-y-2 transition duration-300">
                            <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Award size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">Excelência Técnica</h3>
                            <p className="text-slate-600 text-sm">
                                Nossos profissionais estão em constante atualização acadêmica para oferecer as melhores teses jurídicas.
                            </p>
                        </div>

                        <div className="p-8 bg-slate-50 rounded-xl text-center hover:-translate-y-2 transition duration-300">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Users size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">Foco no Cliente</h3>
                            <p className="text-slate-600 text-sm">
                                Cada caso é único. Oferecemos um atendimento humanizado, entendendo a dor e a necessidade de cada pessoa.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. CTA FINAL */}
            <div className="py-20 text-center px-4">
                <h2 className="text-3xl font-serif font-bold text-slate-800 mb-6">
                    Precisa de orientação jurídica?
                </h2>
                <p className="text-slate-600 mb-8 max-w-xl mx-auto">
                    Não deixe suas dúvidas para depois. Nossa equipe está pronta para analisar o seu caso.
                </p>
                <button
                    onClick={() => navigate('/contato')}
                    className="bg-amber-600 text-white px-10 py-4 rounded-full font-bold hover:bg-amber-700 transition shadow-lg hover:shadow-amber-600/30"
                >
                    Agendar Consulta
                </button>
            </div>

        </div>
    );
};

export default Sobre;