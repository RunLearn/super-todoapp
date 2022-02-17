import { nanoid } from '@reduxjs/toolkit';
import TodoType from './todoType';

const initState:TodoType[]= [
  {
    id: nanoid(),
    title: "string",
    manager: "string",
    content: "string",
    deadline: 1,
    createDate:2,
    dueDate: 3,
  },
]
export default initState;