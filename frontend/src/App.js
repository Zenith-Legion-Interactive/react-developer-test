import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Counters from "./components/Counters/Counters";
import UserList from "./components/UserList/UserList";
import Profile from "./components/Profile/Profile";
import NavBar from "./components/Navbar/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Counters />} exact />
        <Route path="/users" element={<UserList />} exact />
        <Route path="/user/:userId" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
