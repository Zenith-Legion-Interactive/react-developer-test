import React, { FunctionComponent } from "react";
import Counter from "./components/Counter";
import styles from "./app.module.scss";
import UserList from "./components/UserList";

/**
 * App props
 */
interface Props {}

/**
 * App Component
 */
const App: FunctionComponent<Props> = () => {
  return (
    <div className={styles.container}>
      <Counter />
      <Counter />
      <UserList />
    </div>
  );
};

export default App;
