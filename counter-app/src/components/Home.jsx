import React from "react";
import Counter from "./content/Counter";

const Home = () => {
  return (
    <div>
      <h1>App Component</h1>
      <Counter counterId="counter1" />
      <Counter counterId="counter2" />
    </div>
  );
};

export default Home;
