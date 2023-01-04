import React, { useState } from "react";
import "./EmployeeManage.css";
import AdminSidebar from "./AdminSidebar";
import { Container, Button, Col, Row, Form } from "react-bootstrap";

const EmployeeManage = () => {
  // Toggle Add Employee
  const useToggle = (initialState) => {
    const [toggleValue, setToggleValue] = useState(initialState);

    const toggler = () => {
      setToggleValue(!toggleValue);
    };
    return [toggleValue, toggler];
  };

  const [toggle, setToggle] = useToggle();

  // Add Data on Table
  var selectedRow = null;
  const onFormSubmit = (event) => {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow === null) {
      inserNewRecord(formData);
    } else {
      updateRecord(formData);
    }
    resetForm();
  };

  // Retrived data
  const readFormData = () => {
    var formData = {};
    formData["employeeId"] = document.getElementById("employeeId").value;
    formData["firstName"] = document.getElementById("firstName").value;
    formData["lastName"] = document.getElementById("lastName").value;
    formData["age"] = document.getElementById("age").value;
    formData["dateOfBirth"] = document.getElementById("dateOfBirth").value;
    formData["dateHired"] = document.getElementById("dateHired").value;
    formData["upload"] = document.getElementById("image").value;
    return formData;
  };

  // Insert data
  const inserNewRecord = (data) => {
    var table = document
      .getElementById("storeList")
      .getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.employeeId;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.firstName;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.lastName;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.age;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.dateOfBirth;
    var cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.dateHired;
    var cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.image;
    var cell8 = newRow.insertCell(7);
    cell8.innerHTML = `<button onClick={this.onEdit}>Edit</button> <button onClick={this.onDelete}>Delete</button`;
  };

  // Edit data
  const onEdit = (formData) => {
    selectedRow = formData.parentElement.parentElement;
    document.getElementById("employeeId").value =
      selectedRow.cells[0].innerHTML;
    document.getElementBtId("firstName").value = selectedRow.cells[1].innerHTML;
    document.getElementBtId("lastName").value = selectedRow.cells[2].innerHTML;
    document.getElementBtId("age").value = selectedRow.cells[3].innerHTML;
    document.getElementBtId("dateOfBirth").value =
      selectedRow.cells[4].innerHTML;
    document.getElementBtId("dateHired").value = selectedRow.cells[5].innerHTML;
    document.getElementBtId("image").value = selectedRow.cells[6].innerHTML;
  };

  const updateRecord = (formData) => {
    selectedRow.cells[0].innerHTML = formData.employeeId;
    selectedRow.cells[1].innerHTML = formData.firstName;
    selectedRow.cells[2].innerHTML = formData.lastName;
    selectedRow.cells[3].innerHTML = formData.age;
    selectedRow.cells[4].innerHTML = formData.dateOfBirth;
    selectedRow.cells[5].innerHTML = formData.dateHired;
    selectedRow.cells[6].innerHTML = formData.image;
  };

  // Delete the data
  const onDelete = (td) => {
    var row;
    var confirmed;
    if (confirmed("Do you want to delete this record?")) {
      row = td.parentElement.parentElement;
      document.getElementById("storelist").deleteRow(row.rowIndex);
    }
    resetForm();
  };

  const resetForm = () => {
    document.getElementById("employeeId").value = "";
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("age").value = "";
    document.getElementById("dateOfBirth").value = "";
    document.getElementById("dateHired").value = "";
    document.getElementById("image").value = "";
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        <AdminSidebar />
      </div>
      <Container
        className="border-manage my-5 bg-light variant-light container-fluid"
        id="manage"
      >
        <Row>
          <Col className="px-3">
            <h3 className="p-title py-5 ">Employee</h3>
          </Col>
          <Row className="add">
            <Col>
              <Button className="btn-add" onClick={setToggle}>
                {" "}
                <i className="bi bi-person-add"></i> Add New Employee
              </Button>
            </Col>
            {toggle && (
              <Container id="add-employee" className="py-3">
                <form autoComplete="off" onSubmit={onFormSubmit}>
                  <Row className="mb-3 ">
                    <Form.Group as={Col}>
                      <Form.Label>Employee Id</Form.Label>
                      <Form.Control
                        name="employeeId"
                        id="employeeId"
                        type="text"
                        placeholder="Enter Employee Number"
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        name="firstName"
                        id="firstName"
                        type="text"
                        placeholder="Enter First Name"
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        name="lastName"
                        id="lastName"
                        type="text"
                        placeholder="Enter Last Name"
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3 ">
                    <Form.Group as={Col}>
                      <Form.Label>Age</Form.Label>
                      <Form.Control name="age" id="age" placeholder="Age" />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Date of Birth</Form.Label>
                      <Form.Control
                        name="dateOfBirth"
                        id="dateOfBirth"
                        type="date"
                        placeholder=""
                        style={{ cursor: "pointer" }}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3 ">
                    <Form.Group as={Col}>
                      <Form.Label>Date Hired</Form.Label>
                      <Form.Control
                        name="dateHired"
                        id="dateHired"
                        type="date"
                        placeholder=""
                        style={{ cursor: "pointer" }}
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Upload Image</Form.Label>
                      <Form.Control
                        name="image"
                        id="image"
                        type="file"
                        placeholder=""
                        img
                        src="file"
                      />
                    </Form.Group>
                  </Row>
                  <Button
                    className="my-3w mx-3"
                    variant="success"
                    type="submit"
                  >
                    Add Details
                  </Button>
                  <Button className="my-3w" variant="secondary" type="reset">
                    Reset
                  </Button>
                </form>
              </Container>
            )}
          </Row>
        </Row>
        <Row className="data-table py-3">
          <div className="table container ">
            <p className="data-table  my-3">Data Tables Employee</p>
            <Container style={{ height: "150px", overflow: "auto" }}>
              <table
                responsive
                bordered
                hover
                size="sm"
                className=""
                id="storeList"
              >
                <thead>
                  <tr>
                    <th>Id no.</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Date of Birth</th>
                    <th>Date Hired</th>
                    <th>Image</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </Container>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default EmployeeManage;
