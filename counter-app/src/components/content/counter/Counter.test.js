import React from "react";
import {render, fireEvent, screen} from "@testing-library/react";
import Counter from "./Counter";

test("increments the counter", () => {
  render(<Counter />);
  const incrementButton = screen.getByText("Increment");

  // Find the count display
  const countDisplay = screen.getByText("Counter: 0");

  fireEvent.click(incrementButton);

  // Extract the count from the count display
  const count = parseInt(countDisplay.textContent.split(" ")[1]);

  expect(count).toBe(1);
});

test("decrements the counter", () => {
  render(<Counter />);
  const decrementButton = screen.getByText("Decrement");

  const countDisplay = screen.getByText("Counter: 0");

  fireEvent.click(decrementButton);

  const count = parseInt(countDisplay.textContent.split(" ")[1]);

  expect(count).toBe(-1);
});
