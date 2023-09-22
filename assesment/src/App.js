import Counter from "./components/counter/Counter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Home from "./pages/Home";
import CounterFeature from "./pages/CounterFeature"
import About from "./pages/About";
import CounterForm from "./components/counter/CounterForm";

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './App.css'
import UsersList from "./pages/UsersList";
import BottomSection from "./components/BottomSection";
import UsersProfile from "./pages/UsersProfile";


function App() {
  console.log('test')
  return (
    <div className="App">
  
    <BrowserRouter>
    <Navbar />
     <div className="appBody">     
       <Routes>

       <Route path="/" element={ <Home/> } />
       <Route path="/counter" element={ <CounterFeature/> } />
       <Route path="/users" element={ <UsersList /> } />
       <Route path="/users/:id" element={ <UsersProfile  />} />
       <Route path="/about" element={ <About /> } />

     </Routes>
     </div>
     <BottomSection/>
   <Footer />
    </BrowserRouter>

 </div>
  );
}

export default App;
