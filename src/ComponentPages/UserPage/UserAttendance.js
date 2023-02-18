import React from "react";
import UserMenu from "./UserMenu";
import {
  Container,
  Row,
  Col,
  Image,
  Form,
  Button,
  Modal,
} from "react-bootstrap";
import "./UserAttendance.css";
import { GOOGLE_API_KEY } from "./apikey";
import Clock from "./Clock";

class UserAttendance extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      userAddress: "",
      show: false,
      users: [],
    };

    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
    this.getAddress = this.getAddress.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  // Get Address

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.getCoordinates,
        this.handleLocationError
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  getCoordinates(position) {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
    this.getAddress(position);
  }

  getAddress() {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&sensor=false&key=${GOOGLE_API_KEY}`
    )
      .then(response => response.json())
      .then(response => { console.log(response)
        this.setState({
          userAddress: response.results[5].formatted_address,
        })
  })
  }

  handleLocationError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
      default:
        alert("An unknown error occurred.");
    }
  }

  // Modal confirmation

  showModal(e) {
    this.setState({ show: true });
  }

  hideModal(e) {
    this.setState({ show: false });
  }

  // Send Data

  // stampAttendance(e) {
  //   e.preventDefault();

  // componentDidMount() {
  //   fetch("`http://localhost:4000/user_attendance")
  //     .then((response) => {
  //       console.log(response);
  //       this.setState({ users: response.data });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  render() {
    const { users } = this.state;
    return (
      <div>
        <UserMenu />

        <div className="container-fluid  py-5" id="user-attendance">
          <Container>
            <div className="">
              <div className="container py-3">
              <h1 className="container py-3 my-5 bg-success text-white text-center">Attendance</h1>
              </div>
              <div
                className="container container-fluid  px-5 py-5"
                id="form-attendance"
              >
                <form className="my-5">
                  <Clock />
                  <Row className="justify-content-md-center">
                    <Col md="auto">
                      <Image
                        src="../selfie.png"
                        fluid
                        className="image-attendance"
                      />
                      <Form.Group controlId="formFileLg" className="mb-3">
                        <Form.Label>Upload Selfie</Form.Label>
                        <Form.Control type="file" size="sm" />
                      </Form.Group>
                    </Col>
                    <Col md="auto" className="my-3">
                      <Form.Select aria-label="Default select example">
                        <option>Check in Location</option>
                        <option value="1">Home</option>
                        <option value="2">Office</option>
                        <option value="3">Store</option>
                      </Form.Select>
                    </Col>
                    <Col md="auto" className="my-3">
                      <Button
                        className="btn btn-primary"
                        onClick={this.getLocation}
                      >
                        Verify Location
                      </Button>
                      <p>Address : {this.state.userAddress}</p>
                    </Col>
                    </Row>
                    <Row md='auto'>
                    <Col >
                      <Modal show={this.state.show} centered>
                        <Modal.Header>
                          <Modal.Title>Notice</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Stamp Attendance?</Modal.Body>
                        <Modal.Footer>
                          <Button
                            onClick={this.stampAttendance}
                            variant="primary"
                            size="lg"
                            active
                          >
                            Yes
                          </Button>
                          <Button
                            onClick={this.hideModal}
                            variant="secondary"
                            size="lg"
                            active
                          >
                            Exit
                          </Button>
                        </Modal.Footer>
                      </Modal>
                      <Button variant="primary" onClick={this.showModal}>
                        Stamp your attendance
                      </Button>
                    </Col>
                    </Row>
                </form>
                <div className="">
                 <h3>Itenerary</h3>
                  {users.length
                    ? users.map((users) => (
                        <div key={users.id}>{users.userid}</div>
                      ))
                    : null}
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default UserAttendance;
