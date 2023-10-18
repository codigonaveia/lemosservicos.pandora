import { Card, Container, Row, Col, Button } from "react-bootstrap";
import Titulo from "../../Titulo/Titulo";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./bemvindo.css";
import NavigatorHorizontal from "../../Navegatos/NavegatorHorizontar";
import Academia from "../../../imgs/Academia.jpg";
import Barbearia from "../../../imgs/Barbearia.jpg";
import Odonto from "../../../imgs/Odontologia.jpg";
const BemVindo = () => {
  return (
    <>
      <NavigatorHorizontal />
      <div className="container-principal">
        <Container>
          <Titulo
            estilo="titulo"
            titulo="Ola, seja bem vindo!!"
            icon={faUserCircle}
          />
          <hr />
          <Row>
            <Col>
              <Card>
                <Card.Img variant="top" src={Academia} />
                <Card.Body>
                  <Button variant="primary">Entrar</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={Barbearia} />
                <Card.Body>
                  <Button variant="primary">Entrar</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={Odonto} />
                <Card.Body>
                  <Button variant="primary">Entrar</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default BemVindo;
