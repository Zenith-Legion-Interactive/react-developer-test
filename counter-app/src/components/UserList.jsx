import React, {useState, useEffect} from "react";
import axios from "axios";
// import CreateNewUser from "./CreateNewUser";
import {Link} from "react-router-dom";
import Button from "./Button";
// import {useGetUserListQuery} from "../api/usersApi";

const API_BASE_URL = "/data";
const APP_ID = "65080fec01538513690ca63e";

// const newUser = {
//   firstName: "John",
//   lastName: "Vigilia",
//   email: "john.vigilia@example.com",
// };

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const limit = 10;
  // const {data: userList, isFetching} = useGetUserListQuery(limit);
  // console.log("userList", userList);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/user`, {
        headers: {"app-id": APP_ID},
        params: {
          limit: 10,
        },
      })
      .then((response) => {
        if (response.data && response.data.data) {
          const userPromises = response.data.data.map((user) => {
            return axios.get(`${API_BASE_URL}/user/${user.id}`, {
              headers: {"app-id": APP_ID},
            });
          });

          // console.log("userPromises", userPromises);
          return Promise.all(userPromises);
        } else {
          console.log("No users found.");
          return [];
        }
      })
      .then((userDetailsResponses) => {
        const updatedUsers = userDetailsResponses.map((res, index) => ({
          ...res.data,
        }));
        setUsers(updatedUsers);
        setLoading(false);
      })
      .catch((error) => {
        const errorMessage = error
          ? error.message
          : "An unknown error occurred";
        console.error("Error fetching users:", errorMessage);
        setError(`Error fetching users: ${errorMessage}`);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>API Integration</h1>
      {error && <p>{error}</p>}
      {loading ? (
        <p>Loading users...</p>
      ) : (
        !error && (
          <ul>
            {users.map((user, index) => (
              <li key={index}>
                {user.firstName} {user.lastName} - {user.email}{" "}
                <Link
                  style={{textDecoration: "none", color: "white"}}
                  to={`/profile/${user.id}`}
                >
                  {" "}
                  <Button styleType="primary">View Profile</Button>
                </Link>
              </li>
            ))}
          </ul>
        )
      )}
    </div>
  );
};

export default UserList;
