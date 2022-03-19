import {createSlice, PayloadAction, Slice, SliceCaseReducers} from '@reduxjs/toolkit';
import { RootState } from 'src/store';
import TodoItemDetail from "@todo/domain/TodoItemDetail";

// === interface
// 이 슬라이스가 관리할 스테이트의 타입, 초깃값
export interface TodoListState {
    todos: TodoItemDetail[];
    doings: TodoItemDetail[];
    dones: TodoItemDetail[];
}

// === createSlice( {...} )에 필요한 것들:
//  - name          이 슬라이스의 이름
//  - initialState  이 슬라이스가 관리하는 '스테이트'의 초깃값
//  - reducers      이 슬라이스가 관리하는 '스테이트 조작하는 함수들'
const initialState: TodoListState = {
    todos: [],
    doings: [],
    dones: [],
};

const reducers: any = {
    addTodoItem: function (state: TodoListState, action: PayloadAction<TodoItemDetail>) {
        state.todos = [ ...state.todos, action.payload ]
    },
    addDoingItem: function (state: TodoListState, action: PayloadAction<TodoItemDetail>) {
        state.doings = [ ...state.doings, action.payload ]
    },
    addDoneItem: function (state: TodoListState, action: PayloadAction<TodoItemDetail>) {
        state.dones = [ ...state.dones, action.payload ]
    },
}

export const todolistSlice: Slice = createSlice({
    name: 'todolist',
    initialState,
    reducers,
});

export const { addTodoItem, addDoingItem, addDoneItem } = todolistSlice.actions;

// 사용할 때 const 상태 = useAppSelector(selectTodolist);
export const selectTodolist = (state: RootState) => state.todoList;

export default todolistSlice.reducer;