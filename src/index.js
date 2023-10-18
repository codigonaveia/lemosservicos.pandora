import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import Login from './components/pages/Login/Login'
import Footer from './components/Footer/Footer';
import Usuarios from './components/pages/Usuarios/Usuarios'
import BemVindo from './components/pages/Auth/BemVindo'
import Notificacoes from './components/pages/Notificacoes/Notificacoes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' Component={App}/>
      <Route exact path='/Home' Component={Home}/>
      <Route exact path='/Login' Component={Login}/>
      <Route exact path='/Usuarios' Component={Usuarios}/>
      <Route exact path='/BemVindo' Component={BemVindo}/>
      <Route exact path='/Notificacoes' Component={Notificacoes}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
    {/* <App /> */}
  </React.StrictMode>
);


