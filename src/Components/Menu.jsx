import React from "react";
import Img from "react-cool-img";
import { Link } from "react-router-dom";

import { Nav, Navbar, Container } from "react-bootstrap";

const Menu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        
        <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
          <Img src="./assets/logo.svg" alt="logo_milvest" />
        </Link>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/faq" style={{ color: 'inherit', textDecoration: 'inherit' }}>FAQ</Link>
            </Nav.Link>
            <Nav.Link href="https://milvest.vesti.mobi/">Catálogo</Nav.Link>
            <Nav.Link>
              <Link to="/politica" style={{ color: 'inherit', textDecoration: 'inherit' }}>Política de Privacidade</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
