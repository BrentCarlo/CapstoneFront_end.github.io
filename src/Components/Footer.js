import React from "react";
import "./Footer.css";
class Footer extends React.Component {
  render() {
    return (
      <div className="" id="footer">
        <section className=" my-2">
          <div className="container py-2">
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
