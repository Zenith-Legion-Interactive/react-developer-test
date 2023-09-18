import {  useState,useCallback } from 'react';
import './Counter.css'

function Counter() {


	const [count, setCount] = useState<number>(0);

  // increase count
  const onIncrement = useCallback(() => {
		setCount(count + 1);
	}, [count]);

// decrener count
  const onDecrement = useCallback(() => {
		if(count > 0) setCount(count - 1);
	}, [count]);

	const onReset = useCallback(() => {
		setCount(0);
	}, []);
	


  return (
		<div className='grid-container'>
			<button onClick={onDecrement} className='btn'>
				Decrement
			</button>
			<p className='p-lg'>{count}</p>
			<button onClick={onIncrement} className='btn'>
				Increment
			</button>
			<button onClick={onReset} className='btn grid-align'>
				Reset
			</button>
		</div>
	);
}

export default Counter
