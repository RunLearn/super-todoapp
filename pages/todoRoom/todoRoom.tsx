import React from "react";
import DoneBox from '../../src/components/todoRoom/box/doneBox';
import TodoBox from '../../src/components/todoRoom/box/todoBox';
import DoingBox from '../../src/components/todoRoom/box/doingBox';
import styled from 'styled-components';

const todoRoom = () => {
  return (
    <FlexContainer>
      <TodoBox />
      <DoingBox />
      <DoneBox />
    </FlexContainer>
  )
}

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  border: 1px solid black;
  padding: 30px;
`


export default todoRoom;