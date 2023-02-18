import React from "react";
import "./Footer.css";
class Footer extends React.Component {
  render() {
    return (
      <div className="" id="footer">
        <section className=" my-2">
          <div className="container ">
            <a href="#top" className="arrow-top">
              <i className="bi bi-arrow-up-circle h1"></i>
            </a>
            <p>Privacy Policy</p>
            <p>
              © Copyright{" "}
              <span className="text-primary">Clock Workz Corporation</span>{" "}
              2020. All Rights Reserved
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default Footer;
