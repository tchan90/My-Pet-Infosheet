import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'


class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">My Pet Infosheet</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Link to="/pets"><span className="navLinks">Pet Database</span></Link>
      <Link to="/owner" ><span className="navLinks">Owner Info</span></Link>
      <Link to="/about">
      <span className="navLinks">About</span>
      </Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
            </div>
        )
    }
}

export default Navigation;