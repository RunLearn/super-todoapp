import { nanoid } from '@reduxjs/toolkit';

const initState:TodoType[]= [

]

interface TodoType {
  id: string
  title: string
  manager: string
  content: string
  deadline: Date
  createDate:Date
  dueDate: Date
}
export default initState;