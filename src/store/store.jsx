import { configureStore } from '@reduxjs/toolkit';

// Reducer
import combinedReducer from './reducer';

const store = configureStore({ reducer: combinedReducer }); 

export default store;