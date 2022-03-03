import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Interface } from 'readline';
import initState from './initState';


const DoingSlice=createSlice({
  name: 'doing',
  initialState:initState,
  reducers: {
    addDoing: {
      reducer: (state, action: PayloadAction) => {
        state.push(action.payload)
      },
    },
    removeDoing: {
      reducer: (state, action) => {
        return state.filter(one => one.id !== action.payload)
      }
    },
  }
});

const {actions, reducer} = DoingSlice
export const {addDoing, removeDoing} = DoingSlice.actions

export default reducer