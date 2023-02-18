import React from "react";
import { Container, Row, Col, Card ,Table} from "react-bootstrap";
import "./AdminDash.css";
import AdminNavbar from "./AdminNavbar";
import axios from "axios";

class AdminDash extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/user_profile")
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
      <div>
        <AdminNavbar />
        <div className="container py-5" id="admin-dashboard">
          <Container>
            <h1 className="dashboardHeader my-5 py-3 bg-primary text-center text-white">Dashboard</h1>
          </Container>
          <Container className="dashContent container py-5">
            <Row className="card-content">
              <Col>
                <Card className=" bg-secondary text-white">
                  <Card.Body>Department</Card.Body>
                  <i className="bi bi-building-fill"></i>
                </Card>
              </Col>
              <Col>
                <Card className="bg-warning text-white">
                  <Card.Body>Employees</Card.Body>
                  <i className="bi bi-person-badge"></i>
                </Card>
              </Col>
              <Col>
                <Card className="bg-success text-white">
                  <Card.Body>Active users</Card.Body>
                  <i className="bi bi-people-fill"></i>
                </Card>
              </Col>
            </Row>
            <Card className=" text-white my-5">
              <div className="">
            <Table responsive variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>employee</th>
          <th>gender</th>
          <th>department</th>
          <th>Birthdate</th>
          <th>joined</th>
        </tr>
      </thead>
      {users.length
                        ? users.map((user) =>
                        
                          <tbody className="text-start container-fluid"><tr key={user.id}>
                              <td>{user.userId}</td>
                              <td>{user.employee}</td>
                              <td>{user.gender}</td>
                       
                              <td>{user.department}</td>
                            
                              <td>{user.birthdate}</td>
                              
                              <td>{user.joinedOn}</td>
                              
                              </tr>
                          </tbody>
                        )
                        : null}           
      </Table>
      </div>
            </Card>
          </Container>
        </div>
      </div>
    );
  }
}

export default AdminDash;
