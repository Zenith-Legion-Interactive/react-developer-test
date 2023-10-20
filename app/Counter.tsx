'use client'

import { useState } from 'react';
import Button from '@/components/Button';


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
          <Button
            label="-"
            theme="secondary"
            onClick={handleDecreaseButtonClick} />
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
          <Button
            label="Reset"
            theme="danger"
            onClick={handleResetButtonClick} />
        </div>
      </div>

      {/* Increment Button */}
      <div className="p-12 flex flex-col justify-center items-center">
        <div>
          <Button
            label="+"
            onClick={handleIncreaseButtonClick} />
        </div>
        <div>Increment</div>
      </div>
      </div>
    </>
  )
}