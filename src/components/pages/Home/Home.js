import React from "react";
import HeaderHorizontal from "../../Header/HeaderHorizontal";
import { Container } from "react-bootstrap";
import Capa from '../../../imgs/Capa5.png'
import "./home.css";
const Home = () => {
  return (
    <>
      <HeaderHorizontal />
       
      <div className="container-home">
        <Container className="container-central">
          <h1>Pandora Sistemas</h1>
          <h3>Sua plataforma de gestão de serviços</h3>
          <div className="container-capa">
           <img src={Capa} alt="capa"/>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;
