import { counterReducer } from '../store/reducers/reducers-count';
import * as _Actions from '../store/actions/actions-count';

describe('counterReducer', () => {
  it('should increment the count when IncrementCounterAction is dispatched', () => {
    const initialState = { count: 0 };
    const newState = counterReducer(initialState, _Actions.IncrementCounterAction());

    expect(newState.count).toEqual(1);
  });

  it('should decrement the count when DecrementCounterAction is dispatched', () => {
    const initialState = { count: 5 };
    const newState = counterReducer(initialState, _Actions.DecrementCounterAction());

    expect(newState.count).toEqual(4);
  });

  it('should reset the count when ResetCounterAction is dispatched', () => {
    const initialState = { count: 7 };
    const newState = counterReducer(initialState, _Actions.ResetCounterAction());

    expect(newState.count).toEqual(0);
  });
});