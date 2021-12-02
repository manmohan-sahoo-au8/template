import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Solutions</Nav.Link>
              <Nav.Link href="#features">Services</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}
