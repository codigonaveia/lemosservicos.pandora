import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Logo from "../Logo/Logo";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
const HeaderHorizontal = ({isAuthenticated}) => {
  const navagater = useNavigate();
  const navegatorToLogin = () => {
    navagater("/Login");
  };

  const navegatorToNovoUsuario = () => {
    navagater("/Usuarios");
  };

  return (
    <Navbar className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <LinkContainer to="/Home">
          <Navbar.Brand>
            <Logo />
          </Navbar.Brand>
        </LinkContainer>
       
        <Navbar.Toggle />
        <Nav className="me-auto">
          {!isAuthenticated && (
            <>
             <LinkContainer to="/Academia">
           <Nav.Link>Academia</Nav.Link>
           </LinkContainer>
            <LinkContainer to="/Barbearia">
            <Nav.Link>Barbearia</Nav.Link>
            </LinkContainer>
             <LinkContainer to="/Medicina">
             <Nav.Link>Odontologia</Nav.Link>
             </LinkContainer>
            </>
          
          )}
          
           
          </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button variant="outline-warning" onClick={navegatorToLogin}>
              Login
            </Button>{" "}
            <Button variant="outline-success" onClick={navegatorToNovoUsuario}>
              Criar Conta
            </Button>{" "}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderHorizontal;
