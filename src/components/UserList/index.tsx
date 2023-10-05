import { FunctionComponent, useCallback, useEffect } from "react";
import { useUser } from "../../store/user";
import Button from "../Button";
import { Link, useLocation } from "react-router-dom";
import List from "./List";

/**
 * UserList props
 */
interface Props {}

/**
 * UserList Component
 */
const UserList: FunctionComponent<Props> = () => {
  const { users, fetchUser } = useUser();
  const location = useLocation();

  const loadAllEmail = useCallback(() => {
    (users?.list || []).forEach((user) => {
      fetchUser(user.id);
    });
  }, [fetchUser, users?.list]);

  return (
    <div>
      {location.pathname !== "/" ? (
        <>
          <Link to="/">
            <Button color="secondary">Go Home</Button>
          </Link>
          <br />
        </>
      ) : undefined}
      <List />
      <Button onClick={loadAllEmail}>Load all email</Button>
    </div>
  );
};

export default UserList;
