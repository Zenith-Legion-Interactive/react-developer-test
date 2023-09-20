import {  useState,useCallback } from 'react';
import '../common/styles/Counter.css';
import IButton from '../common/components/IButton';
import useCounter from '../common/utils/hooks/useCounter';

function Counter() {


	const { onDecrement, onIncrement, onReset, count } = useCounter();
	

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
