import React, { useState } from "react";
import Button from "./Button";

const Counter: React.FC = (): JSX.Element => {
    const [counter, setCounter] = useState<number>(0);

    return (
        <React.Fragment>
            <div className="flex flex-col items-center border border-1 space-y-6 rounded-lg p-8 w-2/5 mx-auto">
                <div data-testid="counter" className="text-6xl">
                    {counter}
                </div>
                <div data-testid="buttons" className="flex justify-center space-x-6">
                    <Button style="primary" text="Increment" onClick={() => setCounter((counter) => counter + 1)} />
                    <Button style="primary" text="Decrement" onClick={() => setCounter((counter) => counter - 1)} />
                </div>
                <div data-testid="reset-counter">
                    <Button style="danger" text="Reset" onClick={() => setCounter(0)} />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Counter;
