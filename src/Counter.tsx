import './Counter.css'

function Counter({count = 0}) {



  // increase count
  const onIncrement = () =>{
		count += 1;
		displayCounter();
	}

// decrener count
  const onDecrement =  () =>{
		if(count > 0){
			count -= 1;
			displayCounter();
		}

	}

	const displayCounter = () =>{

	const countDisplay = document.getElementById('display');
			if (countDisplay) {
				countDisplay.textContent = `${count}`;
			}


	}

  return (
		<div className='grid-container'>
			<button onClick={onDecrement} className='btn'>
				Decrement
			</button>
			<p id='display' className='p-lg'>{count}</p>
			<button onClick={onIncrement} className='btn'>
				Increment
			</button>
		</div>
	);
}

export default Counter
