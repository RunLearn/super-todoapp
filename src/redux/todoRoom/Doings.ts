import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Interface } from 'readline';

interface Todo {
  title: string
  manager: string
  content: string
  deadline: number
  createDate:number
  dueDate: number
}

const initState:Todo[] = [
  {
    title: "string",
    manager: "string",
    content: "string",
    deadline: 1,
    createDate:2,
    dueDate: 3,
  },
]

const DoingSlice=createSlice({
  name: 'todo',
  initialState:initState,
  reducers: {
    addDoing: {
      reducer: (state, action: PayloadAction) => {
        state.push(action.payload)
      },
    },
  }
});

const {actions, reducer} = DoingSlice
export const {addDoing} = DoingSlice.actions

export default reducer