import React from "react";
import "./UserMenu.css";
import { Container, Nav, Navbar, Image } from "react-bootstrap";

class UserMenu extends React.Component {
  render() {
    return (
      <div>
        <Navbar
          bg="dark"
          expand="lg"
          variant="dark"
          fixed="top"
          className="navbar"
        >
          <Container className="usermenu">
            <Navbar.Brand>
              <h3 className="">
                ClockWorkz
                <Image src="../workz.jpg" alt="logo" className="user-image " />
              </h3>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/user_profile">
                  Profile
                  <i className="bi bi-person px-3"></i>
                </Nav.Link>
                <Nav.Link href="/user_attendance">
                  Attendance
                  <i className="bi bi-clock px-3"></i>
                </Nav.Link>
                <Nav.Link href="/login" className="logout">
                  Logout
                  <i className="bi bi-box-arrow-right px-3"></i>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default UserMenu;
