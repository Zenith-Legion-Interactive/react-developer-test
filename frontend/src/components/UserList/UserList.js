import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

import Button from "../Button/Button";
import Loader from "../Loader/Loader";

import { useNavigate } from "react-router-dom";
import API from "../../utils/API";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const request = API.get(`/user`);

    if (request) {
      request
        .then((response) => {
          setUsers(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }
  }, []);

  const viewProfile = (id) => {
    navigate(`/user/${id}`);
  };

  if (loading) return <Loader />;

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container>
      <Row>
        <Col>
          <br />
          <h1>User List</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover size="md">
            <thead>
              <tr>
                <th>User ID</th>
                <th>Image</th>
                <th>First name</th>
                <th>Last name</th>
                <th>View Profile</th>
              </tr>
            </thead>
            <tbody>
              {users.data.map((user) => (
                <tr>
                  <td>{user?.id}</td>
                  <td>
                    <img
                      src={user?.picture}
                      width="50px"
                      height="50px"
                      alt={user?.picture}
                    />
                  </td>
                  <td>{user?.firstName}</td>
                  <td>{user?.lastName}</td>
                  <td>
                    <Button
                      label="View Profile"
                      styleType="secondary"
                      onClick={() => {
                        viewProfile(user?.id);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default UserList;
