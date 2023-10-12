import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "../Logo/Logo";
import { LinkContainer } from "react-router-bootstrap";
import "./navigator.css";

const NavegatorHorizontal = () => {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <LinkContainer to="/Bem Vindo">
            <Navbar.Brand>
              <Logo />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown title="Sistemas" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Barbearia</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">Acadêmia</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Medicina</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav.Link eventKey={2} className="corLink">
              Suporte
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavegatorHorizontal;
