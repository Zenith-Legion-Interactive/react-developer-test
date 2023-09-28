import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Counters from "./components/Counters/Counters";
import UserList from "./components/UserList/UserList";
import Profile from "./components/Profile/Profile";
import EditProfile from "./components/Profile/EditProfile";
import NewUserForm from "./components/UserList/NewUserForm";
import NotFound from './components/NotFound/NotFound';
import NavBar from "./components/Navbar/NavBar";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Counters />} exact />
            <Route path="/users" element={<UserList />} exact />
            <Route path="/user/new" element={<NewUserForm />} />
            <Route path="/user/:userId" element={<Profile />} />
            <Route path="/user/edit/:userId" element={<EditProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
