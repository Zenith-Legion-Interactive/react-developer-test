import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom'

import UserListPage from '../pages/UserListPage';

afterEach( cleanup );

test('Should render loading text while fetching', () => {
    const { getByTestId } = render(< UserListPage />);

    expect( getByTestId('loading') ).toHaveTextContent("Fetching users...");
});
