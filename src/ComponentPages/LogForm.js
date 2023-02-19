import React from "react";
import "./LogIn.css";
import axios from "axios";

class LogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  login(e) {
    e.preventDefault();
    console.log(e.target.username.value);
    console.log(e.target.password.value);
    axios
      .post("http://late-spies-do-175-176-31-13.loca.lt/login", {
        username: e.target.username.value,
        password: e.target.password.value,
      })
      .then((response) => {
        console.log(response);
        if(response.data.length > 0){
          console.log(true);
        }else{
          console.log(false);
        }
     
       window.location.href = response.data.length > 0 ? '/user_profile' : '/login';
      })
  }

  render() {
    return (
      <div id="logForm">
        <div className="log-in" id="login">
          <h1 className="text-center text-white">ClockWorkz</h1>
          <img
            src="./bg.jpg"
            className="img-fluid rounded"
            id="clock"
            alt="logo"
          />
          <form onSubmit={this.login}>
            <div className="form-group">
              <label className="form-label text-white" htmlFor="username">
                Username
              </label>
              <input
                className="form-control"
                name="username"
                type="text"
                id="text"
                placeholder="Enter: username"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label text-white" htmlFor="password">
                Password
              </label>
              <input
                className="form-control"
                name="password"
                type="password"
                id="password"
                placeholder="*******"
                required
              />
            </div>
            <div className="form-group">
              <input
                className="btn btn-success w-100"
                type="submit"
                value="Sign in"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LogForm;
