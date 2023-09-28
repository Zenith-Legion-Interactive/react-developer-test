import {NavLink} from "react-router-dom";

const Sidebar = () => {
  const customStyle = ({isActive}) => ({
    color: isActive ? "#99CCFF" : "inherit",
  });

  const customClassName = ({isActive, isPending}) =>
    isActive ? "active" : isPending ? "pending" : "";

  return (
    <div className="bg-gray-800 text-white h-screen w-1/5 p-4">
      <h2 className="text-xl mb-4">Sidebar</h2>
      <ul>
        <li className="py-2">
          <NavLink
            exact
            to="/"
            activeClassName="active-link"
            style={customStyle}
            className={customClassName}
          >
            Counter
          </NavLink>
        </li>
        <li className="py-2">
          <NavLink
            to="/users"
            activeClassName="active-link"
            style={customStyle}
            className={customClassName}
          >
            Users
          </NavLink>
        </li>
        <li className="py-2">
          <NavLink
            to="/nothing-here"
            activeClassName="active-link"
            style={customStyle}
            className={customClassName}
          >
            Nothing Here
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
