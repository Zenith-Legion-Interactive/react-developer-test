import React from "react";
import Counter from "./content/counter/Counter";

const Home = () => {
  return (
    <div>
      <Counter counterId="counter1" />
      {/* <Counter counterId="counter2" /> */}
    </div>
  );
};

export default Home;
