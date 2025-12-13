import React from 'react';
import { Navigate } from 'react-router-dom';

const RotaProtegida = ({ children }: { children: React.ReactNode }) => {
    const token = localStorage.getItem('token-blog'); // Verifica se tem o token salvo

    if (!token) {
        // Se não tiver token, chuta para o login
        return <Navigate to="/login" replace />;
    }

    // Se tiver, mostra o conteúdo (ex: Dashboard)
    return <>{children}</>;
};

export default RotaProtegida;