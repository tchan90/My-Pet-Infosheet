import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';


class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/user">My Pet Infosheet</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/user">Profile</Nav.Link>
      <Nav.Link href="/owner">Owner Info</Nav.Link>
      <Nav.Link href="/about">
        About
      </Nav.Link>
      <Nav.Link  href="/">
        Log Out
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
            </div>
        )
    }
}

export default Navigation;