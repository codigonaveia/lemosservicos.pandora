import { Card, Container, Row, Col, Spinner } from "react-bootstrap";
import Titulo from "../../Titulo/Titulo";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./bemvindo.css";
import Academia from "../../../imgs/Academia.jpg";
import Barbearia from "../../../imgs/Barbearia.jpg";
import Odonto from "../../../imgs/Odontologia.jpg";
import HeaderHorizontal from "../../Header/HeaderHorizontal";
import { LinkContainer } from "react-router-bootstrap";
const BemVindo = () => {
  return (
    <>
      <HeaderHorizontal />
      <div className="container-principal">
        <Container>
          <Titulo
            estilo="titulo"
            titulo="Ola, seja bem vindo!"
            icon={faUserCircle}
          />
         
          <hr />
          <Row>
            <Col>
            <LinkContainer to="/Academia">
            <Card className="cards">
                <Card.Img variant="top" src={Academia} />
                <Card.Body>
                <Card.Text>
                  <h3> <Spinner className="spinner" variant="warning"/> Área Academia</h3>
                
               </Card.Text>
                </Card.Body>
              </Card>
            </LinkContainer>
             
            </Col>
            <Col>
            <LinkContainer to="/Barbearia">
            <Card className="cards">
                <Card.Img variant="top" src={Barbearia} />
                <Card.Body>
                <Card.Text>
                  <h3><Spinner className="spinner" variant="danger"/> Área Barbearia</h3>
              
               </Card.Text>
                </Card.Body>
              </Card>
            </LinkContainer>
             
            </Col>
            <Col>
            <LinkContainer to="/Medicina">
            <Card className="cards">
                <Card.Img variant="top" src={Odonto} />
                <Card.Body>
                <Card.Text>
                  <h3><Spinner className="spinner" variant="success"/> Área Odontologia</h3>
              
               </Card.Text>
                </Card.Body>
              </Card>
            </LinkContainer>
             
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default BemVindo;
