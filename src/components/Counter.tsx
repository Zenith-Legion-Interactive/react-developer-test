import  {useState} from 'react'
import Button from './Button'
import './Button.css'

const Counter = () => {
 
  const [count, setCount] = useState(0)

  
  const increment = () => {
    setCount((prev) => prev + 1)
  }
  const decrement = () => {
    setCount((prev) => prev - 1)
  }
  const reset = () => {
    setCount(0)
  }

  return (
    <>
      <div className='flex mx-auto w-[450px] border-2 bg-sky-950 rounded-lg justify-between px-3 py-1 items-center'> 
        <Button func={increment} mode='primary'>Increment</Button>
        <Button func={decrement} mode='secondary'>Decrement</Button> 
        <Button func={reset} mode='danger'>Reset</Button> 
        
        <div className='w-[80px] justify-center px-2 py-1 rounded bg-red-400'>
          <h3 className='font-bold text-3xl'>{count}</h3>
        </div>
        
      </div>
      
    </>
  )
}

export default Counter