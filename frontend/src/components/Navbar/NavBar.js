import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div
      style={{
        display: "flex",
        background: "black",
        fontSize: "20px",
      }}
    >
      <div style={{ margin: "10px" }}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "gray" : "white",
            textDecoration: "none",
          })}
        >
          Counter
        </NavLink>
      </div>
      <div style={{ margin: "10px" }}>
        <NavLink
          to="/users"
          style={({ isActive }) => ({
            color: isActive ? "gray" : "white",
            textDecoration: "none",
          })}
        >
          User List
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
