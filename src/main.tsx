import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import PublicRoute from './router';
import { Provider } from 'react-redux';
import store from './common/utils/redux/store';


ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={PublicRoute} />
		</Provider>
	</React.StrictMode>,
);
