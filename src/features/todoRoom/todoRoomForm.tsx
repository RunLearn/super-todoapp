import React from 'react';
import styled from 'styled-components';
import todos, { addTodo } from '../../redux/todoRoom/Todos'
import { useDispatch,useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useState} from 'react';
import { nanoid } from '@reduxjs/toolkit';

const TodoRoomForm = () => {

  const [todo, setTodo] = useState({
    title: "임시 제목",
    manager: "임시 담당자",
    content: "임시 내용",
    deadline: "2022-02-31",
    createDate: Date(),
    dueDate: "2022-02-28",
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
          <InputText onChange={textChange} id="deadline" name="deadline" type={'date'} value={todo.deadline}></InputText>
        </div>
        <div>
          <label htmlFor='createDate'>생성일 : </label>
           <InputText onChange={textChange} id="createDate" name="createDate" type={'date'} value={todo.createDate}></InputText>
        </div>
        <div>
          <label htmlFor='dueDate'>실제 마감일 : </label>
          <InputText onChange={textChange} id="dueDate" name="dueDate" type={'date'} value={todo.dueDate}></InputText>
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