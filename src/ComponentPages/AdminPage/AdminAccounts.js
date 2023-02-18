import React from "react";
import AdminNavbar from "./AdminNavbar";
import { Container } from "react-bootstrap";

class AdminAccounts extends React.Component {
  render() {
    return (
      <div>
        <AdminNavbar />
        <div className="container-fluid  py-5" id="admin-useraccount">
          <Container>
          <h1 className="dashboardHeader my-5 py-3 bg-primary text-center text-white">User Accounts</h1>
          </Container>
        </div>
      </div>
    );
  }
}

export default AdminAccounts;
