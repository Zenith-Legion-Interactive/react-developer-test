import {  useState,useCallback } from 'react';
import '../common/styles/Counter.css';
import IButton from '../common/components/IButton';

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
			<IButton data-testid='decrement' onClick={onDecrement} label='Decrement' />
			<p className='p-lg' data-testid='display'>
				{count}
			</p>
			<IButton data-testid='increment' color={'secondary'} onClick={onIncrement} label='Increment' />

			<div className='grid-align'>
				<IButton data-testid='reset' variant='contained' color={'danger'} onClick={onReset} label='Reset' />
			</div>
		</div>
	);
}

export default Counter
