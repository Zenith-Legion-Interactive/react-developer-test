import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter component", () => {
  it("renders with initial count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByText("0");
    expect(countElement).toBeInTheDocument();
  });

  it("increments the count when Increment button is clicked", () => {
    render(<Counter />);
    const incrementButton = screen.getByText("Increment");
    fireEvent.click(incrementButton);
    const countElement = screen.getByText("1");
    expect(countElement).toBeInTheDocument();
  });

  it("decrements the count when Decrement button is clicked", () => {
    render(<Counter />);
    const decrementButton = screen.getByText("Decrement");
    fireEvent.click(decrementButton);
    const countElement = screen.getByText("-1");
    expect(countElement).toBeInTheDocument();
  });

  it("resets the count when Reset button is clicked", () => {
    render(<Counter />);
    const incrementButton = screen.getByText("Increment");
    const resetButton = screen.getByText("Reset");

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(resetButton);

    const countElement = screen.getByText("0");
    expect(countElement).toBeInTheDocument();
  });

  it("decrements the count when Decrement button is clicked", () => {
    render(<Counter />);
    const decrementButton = screen.getByText("Decrement");
    fireEvent.click(decrementButton);
    const countElement = screen.getByText("-1");
    expect(countElement).toBeInTheDocument();
  });
});
