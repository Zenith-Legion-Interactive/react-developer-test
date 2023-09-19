import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Button from "../Button/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Loader from "../Loader/Loader";

import API from "../../utils/API";

const Profile = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  let { userId } = useParams();

  const back = () => {
    navigate("/users");
  };

  useEffect(() => {
    API.get(`/user/${userId}`)
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [userId]);

  if (loading) return <Loader />;

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container>
      <Row>
        <Col>
          <br />
          <h1>Profile</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={2} md={2}>
          <img
            src={user?.picture}
            width="120"
            height="120"
            alt={user?.picture}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={2} md={2}>
          <br />
          <strong>Name:</strong> {user?.firstName} {user?.lastName}
        </Col>
        <Col xs={3} md={3}>
          <br />
          <strong>Email:</strong> {user?.email}
        </Col>
        <Col xs={2} md={2}>
          <br />

          <Button
            label="Back"
            styleType="danger"
            onClick={() => {
              back();
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
