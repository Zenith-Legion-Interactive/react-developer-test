import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

import Button from "../Button/Button";
import Loader from "../Loader/Loader";

import { useRehydrated } from "../../hooks/useRehydrated";
import { fetchUsers, deleteUser } from "../../features/userSlice";
import { formatImage } from "../../utils/image";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isRehydrated, listOfUsers] = useRehydrated();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const usersPerPage = 10;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isRehydrated) {
      if (listOfUsers.length === 0) {
        dispatch(fetchUsers())
          .then((response) => {
            if (response) {
              setUsers(response.payload);
              setLoading(false);
            }
          })
          .catch((error) => {
            setError(error);
            setLoading(false);
          });
      } else {
        setUsers(listOfUsers);
        setLoading(false);
      }
    }
  }, [dispatch, isRehydrated, listOfUsers]);

  const newUser = () => {
    navigate("/user/new");
  };

  const viewProfile = (id) => {
    navigate(`/user/${id}`);
  };

  const editProfile = (id) => {
    navigate(`/user/edit/${id}`);
  };

  // Function to handle input change in the search box
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter users based on the search term
  const filteredUsers = users.filter(
    (user) =>
      `${user.firstName} ${user.lastName}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      `${user.phone}`.includes(searchTerm.toLowerCase()) ||
      `${user.email}`.includes(searchTerm.toLowerCase())
  );

  // Calculate the indexes for the users to display on the current page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pagination = Array.from({
    length: Math.ceil(filteredUsers.length / usersPerPage),
  });

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

          <Button label="Add user" styleType="success" onClick={newUser} />
          <Form.Group>
            <br />

            <Form.Control
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </Form.Group>
          <br />

          <Table striped bordered hover size="md">
            <thead>
              <tr>
                <th>Email Address</th>
                <th>Image</th>
                <th>Fullname</th>
                <th>Phone number</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map(
                ({ email, firstName, lastName, picture, phone, id }) => (
                  <tr key={id}>
                    <td>{email}</td>
                    <td>
                      <img
                        src={formatImage(picture)}
                        width="50px"
                        height="50px"
                        alt={picture}
                      />
                    </td>
                    <td>{`${firstName} ${lastName}`}</td>
                    <td>{phone}</td>
                    <td>
                      <Button
                        label="View"
                        styleType="secondary"
                        onClick={() => {
                          viewProfile(id);
                        }}
                      />
                      <Button
                        label="Edit"
                        styleType="primary"
                        onClick={() => {
                          editProfile(id);
                        }}
                      />
                      <Button
                        label="Delete"
                        styleType="danger"
                        onClick={() => {
                          dispatch(deleteUser({ userId: id }));
                          window.location.reload();
                        }}
                      />
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </Table>
          {/* Pagination controls */}
          <ul className="pagination">
            {pagination.map((_, index) => (
              <li
                key={index}
                className={`page-item ${
                  index + 1 === currentPage ? "active" : ""
                }`}
              >
                <p className="page-link" onClick={() => paginate(index + 1)}>
                  {index + 1}
                </p>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default UserList;
