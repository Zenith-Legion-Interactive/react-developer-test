import { useSelector } from 'react-redux';

import './App.css'


const App = () => {
  const counter = useSelector( state => state.counter );

  return (
    <>
      { counter } 
    </>
  )
}

export default App
