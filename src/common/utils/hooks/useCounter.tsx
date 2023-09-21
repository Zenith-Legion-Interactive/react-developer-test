import  { useCallback } from 'react'
import { useGlobalCounter } from './global.state';

const useCounter = () => {

  const [count, setCount] = useGlobalCounter();

	// increase count
	const onIncrement = useCallback(() => {
		setCount(count + 1);
	}, [count, setCount]);

	// decrener count
	const onDecrement = useCallback(() => {
		if (count > 0) setCount(count - 1);
	}, [count, setCount]);

	const onReset = useCallback(() => {
		setCount(0);
	}, []);
	

  return {onIncrement,onDecrement,onReset,count}
}

export default useCounter
