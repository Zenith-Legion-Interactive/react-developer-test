import React, { createContext, useState } from 'react';

// Create a context for the count value and functions
export const CounterContext = createContext<{
	count: number;
	onIncrement: () => void;
	onDecrement: () => void;
	onReset: () => void;
} | null>(null);

type ChildrenProps = {
	children: React.ReactNode;
};

const CounterProvider = ({ children }: ChildrenProps) => {
	const [count, setCount] = useState<number>(0);

	const increment = () => {
		setCount((prevCount) => prevCount + 1);
	};

	const decrement = () => {
		if(count > 0) setCount((prevCount) => prevCount - 1);
	};

	const reset = () => {
		setCount(0);
	};

	const contextValue = {
		count,
		onIncrement: increment,
		onDecrement: decrement,
		onReset: reset,
	};

	return <CounterContext.Provider value={contextValue}>{children}</CounterContext.Provider>;
};

export default CounterProvider;
