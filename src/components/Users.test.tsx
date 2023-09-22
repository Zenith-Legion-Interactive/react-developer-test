import React from 'react'
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
 
import Users from './Users' 
import { MemoryRouter } from 'react-router-dom'
  
describe('Users Component', () => {
    it('displays user data after fetching', async () => {
        render(
        <MemoryRouter><Users /></MemoryRouter>
        )

        expect(screen.getByText('Loading Users...')).toBeInTheDocument() 
        await waitForElementToBeRemoved(screen.queryByText('Loading Users...')) 
        expect(screen.getByText(/Sara Andersen/)).toBeInTheDocument() 

    })
})