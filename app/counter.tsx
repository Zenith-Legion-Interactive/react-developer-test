import { useState } from 'react';


export default function Counter() {
  const [count, setCount] = useState(0);

  // Handlers
  function handleIncreaseButtonClick() {
    setCount(count + 1);
  }

  function handleDecreaseButtonClick() {
    setCount(count - 1);
  }

  return (
    <>
      {/* Container */}
      <div className="h-screen flex justify-center items-center">

      {/* Decrement */}
      <div className="p-12 flex flex-col justify-center items-center">
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white text-5xl font-bold py-1 px-4 rounded"
            onClick={handleDecreaseButtonClick}>-</button>
        </div>
        <div>Decrement</div>
      </div>

      {/* Card */}
      <div className="w-64 h-96 p-6 bg-white rounded-2xl flex flex-col justify-center items-center drop-shadow-md">
        <div className="text-center text-2xl">
          Counter
        </div>
        <div>
          
          <div>
            <div className="h-24 w-16 bg-white text-3xl text-bold flex justify-center items-center">
              <span>{count}</span>
            </div>
          </div>
          
        </div>
      </div>

      {/* Increment */}
      <div className="p-12 flex flex-col justify-center items-center">
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white text-5xl font-bold py-1 px-4 rounded"
            onClick={handleIncreaseButtonClick}>+</button>
        </div>
        <div>Increment</div>
      </div>
      </div>
    </>
  )
}