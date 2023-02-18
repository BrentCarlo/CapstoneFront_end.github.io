import React from "react";

class HeroSection extends React.Component {
  render() {
    return (
      <div>
        <section
          className="bg-dark text-light p-3 text-center text-sm-start"
          id="Home"
        >
          <div className="container py-5">
            <div className="d-sm-flex align-items-center justify-content-between py-5">
              <div>
                <h1>
                  Time Management{" "}
                  <span className="text-warning">Made Easy!</span>
                </h1>
                <h3 className="my-4">What is ClockWorkz eDTR?</h3>
                <p className="lead my-4">
                  ClockWorkz eDTR or Electronic Daily Time Reporting is a
                  web-based application which enables the workforce and field
                  personnel to send their attendance, leave, and OT requests to
                  their management in real-time.
                </p>
                <button className="btn btn-primary btn-lg">Try the app</button>
              </div>
              <img
                src="./bg.png"
                className="img-fluid"
                width={1500}
                alt="logo"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HeroSection;
