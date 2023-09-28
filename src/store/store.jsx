import { configureStore } from '@reduxjs/toolkit';

// Reducer
import reducer from './reducer';

const store = configureStore({ reducer }); 

export default store;