import React from "react";
import Button from "../../Button";
import {useSelector, useDispatch} from "react-redux";
import {
  increment,
  decrement,
  reset,
} from "../../../features/counter/counterSlice";

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
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="my-8 text-center">
        <h1 className="text-3xl font-bold text-slate-600 mb-4 focus:outline-none">
          Simple Counter
        </h1>
        <h1 className="text-6xl text-slate-800 font-bold mb-4 focus:outline-none">
          {count}
        </h1>
        <Button
          // styleType="primary"
          action="increment"
          onClick={handleIncrement}
        >
          Increment
        </Button>
        <Button
          // styleType="danger"
          action="decrement"
          onClick={handleDecrement}
        >
          Decrement
        </Button>
        <Button action="reset" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Counter;
