 
 
import './App.css'


import {  Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Users from './components/Users'
import User from './components/User'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
 
   
  return (
    <>
      <div className='w-[450px] mx-auto'>
      <Navbar />
      
      
        <Routes>
        
          <Route path='/users' element={<Users />} />
          <Route path='/user/:id' element={<User />} />
          <Route path='/' element={<Home />} />
        </Routes>
     
      </div>
      
    </>
   )
}

export default App
