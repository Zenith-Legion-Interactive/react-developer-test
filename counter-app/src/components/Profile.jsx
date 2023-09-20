import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import Button from "./Button";
import {Link} from "react-router-dom";

const API_BASE_URL = "/data";
const APP_ID = "65080fec01538513690ca63e";

const Profile = () => {
  const {userId} = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/user/${userId}`, {
        headers: {"app-id": APP_ID},
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user:", error.message);
      });
  }, [userId]);

  const formatDateOfBirth = (dateOfBirth) => {
    const options = {year: "numeric", month: "long", day: "numeric"};
    return new Date(dateOfBirth).toLocaleDateString("en-US", options);
  };

  return (
    <div>
      <h2>User Profile</h2>
      {user ? (
        <div>
          <img src={user.picture} alt="User Profile" />
          <p>
            <strong>name: </strong>
            {user.title} {user.firstName} {user.lastName} <br />
            <strong>email:</strong> {user.email} <br />
            <strong>gender:</strong> {user.gender} <br />
            <strong>date of birth:</strong>{" "}
            {formatDateOfBirth(user.dateOfBirth)} <br />
            <strong>phone:</strong> {user.phone} <br />
            <strong>address:</strong> {user.location.street}{" "}
            {user.location.state} {user.location.city} {user.location.state}
            <br />
          </p>

          <Link style={{textDecoration: "none", color: "white"}} to={`/users`}>
            <Button styleType="danger">Back</Button>
          </Link>
        </div>
      ) : (
        <p>Loading user profile...</p>
      )}
    </div>
  );
};

export default Profile;
