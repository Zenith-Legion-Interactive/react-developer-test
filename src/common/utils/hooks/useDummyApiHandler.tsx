import React, { useState } from 'react'
import { API_ID, API_URL } from '../../immutable';
import { IState, IUser } from './type';
import useSafeRender from './useSafeRender';
import axios from 'axios';


axios.defaults.baseURL = API_URL;

const useDummyApiHandler = (endpoint: string) => {
	const [state, setState] = useState<IState>('idle');
	const [users, setUsers] = useState<IUser[]>([]);

	useSafeRender(async () => {
		setState('loading');

		try {
			const response = await axios.get(endpoint, {
				headers: {
					'app-id': API_ID,
				},
			});

			setState('fetching');
			const mapUsers = response.data.data as Partial<IUser>[];

			// Use Promise.all to make the dependent requests concurrently
			const userPromises = mapUsers.map(async (user: Partial<IUser>) => {
				const userResponse = await axios.get(`${endpoint}/${user.id}`, {
					headers: {
						'app-id': API_ID,
					},
				});

				return userResponse.data;
			});

			const userResults = await Promise.all(userPromises);
			setUsers(userResults);
			setState('success');


		} catch (error) {
			setState('error');
			console.error(error);
		}
	});

	return {
		users,
		state,
	};
};

export default useDummyApiHandler;
