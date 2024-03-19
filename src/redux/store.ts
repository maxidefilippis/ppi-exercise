import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import globalReducer from './reducers/global';

export const store = configureStore({
    reducer: {
        global: globalReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, any, Action<string>>;
