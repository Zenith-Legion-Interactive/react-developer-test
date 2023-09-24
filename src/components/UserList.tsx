import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Define the API URL
    const apiUrl = "https://dummyapi.io/data/v1/user";
    const apiKey = "65080fec01538513690ca63e";
    fetch(apiUrl, {
      headers: {
        "app-id": apiKey,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2>User List</h2>
      {users.map((user) => (
        <div key={user?.id}>
          <a
            onClick={() => {
              navigate(`/user/${user.id}`);
            }}
            style={{
              textDecoration: "underline",
              color: "blue",
              cursor: "pointer",
            }}
          >
            Name: {user.firstName} {user.lastName}
          </a>
          <br />
          Email: {user.email ?? "Not available"}
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}

export default UserList;

