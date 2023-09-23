import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Root: React.FC = (): JSX.Element => {
    return (
        <div className="flex flex-col h-screen justify-center space-y-4">
            <ul className="flex border-b mx-auto">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "-mb-px mr-1 bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
                            : "bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
                    }
                >
                    Counter
                </NavLink>
                <NavLink
                    to="/users"
                    className={({ isActive }) =>
                        isActive
                            ? "-mb-px mr-1 bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
                            : "bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
                    }
                >
                    User List
                </NavLink>
            </ul>
            <Outlet />
        </div>
    );
};

export default Root;
