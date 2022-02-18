import React from "react";
import DoneBox from '../../src/components/todoRoom/box/doneBox';
import TodoBox from '../../src/components/todoRoom/box/todoBox';
import DoingBox from '../../src/components/todoRoom/box/doingBox';
import styled, { ThemeContext } from 'styled-components';
import {addTodo} from '../../src/redux/todoRoom/Todos'
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../src/redux/store'
import TodoRoomForm from '../../src/components/todoRoom/todoRoomForm';
import { theme as Theme} from '../../styles/theme';

const todoRoom = () => {
  const dispatch=useDispatch();
  // const addDoing=() => {
  //   dispatch(ADDTODO)
  // }
  const temp = useSelector((state:RootState)=>state.todo);

  return (
    <>
      <FlexContainer>
        <TodoBox />
        <DoingBox />
        <DoneBox />
      </FlexContainer>
      <TodoRoomForm></TodoRoomForm>
    </>
  )
}

const FlexContainer = styled.div`
  display: flex;
  align-items: first;
  justify-content: space-between;
  
  height: 100%;
  padding: 30px;
`


export default todoRoom;