import React from "react";
import DoneBox from '../../src/components/todoRoom/box/doneBox';
import TodoBox from '../../src/components/todoRoom/box/todoBox';
import DoingBox from '../../src/components/todoRoom/box/doingBox';
import styled from 'styled-components';
import {addTodo} from '../../src/redux/todoRoom/Todos'
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../src/redux/store'
import TodoRoomForm from '../../src/components/todoRoom/todoRoomForm';


const todoRoom = () => {
  const dispatch=useDispatch();
  // const addTodo=() => {
  //   dispatch(ADDTODO)
  // }
  const temp = useSelector((state:RootState)=>state.todo);
  console.log(temp)
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
  align-items: center;
  justify-content: space-between;
  
  border: 1px solid black;
  padding: 30px;
`


export default todoRoom;