import React, { Component } from "react";
import UserMenu from "./UserMenu";
import "./UserAttendance.css";

class UserAttendance extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <UserMenu />
        <div>
          <h1>Attendance</h1>
        </div>
      </div>
    );
  }
}

export default UserAttendance;
