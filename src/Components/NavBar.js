import React from "react";
import "./LandingPage.css";
import About from "../Components/About";
import { Button } from "react-bootstrap";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3">
          <div class="container">
            <a class="navbar-brand" href="#">
              <h3>ClockWorkz</h3>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#home">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#services">
                    Services
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
                <li class="nav-item">
                  <Button className="btn btn-dark">
                    <a class="nav-link" href="">
                      Go to Application
                    </a>
                  </Button>
                </li>
                <About />
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
