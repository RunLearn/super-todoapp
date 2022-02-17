import react from 'react';
import styled from 'styled-components';
import TodoBtn from '../buttons/todoCard';
import TodoContainer from './TodoContainer';


const doneBox = () => {
  return (
      <TodoContainer>
        <TodoBtn name="done"/>
      </TodoContainer>
  )

}

export default doneBox;