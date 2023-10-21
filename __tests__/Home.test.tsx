
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
  it( 'should have Counter text', () => {
    render(<Home />); //Arrange

    const myElem = screen.getByText('Counter');
    
    expect(myElem).toBeInTheDocument() // ASSERT
  })
})