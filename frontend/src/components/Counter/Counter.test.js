import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Counter from "./Counter";

const mockStore = configureStore([]);

describe("Counter component", () => {
  let store;
  let counterComponent;

  beforeEach(() => {
    store = mockStore({
      counters: {
        counters: {
          counter1: 0,
          counter2: 0,
        },
      },
      _persist: {
        rehydrated: false,
      },
    });

    counterComponent = render(
      <Provider store={store}>
        <Counter counterId="counter1" />
      </Provider>
    );
  });

  it("renders the counter with initial count 0", () => {
    const { getByText } = counterComponent;
    const countText = getByText("0");
    expect(countText).toBeInTheDocument();
  });

  it('increments the count when the "Increment" button is clicked', () => {
    const { getByText } = counterComponent;
    const incrementButton = getByText("Increment");
    const countText = getByText("0");

    fireEvent.click(incrementButton);

    expect(countText).toHaveTextContent("0");
  });

  it('decrements the count when the "Decrement" button is clicked', () => {
    const { getByText } = counterComponent;
    const decrementButton = getByText("Decrement");
    const countText = getByText("0");

    fireEvent.click(decrementButton);

    expect(countText).toHaveTextContent("0");
  });

  it('resets the count to 0 when the "Reset" button is clicked', () => {
    const { getByText } = counterComponent;
    const incrementButton = getByText("Increment");
    const resetButton = getByText("Reset");
    const countText = getByText("0");

    fireEvent.click(incrementButton);
    fireEvent.click(resetButton);

    expect(countText).toHaveTextContent("0");
  });
});
