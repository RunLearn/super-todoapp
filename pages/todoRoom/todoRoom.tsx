import React from "react";
import Todo_btn  from  "../../src/components/todoRoom/buttons/Todo_btn"
import Doing_btn from  "../../src/components/todoRoom/buttons/Doing_btn"
import Done_btn from "../../src/components/todoRoom/buttons/Done_btn"

import StyledButton from '../../styles/todoRoom/todoButton/todoButton';


const todoRoom = () => {
  return (
    <div>
      <Todo_btn />
      <Doing_btn />
      <Done_btn />
      <StyledButton> asdfas </StyledButton>
    </div>
  )
}

export default todoRoom;