import React, { Component } from "react";
import UserMenu from "./UserMenu";
import "./UserCalendar.css";

class UserCalendar extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <div>
          <UserMenu />
        </div>
        <dib>
          <h1>Calendar</h1>
        </dib>
      </div>
    );
  }
}

export default UserCalendar;
