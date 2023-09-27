import React from "react";
import Button from "../Button";
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement, reset} from "../../features/counter/counterSlice";

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
      <div className="">
        <h1>Simple Counter</h1>
        <h3 className="text-3xl font-bold underline">Counter: {count}</h3>
        <Button styleType="primary" onClick={handleIncrement}>
          Increment
        </Button>
        <Button styleType="danger" onClick={handleDecrement}>
          Decrement
        </Button>
        <Button onClick={handleReset}>Reset</Button>
      </div>
    </div>
  );
};

export default Counter;
