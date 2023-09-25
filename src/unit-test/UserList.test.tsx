import axios from 'axios';
import { API_URL, API_ID } from '../common/immutable';
import { renderHook, waitFor } from '@testing-library/react';
import useFetch from '../common/utils/hooks/useFetch';
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import UserList from '../modules/UserList';
import MemoizedTableRows, { PropertyKey } from '../common/components/Table';

import { IUser } from '../common/utils/hooks/type';


axios.defaults.baseURL = API_URL;


async function mockingFunction(url:string,status='success') {
  const response = await axios.get(url, {
				headers: {
					'app-id': API_ID,
				},
			});


      const { result } = renderHook(() => useFetch(url));
		
     await waitFor(() => {
      expect(result.current.data).toEqual(response.data);
			expect(result.current.state).toBe(status);
      });

	
}


		const mockData: Partial<IUser[]> = [
				{
					dateOfBirth: '1996-04-30T19:26:49.610Z',
					email: 'sara.andersen@example.com',
					firstName: 'Sara',
					gender: 'female',
					id: '60d0fe4f5311236168a109ca',
					lastName: 'Andersen',
					location: {
						street: '9614, Søndermarksvej',
						city: 'Kongsvinger',
						state: 'Nordjylland',
						country: 'Denmark',
						timezone: '-9:00',
					},
					phone: '92694011',
					picture: 'https://randomuser.me/api/portraits/women/58.jpg',
					registerDate: '2021-06-21T21:02:07.374Z',
					title: 'ms',
					updatedDate: '2021-06-21T21:02:07.374Z',
					properties: {
						age: "25",
						eyeColor: 'brown',
						hairColor: 'red',
					},
				},
			];

	

describe('UserList', () => {
	it('should return users', async () => {
		mockingFunction('user');
	});

  it('should return user by Id', async () => {
		  mockingFunction('user/60d0fe4f5311236168a109ca');
	});

  it('should state return error', async () => {

   	mockingFunction('users','error');

  });

  it('should state loading', async () => {
    const url = `user`;

    const { result } = renderHook(() => useFetch(url));

    expect(result.current.data).toEqual([]);
    expect(result.current.state).toBe('loading');
  });
});

	describe('Userlist Component', () => {
		it('renders UserList component', () => {
      
	render(<UserList />);

			const getState = screen.getByTestId('getStatus') as HTMLInputElement;

			if (getState.value === 'loading') {
				expect(screen.getByText('Loading')).toBeInTheDocument();
			}
		});

		it('renders loading state', () => {
	render(<UserList />); 

				const getState = screen.getByTestId('getStatus') as HTMLInputElement;

				if(getState.value === 'loading'){
					expect(screen.getByText('Loading')).toBeInTheDocument();
				}

		});

		it('renders fetching component', () => {
	render(<UserList />);

					const getState = screen.getByTestId('getStatus') as HTMLInputElement;

					if (getState.value === 'fetching') {
						expect(screen.getByText('Fetching')).toBeInTheDocument();
					}
		});

  it('renders success component', () => {
	render(<UserList />);

					const getState = screen.getByTestId('getStatus') as HTMLInputElement;

					if (getState.value === 'success') {
						expect(screen.getByText('Name')).toBeInTheDocument();
						expect(screen.getByText('Email')).toBeInTheDocument();

					}
		});

		it('check if response is ok', () => {
				render(<UserList />);

				const getUser = screen.getByTestId('getUserList') as HTMLInputElement;
				const getState = screen.getByTestId('getStatus') as HTMLInputElement;

				if(getState.value === 'success'){
					expect(getUser.value).toBeGreaterThan(0);
				}
						
		});

		it('check if route path is ok and redirecto profile', () => {

			const propertyKeysToShow: PropertyKey<IUser>[] = ['email'];
			const header = ['Name', 'Email'];

			render(<MemoizedTableRows data={mockData as IUser[]} head={header} propertyKeys={propertyKeysToShow} />);

			const anchorElement = screen.getByRole('route');

			if (anchorElement.getAttribute('data-href') === 'true') {

			act(() => {
				fireEvent.click(anchorElement);
			});

				expect(anchorElement.getAttribute('href')).toBe('profile/60d0fe4f5311236168a109ca');
			}

		});

		
	});


	
			  
