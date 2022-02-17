import react from 'react';
import styled from 'styled-components';
import TodoCard from '../buttons/todoCard';
import TodoContiner from './TodoContainer';

import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import TodoContainer from './TodoContainer';

const doingBox = () => {
  const todos = useSelector((state:RootState) => state.todo)
  const allTodos = todos.map( (todo:any) => {
    return(
      <TodoCard
        type="doing"
        key={todo.title}
        title ={todo.title}
        manager = {todo.manager}
        content = {todo.content}
        deadline = {todo.deadline}
        createDate = {todo.createDate}
        dueDate = {todo.dueDate}
      />
    )
  })
  return (
    <TodoContainer>
      {allTodos}
    </TodoContainer>
  )

}


export default doingBox;