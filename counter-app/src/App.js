// import Counter from "./components/Counter";
import UserList from "./components/content/user/UserList";
import {Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import NotFoundPage from "./components/NotFoundPage";
import Profile from "./components/content/user/Profile";

function App() {
  return (
    <div>
      {/* <UserList /> */}
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="users" element={<UserList />} />
            <Route path="profile/:userId" element={<Profile />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
