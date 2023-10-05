import {
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../../helpers/axiosInstance";
import { User } from "../../types/User";
import helpers from "../../helpers";
import Button from "../Button";
import { UserData, useUser } from "../../store/user";

/**
 * Profile props
 */
interface Props {}

/**
 * Profile Component
 */
const Profile: FunctionComponent<Props> = () => {
  const { userId } = useParams();
  const { userData, fetchUser } = useUser();

  const cUserData = useMemo<UserData | undefined>(() => {
    if (userId) return userData[userId];
  }, [userData, userId]);

  const user = useMemo(() => cUserData?.data, [cUserData?.data]);

  useEffect(() => {
    if (userId) fetchUser(userId);
  }, [fetchUser, userId]);

  return (
    <>
      <Link to="/user">
        <Button color="warning">Back</Button>
      </Link>
      <br />
      <br />
      {cUserData?.isLoading ? `Loading...` : undefined}
      {cUserData?.data ? (
        <table border={1} cellPadding={10}>
          <tr>
            <td colSpan={2}>
              <img src={user?.picture} />
            </td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{`${user?.firstName} ${user?.lastName}`}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{`${user?.email || "N/A"}`}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{`${user?.gender || "N/A"}`}</td>
          </tr>
        </table>
      ) : null}
    </>
  );
};

export default Profile;
