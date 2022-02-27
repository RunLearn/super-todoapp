import TodoItemSurface from "@todo/domain/TodoItemSurface"
import { NextPage } from "next"
import ListContainerCardLayout, { ListContainerCardLayoutProps } from "styles/divs/ListContainerCardLayout"
import TodoItemSurfaceCard from "./TodoItemSurfaceCard"

export interface TodoListContainerProps extends ListContainerCardLayoutProps {
    title: string;
    list: TodoItemSurface[] | undefined;  // TodoItemDetail is enable too.
}

const TodoListConatiner: NextPage<TodoListContainerProps> = (props) => {
  return (
    <ListContainerCardLayout backgroundColor={ props.backgroundColor } titleColor={ props.titleColor }>
        <header>
            <h1>{ props.title }</h1>
        </header>
        <ul>
            {
                props.list?.map((item, index, array)=>{
                    return (
                        <li key={ index }>
                            <TodoItemSurfaceCard title={ item.title } name={ item.name } deadline={ item.deadline } />
                        </li>
                    )
                })
            }
        </ul>
    </ListContainerCardLayout>
  )
}

export default TodoListConatiner