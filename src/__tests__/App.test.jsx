import combinedReducer from '../store/reducer';
const initialCounterValue = 0;

test('Should handle incrementing counter', () => {
    const previousState = {
        counter: 0
    }

    expect(
        combinedReducer( previousState, { type: 'INCREMENT' })
    ).toEqual({ counter: initialCounterValue + 1 });
});

test('Should handle decrementing counter', () => {
    const previousState = {
        counter: 1
    }

    expect(
        combinedReducer( previousState, { type: 'DECREMENT' })
    ).toEqual({ counter: initialCounterValue });
});

test('Should handle resetting counter', () => {
    const previousState = {
        counter: 999999
    }

    expect(
        combinedReducer( previousState, { type: 'RESET' })
    ).toEqual({ counter: initialCounterValue });
});

