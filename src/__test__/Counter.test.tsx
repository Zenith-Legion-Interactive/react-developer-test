import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "../components/Counter";
import { useCountStore } from "../store/counterStore";

describe("Counter Component", () => {
  it("renders the counter component with initial count", () => {
    const store = useCountStore();
    render(<Counter store={store} />);

    expect(screen.getByText("Count: 0")).toBeDefined();
  });

  it("increments the count when the Increment button is clicked", () => {
    const store = useCountStore();
    render(<Counter store={store} />);

    fireEvent.click(screen.getByText("Increment"));

    store.incrementCount(); // Call the function

    expect(store.count).toBe(1);
  });

  it("decrements the count when the Decrement button is clicked", () => {
    const store = useCountStore();
    render(<Counter store={store} />);

    fireEvent.click(screen.getByText("Decrement"));

    store.decrementCount();

    expect(store.count).toBe(-1);
  });

  it("resets the count when the Reset button is clicked", () => {
    const store = useCountStore();
    render(<Counter store={store} />);

    fireEvent.click(screen.getByText("Reset"));

    store.resetCount();

    expect(store.count).toBe(0);
  });
});

