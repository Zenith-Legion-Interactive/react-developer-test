import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Row, Col, Card, Container } from "react-bootstrap";
import Button from "../Button/Button";

import Loader from "../Loader/Loader";

import { useRehydrated } from "../../hooks/useRehydrated";
import { fetchUsers, deleteUser } from "../../features/userSlice";

import { formatTitle } from "../../utils/textFormatter";
import { formatImage } from "../../utils/image";

const Profile = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isRehydrated, listOfUsers] = useRehydrated();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  let { userId } = useParams();

  const back = () => {
    navigate("/users");
  };

  const editProfile = (id) => {
    navigate(`/user/edit/${id}`);
  };

  useEffect(() => {
    if (isRehydrated) {
      if (listOfUsers.length === 0) {
        dispatch(fetchUsers())
          .then((response) => {
            if (response) {
              const getUser = response.payload.find(
                (user) => user.id === userId
              );
              setUser(getUser);
              setLoading(false);
            }
          })
          .catch((error) => {
            setError(error);
            setLoading(false);
          });
      } else {
        const getUser = listOfUsers.find((user) => user.id === userId);
        setUser(getUser);
        setLoading(false);
      }
    }
  }, [userId, dispatch, isRehydrated, listOfUsers]);

  if (loading) return <Loader />;

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container>
      <br />
      <Card className="mb-3">
        <Card.Header>User Information</Card.Header>
        <Card.Body>
          <Row>
            <Col md={4}>
              <img
                src={formatImage(user.picture)}
                alt={`${user.firstName} ${user.lastName}`}
                className="img-fluid rounded-circle"
                width={150}
              />
            </Col>
            <Col md={8}>
              <h5>
                {formatTitle(user.title)} {user.firstName} {user.lastName}
              </h5>
              <p>Email: {user.email}</p>
              <p>Gender: {user.gender}</p>
              <p>
                Date of Birth: {new Date(user.dateOfBirth).toLocaleDateString()}
              </p>
              <p>Phone: {user.phone}</p>
            </Col>
          </Row>
          <Button
            label="Back"
            styleType="info"
            onClick={() => {
              back();
            }}
          />
          <Button
            label="Edit"
            styleType="warning"
            onClick={() => {
              editProfile(user.id);
            }}
          />

          <Button
            label="Delete"
            styleType="danger"
            onClick={() => {
              dispatch(deleteUser({ userId: user.id }));
              navigate("/users");
            }}
          />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;
