import React from "react";
import "./Contact.css";
import { Button, Col, Row, Container, Form, Image } from "react-bootstrap";
class Contact extends React.Component {
  render() {
    return (
      <div className="">
        <section className="p-3" id="contact">
          <div className="container py-5">
            <div className="row text-center g-4">
              <div className="col-md">
                <div className="card-contact bg-primary text-light p-2">
                  <div className="h1 mb-3">
                    <h2 className="card-title mb-3 mt-4">Contact Us</h2>
                  </div>
                </div>
              </div>
            </div>
            <Container className="py-5">
              <Row>
                <Col>
                  <Image
                    src="https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-12860.jpg?w=2000"
                    fluid
                  />
                </Col>
                <Col>
                  <h3>Get the latest business updates & news</h3>
                  <p className="text-contact">
                    <i>
                      Share your email here and be the first to hear about our
                      new services, industry insights, news and more
                    </i>
                  </p>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                      <Form.Label>Enter your name</Form.Label>
                      <Form.Control type="text" placeholder="Your name here" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicNumber">
                      <Form.Label>Mobile #</Form.Label>
                      <Form.Control type="number" placeholder="09XXXXXXXXX" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                  <Container className="icons py-5 h1 mb-3 md-flex">
                    <a href="https://www.facebook.com/brentcarlo.bermejo">
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a href="mailto:someone@example.com">
                      <i class="bi bi-envelope"></i>
                    </a>
                    <a href="https://github.com/BrentCarlo">
                      <i class="bi bi-github"></i>
                    </a>
                  </Container>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
