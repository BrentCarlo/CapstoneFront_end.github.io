import React from "react";
import "./LogIn.css";

class LogForm extends React.Component {
  render() {
    return (
      <div id="logForm">
        <div className="log-in" id="login">
          <h1 className="text-center text-white">ClockWorkz</h1>
          <img src="./bg.jpg" className="img-fluid rounded" id="clock" />
          <form>
            <div className="form-group">
              <label className="form-label text-white" htmlFor="email">
                Email address
              </label>
              <input
                className="form-control"
                type="email"
                id="email"
                placeholder="sample@gmail.com"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label text-white" htmlFor="password">
                Password
              </label>
              <input
                className="form-control"
                type="password"
                id="password"
                placeholder="*******"
                required
              />
            </div>
            <div className="form-group form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkbox"
              />
              <label
                className="form-checkl-label text-white"
                htmlFor="checkbox"
              >
                Remember me
              </label>
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
