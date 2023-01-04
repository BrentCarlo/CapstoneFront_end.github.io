import React, { useState } from "react";
import { Button, Offcanvas, Image } from "react-bootstrap";
import "./About.css";

function About() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        About
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>About this project</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Image className="profile my-5" src="./brent.jpg" roundedCircle />
          <h2 className="about-head">Brent Carlo Bermejo</h2>
          <p>Web developer in the making</p>
          <p>For mini project 2 presentation</p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default About;
