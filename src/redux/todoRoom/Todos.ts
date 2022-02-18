import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { Interface } from 'readline';
import { Id } from '@reduxjs/toolkit/dist/query/tsHelpers';
import TempData from './initState';
import initState from './initState';
import { addDoing } from './Doings';
import { createDispatchHook, useDispatch } from 'react-redux';
import { store, RootState } from '../store';


const TodoSlice=createSlice({

  name: 'todo',
  initialState:TempData,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction) => {
        state.push(action.payload)
      },
    },

    removeTodo: {
      reducer: (state, action) => {
        return state.filter(one => one.id !== action.payload)
      }
    },
  }
});

const {actions, reducer} = TodoSlice
export const {addTodo, removeTodo, moveToDoing} = TodoSlice.actions

export default reducer