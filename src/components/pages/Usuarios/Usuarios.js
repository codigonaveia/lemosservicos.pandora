import React from "react";
import HeaderHorizontal from "../../Header/HeaderHorizontal";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import Titulo from "../../Titulo/Titulo";
import './usuarios.css'
const Usuarios = () => {
  return (
    <>
      <HeaderHorizontal />
      <Container>
        <Titulo estilo="titulo" titulo="Criar conta" />
        <hr />
        <Form className="form-usuarios-cadastro">
          <Form.Group className="mb-3" controlId="foto">
            <Form.Label>Foto</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="PrimeiroNome">
              <Form.Label>Primeiro Nome</Form.Label>
              <Form.Control type="text" placeholder="Primeiro Nome" />
            </Form.Group>
            <Form.Group as={Col} controlId="UltimoNome">
              <Form.Label>Último Nome</Form.Label>
              <Form.Control type="text" placeholder="Ultimo Nome" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="Email">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" placeholder="Digite seu e-mail" />
            </Form.Group>
            <Form.Group as={Col} controlId="Sistemas">
              <Form.Label>Escolha o Sistema</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Selecione...</option>
                <option value={1}>Academia</option>
                <option value={2}>Barbearia</option>
                <option value={3}>Medicina</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="Senha">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" />
            </Form.Group>

            <Form.Group as={Col} controlId="ConfirmeSenha">
              <Form.Label>Confirme a Senha</Form.Label>
              <Form.Control type="password" />
            </Form.Group>

            <Form.Group as={Col} controlId="Celular">
              <Form.Label>Celular</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit">
            Cadastrar
          </Button>
        </Form>
      </Container>
    </>
  );
};
export default Usuarios;
