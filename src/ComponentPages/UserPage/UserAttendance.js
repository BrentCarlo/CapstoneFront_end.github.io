import React from "react";
import UserMenu from "./UserMenu";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Modal,
  Card
} from "react-bootstrap";
import "./UserAttendance.css";
import { GOOGLE_API_KEY } from "./apikey";
import Clock from "./Clock";
import axios from "axios";

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
    // this.showModal = this.showModal.bind(this);
    // this.hideModal = this.hideModal.bind(this);
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

  // showModal(e) {
  //   this.setState({ show: true });
  // }

  // hideModal(e) {
  //   this.setState({ show: false });
  // }

  // Send Data

  componentDidMount = () => {
    axios.get('http://localhost:4000/user_attendance')
    .then((response) => {
      console.log(response)
      this.setState({
        users:response.data,
      })

    })
  }

  stampAttendance =(e) => {
    e.preventDefault();

    console.log(e.target.location.value);
    console.log(e.target.remarks.value);
    axios.post('http://localhost:4000/user_attendance',{
      location: e.target.location.value,
      remarks: e.target.location.value,
    


    })
    .then((response) =>{
      this.setState({
        users: [...this.state.users, {
          location: e.target.location.value ,
          remarks: e.target.remarks.value,
          
        }]
      })
    })
  }


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
                <form className="my-5" onSubmit={this.stampAttendance}> 
                  <Clock />
                  <Row className="justify-content-md-center">
                    <Col md="auto">
                      <Image
                        src="../selfie.png"
                        fluid
                        className="image-attendance"
                      />
                      <div className="form-group">
                        <div className="mb-3">
                      <label htmlFor="upload" className="form-label">Upload Selfie</label>
                      <input className="form-control form-control-sm" id="upload" type="file" name="upload" />
                    </div>
                      <label className="form-label" htmlFor="username">
                      Location
                      </label>
                      <input
                        className="form-control"
                        name="location"
                        type="text"
                        id="text"
                        placeholder="Type in your Location"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="password">
                        Remarks
                      </label>
                      <input
                        className="form-control"
                        name="remarks"
                        type="text"
                        id="text"
                        placeholder="sample:(time in / time out)"
                        required
                      />
                    </div>
                    </Col>
                    <Col md="auto" className="">
                       <Image
                        src="../location.png"
                        fluid
                        className="image-attendance"
                      />
                      <p style={{fontSize:'10px'}} className="address">Address : {this.state.userAddress}</p>
                      <Button
                        className="btn btn-primary"
                        onClick={this.getLocation}
                        
                      >
                        Verify Location
                      </Button>
                      </Col>
                      <Col>
                      <div style={{height:'300px' ,overflow:"scroll" , width:'400px'}}>
                      <h3>Itenerary</h3>
                      {users.length
                        ? users.map((user) =>
                        
                          <div className="text-start container-fluid" key={user.id}>
                            <ul style={{fontWeight:"bold"}}   >
                              <li>Location:{user.location}</li>
                              <li>Verified Location :{user.verifylocation}</li>
                              <li>Remarks :{user.remarks}</li>
                            </ul>
                          </div>
                        )
                        : null}
                        </div>           
                    </Col>
                     </Row>
                     <Row>
                      <Col md='auto'>
                     <Button type="submit" className="btn btn__primary">
                       Stamp Attendance
                     </Button>
                     </Col>
                     </Row>
                </form>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default UserAttendance;
