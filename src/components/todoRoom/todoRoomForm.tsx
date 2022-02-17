import React from 'react';
import styled from 'styled-components';
import todos, { addTodo } from '../../redux/todoRoom/Todos'
import { useDispatch,useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useState} from 'react';

const TodoRoomForm = () => {

  const [todo, setTodo] = useState({
    title: "",
    manager: "",
    content: "",
    deadline: 1,
    createDate: 1,
    dueDate: 1,
  })

  const textChange = (e) => {
    const {name, value} = e.target;
    setTodo({...todo, [name]:value})
  }

  const dispatch = useDispatch();
  const temp = useSelector((state:RootState)=>state.todo);
  const todoDispatch =()=> dispatch(addTodo({
    title:todo.title,
    manager:todo.manager,
    content:todo.content,
    deadline:todo.deadline,
    createDate:todo.createDate,
    dueDate:todo.dueDate
  }))
  return(
    <>
      <Form>
        <InputText onChange={textChange} name="title" value={todo.title}></InputText>
        <InputText onChange={textChange} name="manager" value={todo.manager}></InputText>
        <InputText onChange={textChange} name="content" value={todo.content}></InputText>
        <InputText onChange={textChange} name="deadline" type={'number'} value={todo.deadline}></InputText>
        <InputText onChange={textChange} name="createDate" type={'number'} value={todo.createDate}></InputText>
        <InputText onChange={textChange} name="dueDate" type={'number'} value={todo.dueDate}></InputText>
      </Form>
        <SubmitButton onClick={todoDispatch}></SubmitButton>
      <button onClick={() => { console.log(temp) }}></button>
    </>
  )
}

const Form = styled.form`
`
const InputText = styled.input`
`
const SubmitButton = styled.button`
`

export default TodoRoomForm;