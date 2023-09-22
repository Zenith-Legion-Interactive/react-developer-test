import { createAction } from '@reduxjs/toolkit';

export const IncrementCounterAction = createAction('INCREMENT_COUNTER');

export const DecrementCounterAction = createAction('DECREMENT_COUNTER');

export const ResetCounterAction = createAction('RESET_COUNTER');
