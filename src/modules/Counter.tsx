import {  useContext } from 'react';
import '../common/styles/Counter.css';
import IButton from '../common/components/IButton';
import DisplayCounter from './DisplayCounter';
import { CounterContext } from '../common/utils/context-provider';

function Counter() {

  const contextValue = useContext(CounterContext);

	if (contextValue === null) {
		// Handle the case where the context value is null
		return null;
	}

	const {  onIncrement, onDecrement, onReset } = contextValue;

  return (
		<div className='grid-container'>
			<IButton data-testid='decrement' onClick={onDecrement} label='Decrement' />
			<DisplayCounter/>
			<IButton data-testid='increment' color={'secondary'} onClick={onIncrement} label='Increment' />

			<div className='grid-align'>
				<IButton data-testid='reset' variant='contained' color={'danger'} onClick={onReset} label='Reset' />
			</div>
		</div>
	);
}

export default Counter
