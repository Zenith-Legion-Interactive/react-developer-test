import { render, fireEvent } from '@testing-library/react'
 
import Counter from "./Counter";

// Write unit tests for the Counter component using a testing library like Jest and React Testing Library.
// Test the increment, decrement, and reset functionality.
// Write unit tests for the UserList component, including testing the data loading and error handling.


describe(Counter, () => {
    it("counter initial value is 0", () => {
        const { getByText } = render(<Counter />)
        const count = getByText('0')
        expect(count).toBeInTheDocument() 
    })

    it('increment and decrement buttons work', () => {
        const { getByText } = render(<Counter />)
        const incButton  = getByText('Increment')
        const decBUtton  = getByText('Decrement')

        fireEvent.click(incButton)
        fireEvent.click(incButton)
        fireEvent.click(decBUtton)

        const countElement = getByText('1')
        expect(countElement).toBeInTheDocument()
    })

    it('reset button works', () => {
        const { getByText } = render(<Counter />)
        const incButton  = getByText('Increment')
        const resButton  = getByText('Reset')

        fireEvent.click(incButton)
        fireEvent.click(resButton)

        const countElement = getByText('0')
        expect(countElement).toBeInTheDocument()

    })
})