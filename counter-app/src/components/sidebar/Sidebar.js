import {Link} from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-1/5 p-4">
      <h2 className="text-xl mb-4">Sidebar</h2>
      <ul>
        <li className="py-2">
          <Link to="/">Counter</Link>
        </li>
        <li className="py-2">
          <Link to="/users">Users</Link>
        </li>
        <li className="py-2">
          <Link to="/nothing-here">Nothing Here</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
