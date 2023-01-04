import React from "react";
import UserMenu from "./UserMenu";

class UserProfile extends React.Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <div>
          <UserMenu />
        </div>
        <div className=" container bg-success ">
          <div className="row bg-primary">
            <h1 className="">Profile</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
