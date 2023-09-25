import { createSlice } from '@reduxjs/toolkit';
import { CounterState } from './type';


const initialState: CounterState = { count: 0 };




  // create slicer

const counterSlice = createSlice({
name: 'counter',
initialState,
reducers: {
  increment(state) {
    state.count += 1;
  },
  decrement(state) {
    if(state.count > 0) state.count -= 1;
  },
  reset(state) {
    state.count = 0;
  },
},
});

// export actions
export const { increment, decrement, reset } = counterSlice.actions;

// export reducer
export default counterSlice.reducer;