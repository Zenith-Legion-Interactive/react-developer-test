import React, { FunctionComponent, useCallback, useState } from "react";
import styles from "./styles.module.scss";
import Button from "../Button";

/**
 * Counter props
 */
interface Props {}

/**
 * Counter Component
 */
const Counter: FunctionComponent<Props> = ({ ...props }) => {
  const [value, setValue] = useState(0);

  const decrement = useCallback(
    () => setValue((val) => (val > 0 ? (val -= 1) : 0)),
    []
  );
  const decrementTen = useCallback(
    () => setValue((val) => (val > 10 ? (val -= 10) : 0)),
    []
  );
  const increment = useCallback(() => setValue((val) => (val += 1)), []);
  const incrementTen = useCallback(() => setValue((val) => (val += 10)), []);
  const reset = useCallback(() => setValue(0), []);

  return (
    <div className={styles.container}>
      <Button
        onClick={decrementTen}
        color="secondary"
        data-testid="btn-decrement-ten"
      >
        Decrement by 10
      </Button>
      <Button onClick={decrement} data-testid="btn-decrement">
        Decrement
      </Button>
      <span className={styles.counterLabel} data-testid="counter-label">
        {value}
      </span>
      <Button onClick={increment} color="warning" data-testid="btn-increment">
        Increment
      </Button>
      <Button
        onClick={incrementTen}
        color="info"
        data-testid="btn-increment-ten"
      >
        Increment by 10
      </Button>
      <Button color="danger" onClick={reset}>
        Reset
      </Button>
    </div>
  );
};

export default Counter;
