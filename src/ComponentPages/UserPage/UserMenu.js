import React, { Component } from "react";
import "./UserMenu.css";

class UserMenu extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <a href="#" className="logo my-3">
                <img src="./workz.jpg" alt="logo" id="img" className="my-5" />
                <span className="nav-item">Employee</span>
              </a>
            </li>
            <hr className="text-white" />
            <li>
              <a href="#">
                <i className="bi bi-person-fill"></i>
                <span className="nav-item">Profile</span>
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
                <span className="nav-item">Calendar</span>
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
        </nav>
      </div>
    );
  }
}

export default UserMenu;
