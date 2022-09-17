import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Tako from "../../images/tako.jpg";

export default function Header() {
  return (
    <Navbar bg="dark" expand="lg" className="navbar-dark">
      <Container className="container-fluid text-light">
        <Navbar.Brand href="/">
          <img
            src={Tako}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Tako"
          />
          <span className="ms-2 text-white">takomc.com</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}