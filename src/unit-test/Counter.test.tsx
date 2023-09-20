import {  fireEvent, screen } from '@testing-library/react';
import Counter from '../modules/Counter';
import { act } from 'react-dom/test-utils';
import { render } from './setupTest';


describe('Counter Component', () => {
	it('display counter default value', async() => {
	
		render(<Counter />)

		
		const displayCounter = screen.getByTestId('display');
	
		expect(displayCounter).toHaveTextContent('0');



	});

	it('increment', async() => {

		render(<Counter />)

		

		const incrementButton = screen.getByTestId('increment');
		const displayCounter = screen.getByTestId('display');


	
			act(() => {
			fireEvent.click(incrementButton);
		});

		expect(displayCounter).toHaveTextContent('1');

	});


		it('decrement', async() => {
		await act(async () => render(<Counter />));
		

			const incrementButton = screen.getByTestId('decrement');
			const displayCounter = screen.getByTestId('display');

	
					
			act(() => {
				fireEvent.click(incrementButton);
			});

			expect(displayCounter).toHaveTextContent('0');
		});

		it('reset', async() => {

		render(<Counter />);

		

					const resetButton = screen.getByTestId('reset');
					const displayCounter = screen.getByTestId('display');

			
						act(() => {
							fireEvent.click(resetButton);
						});

					expect(displayCounter).toHaveTextContent('0');
		});
});
