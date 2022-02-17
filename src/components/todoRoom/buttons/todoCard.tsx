import react from 'react';
import styled from 'styled-components';
import { useState } from 'react';

//
// title: string
// manager: string
// content: string
// deadline: number
// createDate:number
// dueDate: number


const TodoCard = (props: any) => {

  const [isFocusCard, setIsFocusCard] = useState(false);

  return (
    <Button
      onMouseEnter={() => {setIsFocusCard(true)}}
      onMouseLeave={() => {setIsFocusCard(false)}}
    >
    {isFocusCard ?
      ( props.type =='todo' ?
        (
          <Focusing>
            <GridItemButton>삭제</GridItemButton>
            <GridItemButton>Doing으로</GridItemButton>
          </Focusing>
        )
        :
        (props.type == 'doing' ?
            <Focusing >
              <GridItemButton>Todo로</GridItemButton>
              <GridItemButton>삭제</GridItemButton>
              <GridItemButton>Done으로</GridItemButton>
            </Focusing>
          :
            <Focusing>
              <GridItemButton>Doing으로</GridItemButton>
              <GridItemButton>삭제</GridItemButton>
            </Focusing>
        )
      )
      :
      <GridContainer>
        <GridTitle>title</GridTitle>
        <GridContent>content</GridContent>
        <GridManager>manager</GridManager>
        <GridDeadline>deadline</GridDeadline>
        <GridCreateDate>createDate</GridCreateDate>
        <GridDueDate>dueDate</GridDueDate>
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