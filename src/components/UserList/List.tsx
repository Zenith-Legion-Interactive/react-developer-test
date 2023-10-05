import React, { FunctionComponent, useEffect, useRef } from "react";
import { useUser } from "../../store/user";
import styles from "./styles.module.scss";
import UserItem from "./UserItem";

/**
 * List props
 */
interface Props {
  forceError?: boolean;
}

/**
 * List Component
 */
const List: FunctionComponent<Props> = ({ forceError }) => {
  const { users, fetchUsers } = useUser();

  useEffect(() => {
    fetchUsers({ forceError });
  }, [fetchUsers, forceError]);

  return (
    <>
      {users.error ? (
        <div
          className={`${styles.errorAlert} ${styles.userListError}`}
          data-testid="error-label"
        >
          {users.error}
        </div>
      ) : null}
      {users.isLoading ? (
        <span data-testid="loading-label">Loading...</span>
      ) : null}
      <ul className={styles.listContainer}>
        {users.list.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </>
  );
};

export default List;
