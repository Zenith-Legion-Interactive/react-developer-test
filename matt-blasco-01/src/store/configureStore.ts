import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { counterReducer } from './reducers/reducers-count';


const rootReducer = combineReducers({
    counter_component: counterReducer
});

const store = configureStore({
  reducer: rootReducer,
});

// epicMiddleware.run(combineEpics(
//   UserViewEpic,
//   UserViewSpecificEpic,
//   UserCreateEpic,
//   UserUpdateEpic,
// ));

export type RootState = ReturnType<typeof rootReducer>;
export const APILink = 'https://dummyapi.io/data/v1/';
export const appId = '65080fec01538513690ca63e'; //can store this on env if prod build / official repo
export default store;