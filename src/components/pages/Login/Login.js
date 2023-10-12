import React, { useState } from "react";
import { Container, Form, Row, Col, Button, Alert } from "react-bootstrap";
import HeaderHorizontal from "../../Header/HeaderHorizontal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import ImgLogin from "../../../imgs/Login.avif";
import Titulo from "../../Titulo/Titulo";
import "./login.css";
import Config from "../../api/axios/Config";
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
      const response = await Config.post("Auth/Login", dados);
      console.log("Dados enviados com sucesso:", response.data);
       navegatorToHome();
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
      <Container>
        <br />
        <p className="alert alert-secondary">Home/Login</p>
        <Row>
          <Col>
            <img src={ImgLogin} width="100%" alt="Logo" />
          </Col>
          <Col>
            <Titulo estilo="login" titulo="Login" icon={faUserCircle} />
            <Form onSubmit={handleSubmit}>
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
              <Button variant="primary" size="lg" onClick={navegatorToUsuario}>
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
