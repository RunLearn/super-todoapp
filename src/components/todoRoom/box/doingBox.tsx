import react from 'react';
import styled from 'styled-components';
import TodoCard from '../buttons/todoCard';
import TodoContiner from './TodoContainer';

import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import TodoContainer from './TodoContainer';

const doingBox = () => {
  const todos = useSelector((state:RootState) => state.doing)
  const allTodos = todos.map( (todo:any) => {
    return(
      <TodoCard
        id={todo.id}
        key={todo.id}
        type="doing"
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
      <h1>Doing</h1>

      {allTodos}
    </TodoContainer>
  )

}


export default doingBox;