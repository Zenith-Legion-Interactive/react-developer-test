import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import Button from "../../Button";
import {Link} from "react-router-dom";
import Loading from "../../Loading";

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

    console.log(user);
  }, [userId]);

  const formatDateOfBirth = (dateOfBirth) => {
    const options = {year: "numeric", month: "long", day: "numeric"};
    return new Date(dateOfBirth).toLocaleDateString("en-US", options);
  };

  return (
    <>
      {user ? (
        <div className="max-w-md mx-auto md:max-w-2xl mt-20 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl p-8">
          <div className="flex flex-col items-center">
            <div className="relative inline-block">
              {user && (
                <img
                  style={{width: "120px", height: "120px", marginTop: "-60px"}}
                  src={user.picture}
                  alt="User Profile"
                  className="shadow-xl rounded-full align-middle border-none"
                />
              )}
            </div>
            <div className="mt-4 text-center">
              {user && (
                <>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    {user.firstName} {user.lastName}
                  </h3>
                  <div className="text-sm text-slate-500">
                    <i className="fas fa-map-marker-alt mr-2 opacity-75"></i>
                    {user.location.city}, {user.location.state},{" "}
                    {user.location.country}
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="mt-6 py-6 border-t border-slate-200 text-center">
            <div className="flex flex-col items-center">
              <div className="mt-6">
                <p className="text-sm text-slate-700 mb-2">
                  <strong>Email:</strong> {user.email}
                </p>
                <p className="text-sm text-slate-700 mb-2">
                  <strong>Gender:</strong> {user.gender}
                </p>
                <p className="text-sm text-slate-700 mb-2">
                  <strong>Date of Birth:</strong>{" "}
                  {formatDateOfBirth(user.dateOfBirth)}
                </p>
                <p className="text-sm text-slate-700 mb-2">
                  <strong>Phone:</strong> {user.phone}
                </p>
                <p className="text-sm text-slate-700 mb-2">
                  <strong>Address:</strong> {user.address}
                </p>
              </div>
              <Link
                to={`/users`}
                className="mt-4 text-sm text-blue-600 hover:text-blue-800"
              >
                Go Back
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Profile;
