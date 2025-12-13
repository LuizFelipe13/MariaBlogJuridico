import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const resposta = await fetch('https://localhost:7298/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, senha })
            });

            if (resposta.ok) {
                const dados = await resposta.json();
                // Salva o token no navegador (localStorage)
                localStorage.setItem('token-blog', dados.token); //
                localStorage.setItem('usuario-nome', dados.nome); // <--- SALVA O NOME
                alert("Bem-vindo(a), " + dados.nome);
                navigate('/admin');
            } else {
                alert("Email ou senha incorretos.");
            }
        } catch (error) {
            console.error(error);
            alert("Erro de conexão.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold mb-6 text-center text-slate-800">Acesso Restrito</h1>
                <form onSubmit={handleLogin} className="space-y-4">
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                    <button className="w-full bg-slate-900 text-white p-2 rounded hover:bg-slate-800">
                        Entrar
                    </button>
                </form>
                <button onClick={() => navigate('/')} className="w-full mt-4 text-sm text-slate-500 hover:underline">
                    Voltar ao Site
                </button>
            </div>
        </div>
    );
};

export default Login;