import React, { FunctionComponent, useMemo } from "react";
import { UserData, useUser } from "../../store/user";
import { User } from "../../types/User";
import { Link } from "react-router-dom";

/**
 * UserItem props
 */
interface Props {
  user: User;
}

/**
 * UserItem Component
 */
const UserItem: FunctionComponent<Props> = ({ user }) => {
  const { userData } = useUser();
  const userLoadingData = useMemo<UserData | undefined>(
    () => userData[user.id],
    [user.id, userData]
  );

  const cUser = useMemo(() => {
    if (!userLoadingData?.data) return user;
    return userLoadingData?.data;
  }, [user, userLoadingData?.data]);

  const preview = useMemo(() => {
    if (userLoadingData?.isLoading) {
      return "Loading...";
    }
    return cUser.email || "N/A";
  }, [cUser.email, userLoadingData?.isLoading]);

  return (
    <li>
      <Link to={`/user/${cUser.id}`} state={cUser}>
        {`${cUser.firstName} ${cUser.lastName} - ${preview}`}
      </Link>
    </li>
  );
};

export default UserItem;
