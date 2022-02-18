import react from 'react';
import styled from 'styled-components';
import TodoCard from '../buttons/todoCard';
import TodoContainer from './TodoContainer';

import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

const todoBox = () => {

  const todos = useSelector((state:RootState) => state.todo)
  const allTodos = todos.map( (todo:any) => {
    return(
      <TodoCard
        id={todo.id}
        key={todo.id}
        type="todo"
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
        <h1>Todo</h1>
        {allTodos}
      </TodoContainer>
  )

}

export default todoBox;