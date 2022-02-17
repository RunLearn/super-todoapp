import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoRoom/Todos'

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>