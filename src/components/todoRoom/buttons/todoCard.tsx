import react from 'react';
import styled from 'styled-components';
import internal from 'stream';

const TodoCard = (props: any) => {
  return (
    <Button>
      {props.name}
    </Button>
  );
}

const Button = styled.button`
  /* 공통 스타일 */
  border: none;
  border-radius: 4px;
  color: white;
  
  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  /* 색상 */
  background: #228be6;
  &:hover {
    background: #339af0;
  }
  &:active {
    background: #1c7ed6;
  }

  /* 기타 */
`;


export default TodoCard;