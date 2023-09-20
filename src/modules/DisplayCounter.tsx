import React, { useContext } from 'react'
import  {  CounterContext } from '../common/utils/context-provider';

const DisplayCounter = () => {

  const contextValue = useContext(CounterContext);

	if (contextValue === null) {
		// Handle the case where the context value is null
		return null;
	}

	const { count } = contextValue;
  return (
		<p className='p-lg' data-testid='display'>
			{count}
		</p>
	);
}

export default DisplayCounter
