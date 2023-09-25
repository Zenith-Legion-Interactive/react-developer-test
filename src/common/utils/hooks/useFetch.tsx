// useFetch.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_ID } from '../../immutable';

// custom hook for performing GET request
const useFetch = (url:string, initialValue=[]) => {
	const [data, setData] = useState(initialValue);
	const [state, setState] = useState<string>('idle');
	useEffect(() => {
		const fetchData = async function () {
			try {
				setState('loading');
				const response = await axios.get(url, {
					headers: {
						'app-id': API_ID,
					},
				});

				setState('fetching');

				if (response.status === 200) {
					setData(response.data);
					setState('success');
				}
			// eslint-disable-next-line no-useless-catch
			} catch (error) {
					setState('error');
					// console.dir(error);
			} 
		};
		fetchData();
	}, [url]);
	return { state, data };
};

export default useFetch;
