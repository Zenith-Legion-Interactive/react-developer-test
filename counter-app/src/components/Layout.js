import React from "react";
import {Outlet} from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
