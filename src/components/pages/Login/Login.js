import React, { useState } from "react";
import { Container, Form, Row, Col, Button, Alert } from "react-bootstrap";
import HeaderHorizontal from "../../Header/HeaderHorizontal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import ImgLogin from "../../../imgs/Login.webp";
import Titulo from "../../Titulo/Titulo";
import "./login.css";
import Config from "../../api/axios/Default";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [dados, setDados] = useState({
    UserName: "",
    password: "",
  });

  const [mensagem, setMensagem] = useState(null);

  const navagater = useNavigate();
  const navegatorToHome = () => {
    navagater("/BemVindo");
  };

  const navegatorToUsuario = () => {
    navagater("/Usuarios");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDados({
      ...dados,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
       await Config.post("Auth/Login", dados).then(
        navegatorToHome()
      );
      // console.log("Dados enviados com sucesso:", response.data);
      // console.log("Token", response.data.token)
      
    } catch (error) {
      if (!error.status) {
      }
      console.error("Erro ao enviar dados:", error);
      setMensagem({
        tipo: "danger",
        texto:
          "Houve um erro ao tentar logar: " +
          JSON.stringify(error.response.data),
      });
    }
  };

  return (
    <>
      
      <HeaderHorizontal />
      <Container fluid className="container-principal">
        <br />
        <Titulo estilo="estilo" titulo="Tela de acesso" />
        <hr />
        <Row>
          <Col>
            <img src={ImgLogin} width="100%" alt="Logo" />
          </Col>
          <Col>
          
            <Form onSubmit={handleSubmit} className="form-login">
            <Titulo estilo="login" titulo="Login" icon={faUserCircle} />
              <Form.Group className="mb-3" controlId="UserName">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="UserName"
                  placeholder="Enter email"
                  value={dados.UserName}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={dados.password}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="success" type="submit">
                <FontAwesomeIcon icon={faUserAlt} /> Login
              </Button>
            </Form>
           
            <hr />
            <div>
            {mensagem && (
              <Alert
                variant={mensagem.tipo}
                onClose={() => setMensagem(null)}
                dismissible
              >
                {mensagem.texto}
              </Alert>
            )}
            </div>
            <div className="d-grid gap-2">
              <Button variant="outline-light" size="lg" onClick={navegatorToUsuario}>
                Criar contar
              </Button>
            </div>
          </Col>
        
        </Row>
      </Container>
    </>
  );
};

export default Login;
