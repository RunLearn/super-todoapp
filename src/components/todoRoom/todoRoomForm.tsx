import React from 'react';
import styled from 'styled-components';
import todos, { addTodo } from '../../redux/todoRoom/Todos'
import { useDispatch,useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useState} from 'react';
import { nanoid } from '@reduxjs/toolkit';

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
  const todoDispatch =()=> {
    const id = nanoid();
    dispatch(addTodo({
    id:id,
    title:todo.title,
    manager:todo.manager,
    content:todo.content,
    deadline:todo.deadline,
    createDate:todo.createDate,
    dueDate:todo.dueDate
  }))
  console.log(id)
  }
  return(
    <>
      <Form>
        <div>
        <label htmlFor='tile'>투두 제목 : </label>
        <InputText onChange={textChange} id="title" name="title" value={todo.title}></InputText>
        </div>
        <div>
          <label htmlFor='manager'>담당자 : </label>
        <InputText onChange={textChange} id="manager" name="manager" value={todo.manager}></InputText>
        </div>
        <div>
          <label htmlFor='content'>내용 : </label>
           <InputText onChange={textChange} id="content" name="content" value={todo.content}></InputText>
        </div>
        <div>
          <label htmlFor='deadline'>마감일 : </label>
          <InputText onChange={textChange} id="deadline" name="deadline" type={'number'} value={todo.deadline}></InputText>
        </div>
        <div>
          <label htmlFor='createDate'>생성일 : </label>
           <InputText onChange={textChange} id="createDate" name="createDate" type={'number'} value={todo.createDate}></InputText>
        </div>
        <div>
          <label htmlFor='dueDate'>실제 마감일 : </label>
          <InputText onChange={textChange} id="dueDate" name="dueDate" type={'number'} value={todo.dueDate}></InputText>
        </div>
      </Form>
        <SubmitButton onClick={todoDispatch}>할일 등록!</SubmitButton>
    </>
  )
}

const Form = styled.form`
  display: flex;  
  flex-direction: column;
`
const InputText = styled.input`
  
`
const SubmitButton = styled.button`

`

export default TodoRoomForm;