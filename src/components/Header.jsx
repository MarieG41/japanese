import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../assets/styles/header.css'
import logo from '../assets/img/428e85693ad93ecbe32dd9c6f77d3e96-removebg-preview.png'

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
            <img
                src={logo}
                className="d-inline-block align-top"
                alt="logo restaurant de sushi"
                />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="a-propos">A propos</Nav.Link>
            <Nav.Link href="panier">Panier (0)</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Header