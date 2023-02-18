import React from "react";
import { Container } from "react-bootstrap";
import AdminNavbar from "./AdminNavbar";

class AdminReport extends React.Component {
  render() {
    return (
      <div>
        <AdminNavbar />
        <div className="container-fluid  py-5" id="admin-report">
          <Container>
          <h1 className="dashboardHeader my-5 py-3 bg-primary text-center text-white">Report</h1>
          </Container>
        </div>
      </div>
    );
  }
}

export default AdminReport;
