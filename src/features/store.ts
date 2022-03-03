import { configureStore } from '@reduxjs/toolkit';
import TodoReducer from './todoRoom/redux_todoRoom/Todos'
import DoingReducer from './todoRoom/redux_todoRoom/Doings'
import DoneReducer from './todoRoom/redux_todoRoom/Dones'

export const store = configureStore({
  reducer: {
    todo: TodoReducer,
    doing: DoingReducer,
    done: DoneReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>