import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { Interface } from 'readline';
import tempData from './initState';

const DoneSlice=createSlice({
  name: 'done',
  initialState:tempData,
  reducers: {
    addDone: {
      reducer: (state, action: PayloadAction) => {
        state.push(action.payload)
      },
    },
    removeDone: {
      reducer: (state, action) => {
        return state.filter(one => one.id !== action.payload)
      }
    },
  }
});

const {actions, reducer} = DoneSlice
export const {addDone, removeDone} = DoneSlice.actions

export default reducer