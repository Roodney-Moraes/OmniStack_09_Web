// IMPORTANDO A API
import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {
    
    const [email, setEmail] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        const response = await api.post('/sessions', { email });

        // RECUPERANDO O ID DO USUARIO
        const { _id } = response.data;

        // ARMAZENANDO O ID DO USUARIO NO NAVEGADOR
        localStorage.setItem("user", _id);

        console.log(_id);

        // DIRECIONAR PARA OUTRA PAGINAS
        history.push('/dashboard');
        
    }

    return (
        <>
            <p>
                Ofereça <strong>spots</strong> para programadores e encontre  <strong>talentos</strong> para sua empresa.
            </p>

            {/*  FORMULARIO */ }
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail *</label>
                <input type="email" id="email" placeholder="Digite seu mehor email" autoFocus onChange={event => setEmail(event.target.value)} />
                <button className="btn" type="submit">Entrar</button>
            </form>
        </>
    );
}