import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Services.css";
import { Card } from "react-bootstrap";

class Services extends React.Component {
  render() {
    return (
      <div>
        <section className="p-5" id="services">
          <div className="container py-5">
            <Card>
              <Card.Body className="bg-primary text-white text-center">
                <h1>Services</h1>
              </Card.Body>
            </Card>

            <div className="row text-center g-4 py-5 ">
              <div className="col-md">
                <div className="card bg-dark text-light p-5">
                  <div className="h1 mb-3">
                    <i className="bi bi-person"></i>
                    <h3 className="card-title mb-3">Workforce</h3>
                    <p className="card-text">
                      Whether your workforce is in the field, at their store
                      assignments, or even at home, they can easily time in and
                      time out using the application.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md">
                <div className="card bg-dark text-light p-5">
                  <div className="h1 mb-3">
                    <i className="bi bi-geo-alt"></i>
                    <h3 className="card-title mb-3">Tracking</h3>
                    <p className="card-text">
                      eDTR provides GPS location, photo-taking feature, and
                      unaltered Telco time to ensure that the attendance of
                      every workforce was done on their assignment.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md">
                <div className="card bg-dark text-light p-5">
                  <div className="h1 mb-3">
                    <i className="bi bi-kanban"></i>
                    <h3 className="card-title mb-3">Management</h3>
                    <p className="card-text">
                      Enable your workforce or disers to report their attendance
                      & trade activities in real-time, whenever, wherever. Send
                      announcements instantly and exchange messages using eDTR!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Services;
