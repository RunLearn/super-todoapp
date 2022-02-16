import react from 'react';
import styled from 'styled-components';
import TodoBtn from '../buttons/todoButton';
import TodoContiner from './TodoContainer';

const doingBox = () => {
  return (
      <TodoContiner>
        <TodoBtn name="doing" />
      </TodoContiner>
  )

}


export default doingBox;