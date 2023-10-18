import React from "react";
import { Container } from "react-bootstrap";
import HeaderHorizontal from "../../Header/HeaderHorizontal";
import Capa from '../../../imgs/CapaNotificacoes.png'
import './notificacoes.css'

const Notificacoes = () => {
  return (
    <>
      <HeaderHorizontal />
      <div className="container-principal">
      <Container className="container">
        <h1>
          Parabéns! Seu cadastro foi realizado com sucesso!
          <br />
          Aguarde ate que seu usuário seja liberado pelo administrador.
        </h1>
        <div className="container-capa">
        <img src={Capa} alt="Capa"/>
        </div>
      </Container>
      </div>
     
    </>
  );
};

export default Notificacoes;
