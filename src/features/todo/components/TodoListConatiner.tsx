import TodoItemSurface from "@todo/domain/TodoItemSurface"
import { NextPage } from "next"
import ListContainerCardLayout from "styles/divs/ListContainerCardLayout"
import TodoItemSurfaceCard from "./TodoItemSurfaceCard"

export interface TodoListContainerProps {
    title: string;
    list: TodoItemSurface[] | undefined;  // TodoItemDetail is enable too.
}

const TodoListConatiner: NextPage<TodoListContainerProps> = (props) => {
  return (
    <ListContainerCardLayout>
        <header>
            <h1>{ props.title }</h1>
        </header>
        <ul>
            <li>
                <TodoItemSurfaceCard title="Sample Item1 가나다라마바사아" name="홍길동" />
            </li>
            <li>
                <TodoItemSurfaceCard title="Sample Item2" name="김길동" deadline="2022-02-23" />
            </li>
            <li>
                <TodoItemSurfaceCard title="Sample Item3" name="고길동" deadline="2022-02-22" />
            </li>
            <li>
                <TodoItemSurfaceCard title="Sample Item4" name="대길이" deadline="2022-02-21" />
            </li>

            {
                props.list?.map((item, index, array)=>{
                    return (
                        <li key={ index }>
                            <TodoItemSurfaceCard title={ item.title } name={ item.title } deadline={ item.deadline } />
                        </li>
                    )
                })
            }
        </ul>
    </ListContainerCardLayout>
  )
}

export default TodoListConatiner