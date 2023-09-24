import { useState, useEffect } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface UserProfileProps {
  id: string;
}

function Profile(props: UserProfileProps) {
  const { id } = props;
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Define the API URL
    const apiUrl = `https://dummyapi.io/data/v1/user/${id}`;
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
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <h2>User Profile</h2>
        <p>
          Name: {user.firstName} {user.lastName}
          <br />
          Email: {user.email}
        </p>
        <Button
          className='btn-primary'
          onClick={() => {
            navigate("/users");
          }}
        >
          Back to list
        </Button>
      </div>
    </div>
  );
}

export default Profile;

