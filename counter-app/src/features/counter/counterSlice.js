import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  counters: {},
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      const {counterId} = action.payload;
      state.counters[counterId] = (state.counters[counterId] || 0) + 1;
    },
    decrement: (state, action) => {
      const {counterId} = action.payload;
      state.counters[counterId] = (state.counters[counterId] || 0) - 1;
    },
    reset: (state, action) => {
      const {counterId} = action.payload;
      state.counters[counterId] = 0;
    },
  },
});

export const {increment, decrement, reset} = counterSlice.actions;

export default counterSlice.reducer;
