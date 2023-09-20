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
			<IButton onClick={onDecrement} label='Decrement'/>
			<p className='p-lg'>{count}</p>
			<IButton color={'secondary'} onClick={onIncrement} label='Increment' />
				
	
			<div className='grid-align'>
				<IButton variant='contained' color={'danger'} onClick={onReset} label='Reset' />
				
			</div>
		</div>
	);
}

export default Counter
