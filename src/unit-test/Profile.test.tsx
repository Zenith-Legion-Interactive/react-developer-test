

import { fireEvent, render } from '@testing-library/react';
import {  BrowserRouter } from 'react-router-dom';
import Profile from '../modules/Profile';

describe('render back button', () => {
	it('render back button', () => {
		const { getByText } = render(
			<BrowserRouter>
				<Profile />
			</BrowserRouter>,
		);

		const button = getByText(/Back/i);
		expect(button).toBeInTheDocument();
		fireEvent.click(button);
	});
		it('renders Profile component', () => {
				const { getByText } = render(
					<BrowserRouter>
						<Profile />
					</BrowserRouter>,
				);

			expect(getByText(/Profile/i)).toBeInTheDocument();
		});

    it('renders user profile', () => {
			const {  getByTestId } = render(
				<BrowserRouter>
					<Profile />
				</BrowserRouter>,
			);

      const getState = getByTestId('getStatus') as HTMLInputElement;
			const getUser = getByTestId('getProfile') as HTMLInputElement;
      
      if(getState.value === 'success'){
        expect(getUser.value).toBeGreaterThan(0);
      }
		});

		it('render profile list item', () => {
			const { getByTestId, getByText } = render(
				<BrowserRouter>
					<Profile />
				</BrowserRouter>,
			);

			const getState = getByTestId('getStatus') as HTMLInputElement;

			if (getState.value === 'success') {
				expect(getByText('Name')).toBeInTheDocument();
				expect(('Photo')).toBeInTheDocument();
				expect(getByText('Location')).toBeInTheDocument();
				expect(getByText('Email')).toBeInTheDocument();
				expect(getByText('Email')).toBeInTheDocument();
				expect(getByText('Gender')).toBeInTheDocument();
				expect(getByText('Birtdate')).toBeInTheDocument();
				expect(getByText('Registered Date')).toBeInTheDocument();
				expect(getByText('Title')).toBeInTheDocument();
			}
		});

		it('renders profile loading state', () => {
			const { getByText, getByTestId } = render(
				<BrowserRouter>
					<Profile />
				</BrowserRouter>,
			);

			const getState = getByTestId('getStatus') as HTMLInputElement;

			if (getState.value === 'loading') {
				expect(getByText('Loading')).toBeInTheDocument();
			}
		});

		it('renders profile fetching component', () => {
			const { getByText, getByTestId } = render(
				<BrowserRouter>
					<Profile />
				</BrowserRouter>,
			);

			const getState = getByTestId('getStatus') as HTMLInputElement;

			if (getState.value === 'fetching') {
				expect(getByText('Fetching')).toBeInTheDocument();
			}
		});
});
