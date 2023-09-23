import { cleanup, fireEvent, prettyDOM, render } from "@testing-library/react";
import Counter from "../Components/Counter";

describe("Counter", () => {
    it("should render the counter component", async () => {
        const { findByTestId } = render(<Counter />);
        const counter = await findByTestId("counter");
        const buttons = await findByTestId("buttons");
        const incrementButton = buttons.firstElementChild;
        const decrementButton = buttons.lastElementChild;

        if (incrementButton) {
            fireEvent.click(incrementButton);
            expect(counter.textContent).toBe("1");
        }

        if (decrementButton) {
            fireEvent.click(decrementButton);
            expect(counter.textContent).toBe("0");
        }
    });

    it("should increment the counter from 0 to 1", async () => {
        const { findByTestId } = render(<Counter />);
        const counter = await findByTestId("counter");
        const buttons = await findByTestId("buttons");
        const incrementButton = buttons.firstElementChild;

        if (incrementButton) {
            fireEvent.click(incrementButton);
            expect(counter.textContent).toBe("1");
        }
    });

    it("should decrement the counter to from 0 to -1", async () => {
        const { findByTestId } = render(<Counter />);
        const counter = await findByTestId("counter");
        const buttons = await findByTestId("buttons");
        const decrementButton = buttons.lastElementChild;

        if (decrementButton) {
            fireEvent.click(decrementButton);
            expect(counter.textContent).toBe("-1");
        }
    });

    it("should reset the counter to 0", async () => {
        const { findByTestId } = render(<Counter />);
        const counter = await findByTestId("counter");
        const resetCounter = await findByTestId("reset-counter");
        const resetCounterButton = resetCounter.lastElementChild;

        if (resetCounterButton) {
            fireEvent.click(resetCounterButton);
            expect(counter.textContent).toBe("0");
        }
    });
});
