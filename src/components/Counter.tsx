import React from "react";
import Button from "./Button";

interface CounterProps {
  store: any;
}

const Counter: React.FC<CounterProps> = ({ store }) => {
  const { count, incrementCount, decrementCount, resetCount } = store();

  const increment = () => {
    incrementCount();
  };

  const decrement = () => {
    decrementCount();
  };

  const reset = () => {
    resetCount();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <div>
        <h1>Counter</h1>
        <p data-testid='count-display'>Count: {count}</p>

        <Button
          className='btn-primary'
          onClick={increment}
        >
          Increment
        </Button>

        <Button
          className='btn-secondary'
          onClick={decrement}
        >
          Decrement
        </Button>
        <Button
          className='btn-danger'
          onClick={reset}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Counter;

