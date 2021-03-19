import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import DarkModeToggle from "react-dark-mode-toggle";

const Header = props => {
  const { darkMode } = props;
  return (
    <Container>
      <Navbar fixed="top" variant={darkMode.value ? "dark" : "light"}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
            <Nav.Link href="#about" className="nav-link">About</Nav.Link>
            <Nav.Link href="#projects" className="nav-link">Projects</Nav.Link>
          </Nav>
          <DarkModeToggle checked={darkMode.value} onChange={darkMode.toggle} size={75} />
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
