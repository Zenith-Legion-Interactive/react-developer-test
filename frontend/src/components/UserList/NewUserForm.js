import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { addUser } from "../../features/userSlice";
import { generateId } from "../../utils/generateId";
import { generateRandomImage } from "../../utils/image";

const NewUserForm = () => {
  const [newUser, setNewUser] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const id = generateId(24);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
      id,
      picture: generateRandomImage(),
      title:
        newUser.gender !== ""
          ? newUser.gender === "male"
            ? "mr"
            : "miss"
          : "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(newUser));
    navigate("/users");
  };

  return (
    <Container className="px-2">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <br />
          <Row>
            <Col xs={12} lg={4} md={6}>
              <Form.Label>Firstname:</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={newUser.firstName}
                onChange={handleChange}
              />
            </Col>

            <Col xs={12} lg={4} md={6}>
              <Form.Label>Lastname:</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={newUser.lastName}
                onChange={handleChange}
              />
            </Col>
            <Col xs={12} lg={4} md={6}>
              <Form.Label>Gender</Form.Label>
              <Form.Select
                size="lg"
                name="gender"
                onChange={handleChange}
                value={newUser.gender}
              >
                <option>Open this select menu</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Form.Select>
            </Col>
          </Row>

          <br />
          <Row>
            <Col xs={12} lg={4} md={6}>
              <Form.Label>Email address:</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={newUser.email}
                onChange={handleChange}
              />
            </Col>

            <Col xs={12} lg={4} md={6}>
              <Form.Label>Phone number:</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={newUser.phone}
                onChange={handleChange}
              />
            </Col>

            <Col xs={12} lg={4} md={6}>
              <Form.Label>Date of Birth:</Form.Label>
              <br />
              <DatePicker
                name="dateOfBirth"
                selected={newUser.dateOfBirth}
                onChange={(value) => {
                  setNewUser({
                    ...newUser,
                    dateOfBirth: value,
                  });
                }}
                dateFormat="MM/dd/yyyy" // Customize the date format as needed
                isClearable // Adds a clear button
                showYearDropdown
                scrollableYearDropdown
                placeholderText="Click to select a date"
              />
            </Col>
          </Row>
        </Form.Group>

        <br />
        <Button variant="success" type="submit">
          Create user
        </Button>
      </Form>
    </Container>
  );
};

export default NewUserForm;
