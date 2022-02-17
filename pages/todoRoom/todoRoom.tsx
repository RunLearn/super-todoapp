import React from "react";
import DoneBox from '../../src/components/todoRoom/box/doneBox';
import TodoBox from '../../src/components/todoRoom/box/todoBox';
import DoingBox from '../../src/components/todoRoom/box/doingBox';
import styled from 'styled-components';
import {ADDTODO} from '../../src/redux/todoRoom/Todos'
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../src/redux/store'

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
      <form onSubmit={(event) => {
        event.preventDefault();

        console.log(temp);
      }}>
        <input type='text' placeholder='이름'  />
        <input type='text' placeholder='담당자' />
        <input type='text' placeholder='내용' />
        <input type='text' placeholder='기한' />
        <input type='text' placeholder='생성일' />
        <input type='text' placeholder='끝난날' />
        <input type='submit' value="제출11"/>
      </form>

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