// eslint-disable-next-line no-unused-vars
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../components/Counter";

describe("Counter", () => {
  it("Increment counter", () => {
    render(<Counter />);
    const incrementBtn = screen.getByTestId("btn-increment");
    fireEvent(
      incrementBtn,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(screen.getByTestId("counter-label").textContent).equals("1");
  });
  it("Decrement counter", () => {
    render(<Counter />);
    const incrementBtn = screen.getByTestId("btn-increment");
    fireEvent(
      incrementBtn,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(screen.getByTestId("counter-label").textContent).equals("1");
    const decrementBtn = screen.getByTestId("btn-decrement");
    fireEvent(
      decrementBtn,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(screen.getByTestId("counter-label").textContent).equals("0");
  });
  it("Increment counter by ten", () => {
    render(<Counter />);
    expect(screen.getByTestId("counter-label")).toBeInTheDocument();
    expect(screen.getByTestId("counter-label").textContent).equals("0");
    const incrementBtn = screen.getByTestId("btn-increment-ten");
    fireEvent(
      incrementBtn,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(screen.getByTestId("counter-label").textContent).equals("10");
  });
  it("Decrement counter by ten", () => {
    render(<Counter />);
    expect(screen.getByTestId("counter-label")).toBeInTheDocument();
    expect(screen.getByTestId("counter-label").textContent).equals("0");
    const incrementBtn = screen.getByTestId("btn-increment-ten");
    fireEvent(
      incrementBtn,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(screen.getByTestId("counter-label").textContent).equals("10");
    const decrementBtn = screen.getByTestId("btn-decrement-ten");
    fireEvent(
      decrementBtn,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(screen.getByTestId("counter-label").textContent).equals("0");
  });
});
