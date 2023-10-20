import React from "react";
import { Container, Image } from "react-bootstrap";
import HeaderHorizontal from "../../../Header/HeaderHorizontal";
import { 
  FaUserAlt, 
  FaUserGraduate, 
  FaMoneyBill, 
  FaAlignJustify ,
  FaBookOpen
} from "react-icons/fa";
import Avatar from '../../../../imgs/testimonials-01.jpg'

const Barbearia = () => {
  return (
    <>
      <HeaderHorizontal />
      <div className="container-principal">
        <Container>
        <h1>Gerenciamento de Barbearia </h1>
          <hr />
          <div className="container-avatar">
          <Image src={Avatar} rounded width={150}/>
          <h4>Edinaldo Santos</h4>
          </div>
       
          <hr/>
          <h3><FaAlignJustify/> Menu de navegação</h3>
        
          <div className="container-panel">
            <div className="card-item">
              <FaUserAlt />
              <h5>Gerenciar Clientes</h5>
            </div>
            <div className="card-item">
            <FaBookOpen />
              <h5>Gerenciar Agenda</h5>
            </div>
            <div className="card-item">
            <FaUserGraduate />
              <h5>Gerenciar Funcionarios</h5>
            </div>
            <div className="card-item">
            <FaMoneyBill />
              <h5>Financeiro</h5>
            </div>
           
          </div>
        </Container>
      </div>
    </>
  );
};

export default Barbearia;
