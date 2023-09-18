import { createBrowserRouter } from 'react-router-dom';
import UserList from '../modules/UserList';
import Profile from '../modules/Profile';
import Counter from '../modules/Counter';
import '../common/styles/UserList.css';

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
		element: <Counter />,
	},
]);

export default PublicRoute;
