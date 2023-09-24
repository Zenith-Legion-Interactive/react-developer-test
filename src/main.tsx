import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import UserPage from "./pages/UserPage";
import User from "./pages/User";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users",
    element: <UserPage />,
  },
  {
    path: "/user/:id",
    element: <User />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

