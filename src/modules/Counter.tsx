import '../common/styles/Counter.css';
import IButton from '../common/components/IButton';
import DisplayCounter from './DisplayCounter';
import { decrement, increment, reset } from '../common/utils/redux/counterSlice';
import { useAppDispatch } from '../common/utils/redux/hooks';
function Counter() {

	const dispatch = useAppDispatch();

  // const contextValue = useContext(CounterContext);

	// if (contextValue === null) {
	// 	// Handle the case where the context value is null
	// 	return null;
	// }

	// const {  onIncrement, onDecrement, onReset } = contextValue;

  return (
		<div className='grid-container'>
			<IButton data-testid='decrement' onClick={()=> dispatch(decrement())} label='Decrement' />
			<DisplayCounter/>
			<IButton data-testid='increment' color={'secondary'} onClick={()=> dispatch(increment())} label='Increment' />

			<div className='grid-align'>
				<IButton data-testid='reset' variant='contained' color={'danger'} onClick={()=> dispatch(reset())} label='Reset' />
			</div>
		</div>
	);
}



export default Counter
