import React, { useState} from "react";
import HeaderHorizontal from "../../Header/HeaderHorizontal";
import { Col, Container, Form, Row, Button, Alert, Spinner } from "react-bootstrap";
import Titulo from "../../Titulo/Titulo";
import Config from "../../api/axios/Config";
import Logo from "../../../imgs/calculator-image.png";
import "./usuarios.css";
import { useNavigate } from "react-router-dom";
const Usuarios = () => {

  const navigator  = useNavigate();
  function navigatorToPage(){
    navigator("/Notificacoes");

  }
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(null);
  const [mensagem, setMensagem] = useState(null);
  const [dados, setDados] = useState({
    avatar: null,
    PrimeiroNome: "",
    UltimoNome: "",
    email: "",
    Telefone: "",
    Senha: "",
    ConfirmaSenha: "",
    CodSistemas: "",
  });

  // Passa os dados para os imputs
  const HandleInput = (event) => {
    const { name, value, type, files } = event.target;
    setDados({
      ...dados,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)
    
    
      await new Promise((resolve) => {
        setTimer(setTimeout(() => {
          resolve(); // Resolvendo a promessa após 10 segundos
        }, 5000));
      });
    const formData = new FormData();
    formData.append("avatar", dados.avatar);
    formData.append("PrimeiroNome", dados.PrimeiroNome);
    formData.append("UltimoNome", dados.UltimoNome);
    formData.append("email", dados.email);
    formData.append("Telefone", dados.Telefone);
    formData.append("Senha", dados.Senha);
    formData.append("ConfirmaSenha", dados.ConfirmaSenha);
    formData.append("CodSistemas", dados.CodSistemas);

    try {
      //const response = await Config.post("Auth/Cadastrar", dados);
      const response  = await Config.post("Auth/Cadastrar", formData);
    
      console.log("Usuario cadastrado com sucesso!", response.data);
      setMensagem({
        tipo: "success",
        texto: JSON.stringify(response.data),
      });
     
      setLoading(false);
      clearTimeout(timer);
      navigatorToPage();
    } catch (error) {
      console.log("Error:", error);
      setMensagem({
        tipo: "danger",
        texto: "Erro no cadastro: " + JSON.stringify(error.response.data),
      });
      setLoading(false)
      clearTimeout(timer);
    }
  };

  // const handleReset = () => {
  //   document.querySelectorAll("input");
  //   this.setState({
  //     itemvalues: [{}],
  //   });
  // };


  return (
    <>
      <HeaderHorizontal />
      <Container fluid className="container-principal">
        <Titulo estilo="estilo" titulo="Crie uma conta gratuita" />
        <hr />
        <Row>
          <Col>
            <img src={Logo} width="100%" alt="logo" />
          </Col>
          <Col>
            <Form className="form-usuarios-cadastro" onSubmit={handleSubmit}>
              <h3>Criar Conta</h3>
              <hr />

              <Form.Group className="mb-3" controlId="avatar">
                <Form.Label>Avatar</Form.Label>
                <Form.Control
                  type="file"
                  name="avatar"
                  accept="image/*"
                  onChange={HandleInput}
                />
              </Form.Group>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="primeiroNome">
                  <Form.Label>Primeiro Nome</Form.Label>
                  <Form.Control
                    type="text"
                    name="PrimeiroNome"
                    placeholder="Primeiro Nome"
                    value={dados.PrimeiroNome}
                    onChange={HandleInput}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="ultimoNome">
                  <Form.Label>Último Nome</Form.Label>
                  <Form.Control
                    type="text"
                    name="UltimoNome"
                    placeholder="Ultimo Nome"
                    value={dados.UltimoNome}
                    onChange={HandleInput}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="email">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Digite seu e-mail"
                    value={dados.Email}
                    onChange={HandleInput}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Escolha o Sistema</Form.Label>
                  <Form.Select
                    controlId="codSistemas"
                    name="CodSistemas"
                    value={dados.CodSistemas}
                    onChange={HandleInput}
                  >
                    <option>Selecione...</option>
                    <option value={1}>Academia</option>
                    <option value={2}>Barbearia</option>
                    <option value={3}>Medicina</option>
                  </Form.Select>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="senha">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control
                    type="password"
                    name="Senha"
                    value={dados.Senha}
                    onChange={HandleInput}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="confirmaSenha">
                  <Form.Label>Confirme a Senha</Form.Label>
                  <Form.Control
                    type="password"
                    name="ConfirmaSenha"
                    value={dados.ConfirmaSenha}
                    onChange={HandleInput}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="telefone">
                  <Form.Label>Celular</Form.Label>
                  <Form.Control
                    type="text"
                    name="Telefone"
                    value={dados.Telefone}
                    onChange={HandleInput}
                  />
                </Form.Group>
              </Row>
              <Button variant="primary" type="submit">
                Cadastrar
              </Button>
            </Form>
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
            <br/>
            {loading &&<div className="loading"><Spinner/> Aguarde os dados estão sendo enviandos...</div>}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Usuarios;
