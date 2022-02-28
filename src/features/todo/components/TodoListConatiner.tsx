import TodoItemSurface from "@todo/domain/TodoItemSurface"
import { NextPage } from "next"
import ListContainerCardLayout, { ListContainerCardLayoutProps } from "styles/divs/ListContainerCardLayout"
import { AddRowIconLayoutProps } from "styles/icons/AddRowIconLayout"
import TodoItemSurfaceCard from "./TodoItemSurfaceCard"
import TodoListHeader from "./TodoListHeader"

export interface TodoListContainerProps extends ListContainerCardLayoutProps, AddRowIconLayoutProps {
    title: string;
    list: TodoItemSurface[] | undefined;  // TodoItemDetail is enable too.
}

const TodoListConatiner: NextPage<TodoListContainerProps> = (props) => {
  return (
    <ListContainerCardLayout backgroundColor={ props.backgroundColor } titleColor={ props.titleColor }>
        <TodoListHeader title={ props.title } circleFill={ props.circleFill ?? props.backgroundColor } />
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