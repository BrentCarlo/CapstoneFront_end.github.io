import React from "react";
import "./AdminNavbar.css";
import { Container, Navbar, Nav, Image } from "react-bootstrap";
class AdminNavbar extends React.Component {
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
          <Container className="adminmenu">
            <Navbar.Brand>
              <h3 className="">
                ClockWorkz
                <Image src="../workz.jpg" alt="logo" className="admin-image " />
              </h3>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto ">
                <Nav.Link href="/admin_dashboard">
                  Dashboard
                  <i className="bi bi-speedometer"></i>
                </Nav.Link>
                <Nav.Link href="/admin_manage">
                  Manage Employee
                  <i className="bi bi-people-fill"></i>
                </Nav.Link>
                <Nav.Link href="/admin_report">
                  Report
                  <i className="bi bi-database-fill"></i>
                </Nav.Link>
                <Nav.Link href="/admin_user-accounts">
                  user Account
                  <i className="bi bi-person-vcard"></i>
                </Nav.Link>
                <Nav.Link href="/login" className="logout">
                  Logout
                  <i className="bi bi-box-arrow-right px-3"></i>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* <nav>
          <ul>
            <li>
              <a href="#" className="logo my-3">
                <span className="nav-item">Admin</span>
              </a>
            </li>
            <hr className="text-white" />
            <li>
              <a href="#">
                <i className="bi bi-house-fill"></i>
                <span className="nav-item">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-people-fill"></i>
                <span className="nav-item">Manage Employee</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-bar-chart-steps"></i>
                <span className="nav-item">Attendance</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-database-fill"></i>
                <span className="nav-item">Report</span>
              </a>
            </li>
            <hr className="text-white" />
            <li>
              <a href="#" className="logout">
                <i className="bi bi-box-arrow-right"></i>
                <span className="nav-item">Log out</span>
              </a>
            </li>
          </ul>
        </nav> */}
      </div>
    );
  }
}

export default AdminNavbar;

{
  /* <img src="./workz.jpg" alt="logo" id="img" className="my-5" /> */
}
