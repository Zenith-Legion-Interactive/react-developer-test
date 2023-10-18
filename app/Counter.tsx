'use client'

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

  function handleResetButtonClick() {
    setCount(0);
  }

  return (
    <>
      {/* Container */}
      <div className="flex justify-center items-center m-12">

      {/* Decrement Button */}
      <div className="p-12 flex flex-col justify-center items-center">
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white text-5xl font-bold py-1 px-4 rounded"
            onClick={handleDecreaseButtonClick}>-</button>
        </div>
        <div>Decrement</div>
      </div>

      {/* Card */}
      <div className="w-46 h-46 p-6 bg-white rounded-2xl flex flex-col justify-center items-center drop-shadow-md">
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

        {/* Reset Button */}
        <div>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleResetButtonClick}>Reset</button>
        </div>
      </div>

      {/* Increment Button */}
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