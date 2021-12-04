import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../styles/navbar.css';

export default class Navbarmenu extends React.Component {
  render() {
    return (
      <div>
        <Navbar expand="lg">
          <Link to={'/'}></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link>
                  <Link to={'/'}>HOME</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to={'/about'}>ABOUT</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to={'/blog'}>BLOG</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Button className="buttonfree" variant="light">
                  FREE CONSULTATION
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
