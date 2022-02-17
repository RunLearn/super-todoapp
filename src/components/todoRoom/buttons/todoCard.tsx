import react from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDoing, removeDoing } from '../../../redux/todoRoom/Doings';
import { removeTodo } from '../../../redux/todoRoom/Todos';
import {removeDone} from '../../../redux/todoRoom/Dones';
// title: string
// manager: string
// content: string
// deadline: number
// createDate:number
// dueDate: number

//TODO : 카드 좌, 우 이동 기능 추가해야함
const TodoCard = (props: any) => {
  const dispatch = useDispatch();
  const [isFocusCard, setIsFocusCard] = useState(false);
  // const Todo_Doing = (e) => dispatch(addDoing( props ))


  return (
    <Button
      onMouseEnter={() => {setIsFocusCard(true)}}
      onMouseLeave={() => {setIsFocusCard(false)}}
    >
    {isFocusCard ?
      ( props.type =='todo' ?
        (
          <Focusing>
            <GridItemButton onClick={() => dispatch(removeTodo(props.id))}>삭제</GridItemButton>
            <GridItemButton>Doing으로</GridItemButton>
          </Focusing>
        )
        :
        (props.type == 'doing' ?
            <Focusing >
              <GridItemButton>Todo로</GridItemButton>
              <GridItemButton onClick={() => dispatch(removeDoing(props.id))}>삭제</GridItemButton>
              <GridItemButton>Done으로</GridItemButton>
            </Focusing>
          :
            <Focusing>
              <GridItemButton>Doing으로</GridItemButton>
              <GridItemButton onClick={() => dispatch(removeDone(props.id))}>삭제</GridItemButton>
            </Focusing>
        )
      )
      :
      <GridContainer>
        <GridTitle>{props.title}</GridTitle>
        <GridContent>{props.content}</GridContent>
        <GridManager>{props.manager}</GridManager>
        <GridDeadline>{props.deadline}</GridDeadline>
        <GridCreateDate>{props.createDate}</GridCreateDate>
        <GridDueDate>{props.dueDate}</GridDueDate>
      </GridContainer>
    }
    </Button>
  );
}
const GridTitle = styled.div`
  vertical-align: center;
`
const GridContent = styled.div`
  grid-column: 1;
  grid-row:2 / span 3;
`
const GridManager = styled.div`
`
const GridDeadline = styled.div`
`
const GridCreateDate = styled.div`
`
const GridDueDate = styled.div`
`
const GridContainer = styled.div`
  width: 100%;
  height: 100%;

  display:grid;
  align-items: center;
  grid-template-columns:67% 33%;
  grid-template-rows: repeat(4, 25%) ;
  
 
`

const Focusing = styled.div`
  width: 100%;
  height: 100%;

  display:flex;
  align-items: center;
`
const GridItemButton = styled.button`
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  
  /* 크기 */
  width: 100%;
  height: 100%;
  font-size: 1rem;

  /* 색상 */
  background: darkslateblue;
  &:hover {
    background: #339af0;
  }
  &:active {
    background: #1c7ed6;
  }  
`

const Button = styled.button`
  /* 공통 스타일 */
  border: none;
  border-radius: 4px;
  color: white;
  
  /* 크기 */
  width: 100%;
  height: 30%;
  font-size: 1rem;

  /* 색상 */
  background: darkslateblue;
  &:hover {
    background: #339af0;
    padding:0px
  }
  &:active {
    background: #1c7ed6;
  }

  /* 기타 */
`;


export default TodoCard;