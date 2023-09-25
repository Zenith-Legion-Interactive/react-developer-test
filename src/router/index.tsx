import { createBrowserRouter } from 'react-router-dom';
import UserList from '../modules/UserList';
import Profile from '../modules/Profile';

import '../common/styles/UserList.css';
import App from '../App';

const PublicRoute = createBrowserRouter([
	{
		path: '/',
		element: <UserList />,
	},
	{
		path: '/profile/:userId',
		element: <Profile />,
	},
	{
		path: '/counter',
		element: <App />,
	},
]);

export default PublicRoute;
