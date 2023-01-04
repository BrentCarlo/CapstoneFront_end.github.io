import React from "react";

class NewsLetter extends React.Component {
  render() {
    return (
      <div>
        <section className="bg-primary text-light p-5">
          <div className="container py-5">
            <div className="d-md-flex jsutify-content-between align-items-center">
              <h3 className="mb-3 mb-md-0 py-2">Sign up for Newsletter</h3>
            </div>
            <div className="input-group news-input">
              <input
                type="text"
                className="form-control"
                placeholder="Enter E-mail"
                name=""
              />
              <button className="btn btn-dark btn-lg">Discover</button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default NewsLetter;
