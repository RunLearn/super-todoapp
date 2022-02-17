import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { Interface } from 'readline';
import { Id } from '@reduxjs/toolkit/dist/query/tsHelpers';
import TempData from './initState';
import initState from './initState';

const TodoSlice=createSlice({

  name: 'todo',
  initialState:TempData,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction) => {
        state.push(action.payload)
      },
    },

    moveDoing: {
      reducer: (state, action) => {

      }
    },

    removeTodo: {
      reducer: (state, action) => {
        return state.filter(one => one.id !== action.payload)
      }
    },
  }
});

const {actions, reducer} = TodoSlice
export const {addTodo, removeTodo} = TodoSlice.actions

export default reducer