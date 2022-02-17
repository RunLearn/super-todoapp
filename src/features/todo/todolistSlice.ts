import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

// === interface
// 투두리스트에 담을 하나하나의 객체(TODO 기획에 맞추어 속성 추가하여야 함.)
export interface TodoItem {
  title: string;
  name: string; /* 담당자 */
  content: string;
  deadline: string;
  createdAt: string;
}

// 이 슬라이스가 관리할 스테이트의 초깃값
export interface TodoListState {
  todos: TodoItem[];
  doing: TodoItem[];
  done: TodoItem[];
}

// === createSlice( {...} )에 필요한 것들:
//  - name          이 슬라이스의 이름
//  - initialState  이 슬라이스가 관리하는 '스테이트'의 초깃값
//  - reducers      이 슬라이스가 관리하는 '스테이트 조작하는 함수들'
const initialState: TodoListState = {
  todos: [],
  doing: [],
  done: [],
};

const reducers = {
  addTodoItem: function (state: TodoListState, action: PayloadAction<TodoItem>) {
    state.todos = [ ...state.todos, action.payload ]
  },
  addDoingItem: function (state: TodoListState, action: PayloadAction<TodoItem>) {
    state.doing = [ ...state.doing, action.payload ]
  },
  addDoneItem: function (state: TodoListState, action: PayloadAction<TodoItem>) {
    state.done = [ ...state.done, action.payload ]
  },
}

export const todolistSlice = createSlice({
  name: 'todolist',
  initialState,
  reducers,
});

export const { addTodoItem, addDoingItem, addDoneItem } = todolistSlice.actions;

// 사용할 때 const 변수명 = useAppSelector(selectTodolist);
export const selectTodolist = (state: RootState) => state.todolist;

export default todolistSlice.reducer;
