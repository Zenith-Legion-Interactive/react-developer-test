import CounterProvider from './common/utils/context-provider';
import Counter from './modules/Counter'

const App = () => {
  return (
		<>

		<CounterProvider>
			<Counter />
			{/* <Counter /> */}
		</CounterProvider>
	
	
		</>
	);
}

export default App
