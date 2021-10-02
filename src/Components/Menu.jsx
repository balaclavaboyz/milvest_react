import React from "react";
import Img from "react-cool-img";
import { BrowserRouter, Route, Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
const styles = makeStyles({
  root: {
    fontSize: 200,
  },
});

const Menu = () => {
  const classes = styles();
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Img src="./assets/logo.svg" alt="logo_milvest" />
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link ><Link to='/'>Home</Link></Nav.Link>
              <Nav.Link ><Link to='/faq'>FAQ</Link></Nav.Link>
              <Nav.Link href="https://milvest.vesti.mobi/">Catálogo</Nav.Link>
              <Nav.Link component={Link} to={'/politica_de_privacidade'}>Política de Privacidade</Nav.Link>
              <Link to='/politica'>Política de Privacidade</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
