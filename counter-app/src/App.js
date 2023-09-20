// import Counter from "./components/Counter";
import UserList from "./components/UserList";
import {Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import Profile from "./components/Profile";

function App() {
  return (
    <div>
      {/* <UserList /> */}
      <div>
        <h1>Routing</h1>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="users" element={<UserList />} />
            <Route path="profile/:userId" element={<Profile />} />

            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
