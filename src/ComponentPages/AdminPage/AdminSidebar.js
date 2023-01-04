import React from "react";
import "./AdminSidebar.css";

class AdminSidebar extends React.Component {
  render() {
    return (
      <>
        <nav>
          <ul>
            <li>
              <a href="#" className="logo my-3">
                <img src="./workz.jpg" alt="logo" id="img" className="my-5" />
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
        </nav>
      </>
    );
  }
}

export default AdminSidebar;
