import React from "react";
import Button from "./Button";
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement, reset} from "../features/counter/counterSlice";

const Counter = ({counterId}) => {
  const count = useSelector((state) => state.counter.counters[counterId] || 0);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment({counterId}));
  };

  const handleDecrement = () => {
    dispatch(decrement({counterId}));
  };

  const handleReset = () => {
    dispatch(reset({counterId}));
  };

  return (
    <div>
      <h3>Counter: {count}</h3>
      <Button styleType="primary" onClick={handleIncrement}>
        Increment
      </Button>
      <Button styleType="danger" onClick={handleDecrement}>
        Decrement
      </Button>
      <Button onClick={handleReset}>Reset</Button>
    </div>
  );
};

export default Counter;
