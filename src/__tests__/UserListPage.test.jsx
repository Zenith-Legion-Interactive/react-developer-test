import React from 'react';
import axios from 'axios';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom'

import UserListPage from '../pages/UserListPage';

afterEach( cleanup );

test('Should render loading text while fetching', () => {

    const mAxiosResponse = {
        data: [
            { firstName: 'Sam', lastName: 'Wise' }
        ]
    };
    jest.spyOn(axios, 'get').mockResolvedValueOnce(mAxiosResponse);

    render(<UserListPage />);
    expect(screen.getByText('Fetching users...')).toBeInTheDocument();
});