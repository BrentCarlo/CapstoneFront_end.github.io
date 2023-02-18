import React from "react";
import UserMenu from "./UserMenu";
import "./UserProfile.css";
import { Container, Row, Col, Image , Card} from "react-bootstrap";
import axios from "axios";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    }

   }

  componentDidMount() {
    axios
      .get(`http://localhost:4000/user_profile?id=${document.cookie.split(';')[0].split('=')[1]}`)
      .then(response => {
        console.log(response)
        this.setState({users : response.data})
      })
        
      .catch((error) => {
        console.log(error);
      });
    }

  render() {
    const { users } = this.state;
    return (
      <div className="bg-light">
        <UserMenu />

        <div className="container d-flex justify-content-center align-items-center min-vh-100 py-5">
          <Container>
            <h1 className="container py-3 my-5 bg-success text-white text-center">Profile</h1>
                <Row>
                   <Col sm>
                   <Image
                     src="./profile.png"
                       className="time-in  my-3 px-5"
                        fluid
                     />
                   </Col>
                   <Col className="" sm>
                    <Card style={{fontSize:"16px"}}
                    border="info" className="">
                      <Card.Body  className="bg-info">Data</Card.Body>
                      {users.length
                        ? users.map((user) =>
                        
                          <div className="text-start container-fluid" key={user.id}>
                              <Card.Body>Employee:<span className="emp">{user.employee}</span></Card.Body>
                              <hr/>
                              <Card.Body>Gender :<span className="emp">{user.gender}</span></Card.Body>
                              <hr/>
                              <Card.Body>Department :<span className="emp">{user.department}</span></Card.Body>
                              <hr/>
                              <Card.Body>Birthdate :<span className="emp">{user.birthdate}</span></Card.Body>
                              <hr/>
                              <Card.Body>Joined on :<span className="emp">{user.joinedOn}</span></Card.Body>
                              <hr/> 
                          </div>
                        )
                        : null}           
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
    );
  }
}

export default UserProfile;
