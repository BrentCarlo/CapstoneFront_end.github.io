import React from "react";
import "./AdminDash.css";
import AdminSidebar from "./AdminSidebar";

class AdminDash extends React.Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <div className="">
          <AdminSidebar />
        </div>
        <div>
          <section>
            <div className="dashboard">
              <div className="dashboard-top">
                <h1>Dashboard</h1>
                <i className="bi bi-person-badge-fill "></i>
              </div>
              <div className="users">
                <div className="card">
                  <img src="./brent.jpg" alt="userpic" />
                  <h4>Employee</h4>
                  <p>Position</p>
                  <div className="per">
                    <table>
                      <tr>
                        <td>
                          <span>85%</span>
                        </td>
                        <td>
                          <span>87%</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Month</td>
                        <td>Year</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default AdminDash;
