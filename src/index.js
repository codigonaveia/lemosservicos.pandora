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
import Academia from './components/pages/Auth/Academia/Academia'
import Barbearia from './components/pages/Auth/Barbearia/Barbearia'  
import Odontologia from './components/pages/Auth/Medicina/Odontologia'

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
      <Route exact path='/Academia' Component={Academia}/>
      <Route exact path='/Barbearia' Component={Barbearia}/>
      <Route exact path='/Medicina' Component={Odontologia}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
    {/* <App /> */}
  </React.StrictMode>
);


