// IMPORTANDO DEPENDENCIAS EXTERNAS
import React, { useState } from 'react';
import api from './services/api';
import './App.css';

// IMPORTANDO UMA IMAGEM
import logo from './assets/logo.svg';

// CRIANDO UM COMPONENTE
function App() {

  const [email, setEmail] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    
    const response = await api.post('/sessions', {email});

    console.log(response.data);
  }

  return (
    <div className="container">
      <img src={logo} alt="AirCnC" />

      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre  <strong>talentos</strong> para sua empresa.
        </p>

        {/*  FORMULARIO */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail *</label>
          <input type="email" id="email" placeholder="Digite seu mehor email" autoFocus onChange={event => setEmail(event.target.value)} />
          <button className="btn" type="submit">Entrar</button>
        </form>

      </div>
    </div>
  );
}

// EXPORTANDO O COMPONENTE
export default App;
