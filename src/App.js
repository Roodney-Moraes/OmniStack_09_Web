// IMPORTANDO DEPENDENCIAS EXTERNAS
import React from 'react';
import './App.css';

// IMPORTANDO AS ROTAS
import Routes from './routes';

// IMPORTANDO UMA IMAGEM
import logo from './assets/logo.svg';

// CRIANDO UM COMPONENTE
function App() {

  return (
    <div className="container"> 
      <img src={logo} alt="AirCnC" />
      <div className="content">
        <Routes />
      </div>
    </div>
  );
  
}

// EXPORTANDO O COMPONENTE
export default App;
