import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
import ErrorPage from './error-page';
import User, {
  loader as userLoader,
  action as userAction,
} from "./routes/profile/user";
import EditUser, {
  action as editAction,
} from "./routes/profile/edit";
import { action as destroyAction } from "./routes/profile/destroy";
import Index from "./routes/index";
import { Provider } from 'react-redux';
import store from './store/configureStore';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
          { index: true, element: <Index /> },
          {
            path: "profile/:userId",
            element: <User />,
            loader: userLoader,
            action: userAction,
            errorElement: <ErrorPage />,
          },
          {
            path: "profile/:userId/edit",
            element: <EditUser />,
            loader: userLoader,
            action: editAction,
            errorElement: <ErrorPage />,
          },
          {
            path: "profile/:userId/destroy",
            action: destroyAction,
            errorElement: <ErrorPage />,
          },
    ], 
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
