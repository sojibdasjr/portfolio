import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../../images/logo_fav.png'
import './Navigaiotn.css'

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
  <Container>
  <Navbar.Brand href="#home"> <img
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /> SOJiB DAS</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#aboutMe">About</Nav.Link>
      <Nav.Link href="#services">Services</Nav.Link>
      <Nav.Link href="#pricing">Portfolio</Nav.Link>
      <Nav.Link href="#pricing">Skill</Nav.Link>
      <Nav.Link href="#pricing">contact</Nav.Link>

    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Navigation;