import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { editUser } from "../../features/userSlice";
import { formatImage } from "../../utils/image";

const EditUserForm = () => {
  let { userId } = useParams();

  const [editedUser, setEditedUser] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const users = useSelector((state) => state?.users?.users || []);

  useEffect(() => {
    if (userId) {
      const user = users.find((user) => user.id === userId);
      setEditedUser(user);
    }
  }, [userId, users]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({
      ...editedUser,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      editUser({
        userId,
        updatedUserData: editedUser,
      })
    );

    goBack();
  };

  const goBack = () => {
    navigate("/users");
  };

  const formatedDate = editedUser.dateOfBirth
    ? new Date(editedUser.dateOfBirth)
    : new Date();

  return (
    <Container className="px-2">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <br />
          <Row>
            <Col md={4}>
              <img
                src={formatImage(editedUser.picture)}
                alt={`${editedUser.firstName} ${editedUser.lastName}`}
                className="img-fluid"
                width={150}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={12} lg={4} md={6}>
              <Form.Label>Firstname:</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={editedUser.firstName}
                onChange={handleChange}
              />
            </Col>

            <Col xs={12} lg={4} md={6}>
              <Form.Label>Lastname:</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={editedUser.lastName}
                onChange={handleChange}
              />
            </Col>
            <Col xs={12} lg={4} md={6}>
              <Form.Label>Gender</Form.Label>
              <Form.Select
                size="lg"
                name="gender"
                onChange={handleChange}
                value={editedUser.gender}
                disabled={true}
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
                value={editedUser.email}
                onChange={handleChange}
              />
            </Col>

            <Col xs={12} lg={4} md={6}>
              <Form.Label>Phone number:</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={editedUser.phone}
                onChange={handleChange}
              />
            </Col>

            <Col xs={12} lg={4} md={6}>
              <Form.Label>Date of Birth:</Form.Label>
              <br />
              <DatePicker
                name="dateOfBirth"
                selected={formatedDate}
                onChange={(value) => {
                  setEditedUser({
                    ...editUser,
                    dateOfBirth: value,
                  });
                }}
                dateFormat="MM/dd/yyyy" // Customize the date format as needed
                isClearable // Adds a clear button
                showYearDropdown
                scrollableYearDropdown
                placeholderText="Click to select a date"
                disabled={true}
              />
            </Col>
          </Row>
        </Form.Group>

        <br />
        <Button variant="success" type="submit">
          Save Changes
        </Button>
        <Button
          variant="danger"
          type="submit"
          onClick={() => {
            goBack();
          }}
        >
          Back
        </Button>
      </Form>
    </Container>
  );
};

export default EditUserForm;
