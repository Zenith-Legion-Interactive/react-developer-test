import React, {useState, useEffect} from "react";
import axios from "axios";
// import CreateNewUser from "./CreateNewUser";
import {Link} from "react-router-dom";
import Button from "../../Button";
// import {useGetUserListQuery} from "../api/usersApi";
import Loading from "../../Loading";

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
      {error && <p className="text-red-500">{error}</p>}
      {loading ? (
        <Loading />
      ) : (
        !error && (
          <>
            <h1 className="text-2xl font-bold mb-4">User List</h1>
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Name</th>
                  <th className="py-3 px-6 text-left">Email</th>
                  <th className="py-3 px-6 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 font-light">
                {users.map((user, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className=" px-4 py-2 flex items-center">
                      <img
                        src={user.picture}
                        alt="User Profile"
                        className="w-10 h-10 rounded-full mr-2"
                      />
                      {user.firstName} {user.lastName}
                    </td>
                    <td className="py-3 px-6 text-left">{user.email}</td>
                    <td className="py-3 px-6 text-left">
                      <Link
                        to={`/profile/${user.id}`}
                        className="rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300"
                      >
                        view profile
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )
      )}
    </div>
  );
};

export default UserList;
