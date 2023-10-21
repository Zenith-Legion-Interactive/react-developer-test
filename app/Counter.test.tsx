import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

const mockClickFunction = jest.fn();

describe('Counter', () => {

  // Increment
  it('should Increment Counter by 1 when "+" Button is clicked', async () => {
    // Arrange
    render(<Counter />);

    // Act
    const incrementButtonDiv = screen.getByTestId('increment-button-div');
    const incrementButton = within(incrementButtonDiv).getByRole('button');
    const counterText = screen.getByTestId('counter-text');

    // Assert
    await userEvent.click(incrementButton);
    expect(counterText).toHaveTextContent('1');
  });

  // Decrement
  it('should Decrement Counter by 1 when "-" Button is clicked', async () => {
    // Arrange
    render(<Counter />);

    // Act
    const decrementButtonDiv = screen.getByTestId('decrement-button-div');
    const decrementButton = within(decrementButtonDiv).getByRole('button');
    const counterText = screen.getByTestId('counter-text');

    // Assert
    await userEvent.click(decrementButton);
    expect(counterText).toHaveTextContent('-1');
  });

  // Reset
  it('should Reset Counter to 0 when "Reset" Button is clicked', async () => {
    // Arrange
    render(<Counter />);

    // Act
    const resetButtonDiv = screen.getByTestId('reset-button-div');
    const resetButton = within(resetButtonDiv).getByRole('button');
    const counterText = screen.getByTestId('counter-text');

    // Assert
    await userEvent.click(resetButton);
    expect(counterText).toHaveTextContent('0');
  });




})