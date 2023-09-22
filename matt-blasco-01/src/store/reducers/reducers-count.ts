import { createSlice } from '@reduxjs/toolkit';
import * as _Actions from '../actions/actions-count';


interface AuthState {
  count: number
}

const initialState: AuthState = {
  count: 0
};


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(_Actions.IncrementCounterAction, (state) => { state.count += 1})
      .addCase(_Actions.DecrementCounterAction, (state) => { state.count -= 1})
      .addCase(_Actions.ResetCounterAction, (state) => { state.count = 0})
  },
});

export const counterReducer = counterSlice.reducer;