import react from 'react';
import styled, { keyframes } from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDoing, removeDoing } from '../../../redux/todoRoom/Doings';
import { addTodo, removeTodo } from '../../../redux/todoRoom/Todos';
import { addDone, removeDone } from '../../../redux/todoRoom/Dones';

// title: string
// manager: string
// content: string
// deadline: number
// createDate:number
// dueDate: number

const TodoCard = (props: any) => {
  const dispatch = useDispatch();
  const [isFocusCard, setIsFocusCard] = useState(false);

  const todoDoing = (id) => {
    dispatch(addDoing(props))
    dispatch(removeTodo(id))
  }

  const doingDone = (id) => {
    dispatch(addDone(props))
    dispatch(removeDoing(id))
  }

  const doneDoing = (id) => {
    dispatch(addDoing(props))
    dispatch(removeDone(id))
  }

  const doingTodo = (id) => {
    dispatch(addTodo(props))
    dispatch(removeDoing(id))
  }


  return (
    <Button
      onMouseEnter={() => {setIsFocusCard(true)}}
      onMouseLeave={() => {setIsFocusCard(false)}}
    >
    {isFocusCard ?
      ( props.type =='todo' ?
        (
          <Focusing>
            {/*<GridItemButton onClick={() => dispatch(removeTodo(props.id))}>삭제</GridItemButton>*/}
            <WhenFocus onClick={() => dispatch(removeTodo(props.id)) }>삭제</WhenFocus>
            <WhenFocus
              onClick={() => todoDoing(props.id)}
              style={{borderLeft: "1px dashed #A89797"}}
            >Doing으로</WhenFocus>
          </Focusing>
        )
        :
        (props.type == 'doing' ?
            <Focusing >
              <WhenFocus onClick={() => doingTodo(props.id)}>Todo로</WhenFocus>
              <WhenFocus
                onClick={() => dispatch(removeDoing(props.id))}
                style={{borderLeft: "1px dashed #A89797"}}
              >삭제</WhenFocus>
              <WhenFocus
                onClick={() => doingDone(props.id)}
                style={{borderLeft: "1px dashed #A89797"}}
              >Done으로</WhenFocus>
            </Focusing>
          :
            <Focusing>
              <WhenFocus onClick={() => doneDoing(props.id)}>Doing으로</WhenFocus>
              <WhenFocus
                onClick={() => dispatch(removeDone(props.id))}
                style={{borderLeft: "1px dashed #A89797"}}
              >삭제</WhenFocus>
            </Focusing>
        )
      )
      :
      <GridContainer a={isFocusCard} >
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
  grid-column: 1;
  height: 100%;
  grid-row: 1 / span 2;
  
  border-bottom: 1px dashed #A89797;
  border-right: 1px dashed #A89797;

  display: flex;
  justify-content: center;
  align-items: center;
`
const GridContent = styled.div`
  
  height: 100%;
  grid-column: 1;
  grid-row:3 / span 4;

  border-right: 1px dashed black;
  
  display: flex;
  justify-content: center;
  align-items: center;
`
const GridManager = styled.div`
  height: 100% ;
  
  display: flex;
  justify-content: center;
  align-items: center;
`
const GridDeadline = styled.div`
  height: 100% ;

  border-top: 1px dashed #A89797;

  display: flex;
  justify-content: center;
  align-items: center;

`
const GridCreateDate = styled.div`
  height: 100% ;

  border-top: 1px dashed #A89797;

  display: flex;
  justify-content: center;
  align-items: center;

`
const GridDueDate = styled.div`
  height: 100% ;

  border-top: 1px dashed #A89797;

  display: flex;
  justify-content: center;
  align-items: center;

`

const cardFocusAnimation = keyframes`
  from {
    background: #97A2A8;
    color: whitesmoke;
  }
  to {
    background: whitesmoke ;
    color: #97A2A8; 
  }
`
const GridContainer = styled.div`
  width: 100%;
  height: 100%;
 
  display:grid;
  align-items: center;
  grid-template-columns:67% 33%;
  grid-template-rows: repeat(4, 25%) ;

  justify-content: center;
  
  border: none;
  border-radius: 4px;
  background: whitesmoke;
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${cardFocusAnimation};
  animation-fill-mode: forwards;
`

const Focusing = styled.div`
  width: 100%;
  height: 100%;
  
  display:flex;
  align-items: center;
`

const WhenFocus = styled.button`
  border: none;
  border-radius: 4px;
  
  cursor: pointer;
  
  /* 크기 */
  width: 100%;
  height: 100%;
  font-size: 1rem;

  /* 색상 */
  background: whitesmoke;
  

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${cardFocusAnimation};
  animation-fill-mode: forwards;
`

const Button = styled.button`
  
  border: 3px solid  #F5F4DC;
  
  padding: 5px;
  margin: 5px 0px ;
  
  width: 100%;
  height: 25vh;
  
  font-size: 1em;
  color: #97A2A8;
  
  /* 색상 */
  background: white;
`;


export default TodoCard;