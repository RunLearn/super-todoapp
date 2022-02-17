import { configureStore } from '@reduxjs/toolkit';
import TodoReducer from './todoRoom/Todos'
import DoingReducer from './todoRoom/Doings'
import DoneReducer from './todoRoom/Dones'

export const store = configureStore({
  reducer: {
    todo: TodoReducer,
    doing: DoingReducer,
    done: DoneReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>