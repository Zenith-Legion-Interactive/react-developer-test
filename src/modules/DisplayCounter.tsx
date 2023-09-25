
import { useAppSelector } from '../common/utils/redux/hooks';
import { RootState } from '../common/utils/redux/store';


const DisplayCounter = () => {

  const count = useAppSelector((state: RootState) => state.counter.count);



  // const contextValue = useContext(CounterContext);

	// if (contextValue === null) {
	// 	// Handle the case where the context value is null
	// 	return null;
	// }

	// const { count } = contextValue;
  return (
		<p className='p-lg' data-testid='display'>
			{count}
		</p>
	);
}

export default DisplayCounter
