import react from 'react';
import styled from 'styled-components';
import TodoBtn from '../buttons/todoCard';
import TodoContainer from './TodoContainer';

const todoBox = () => {
  return (
      <TodoContainer>
        <TodoBtn name="todo"/>
      </TodoContainer>
  )

}

export default todoBox;