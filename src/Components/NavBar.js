import React from "react";
import "./NavBar.css";
import { Container, Navbar, Nav } from "react-bootstrap";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar   
          bg="dark"
          expand="lg"
          variant="dark"
          fixed="top"
          className="navbar">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt="logo"
                src="workz.jpg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Clock Workz
           
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" id="navlinks">
              <Nav.Link href="#top">Home</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="/login">Application</Nav.Link>
              <Nav.Link href="">About</Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
