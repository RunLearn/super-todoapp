import TodoItemSurface from "@todo/domain/TodoItemSurface"
import { NextPage } from "next"
import ListCardLayout, { ListCardLayoutProps } from "styles/divs/ListCardLayout"
import { AddRowIconLayoutProps } from "styles/icons/AddRowIconLayout"
import TodoItemSurfaceCard from "./TodoItemSurfaceCard"
import TodoListHeader from "./TodoListHeader"

export interface TodoListContainerProps extends ListCardLayoutProps, AddRowIconLayoutProps {
    title: string;
    list: TodoItemSurface[];  // TodoItemDetail is enable too.
}

const TodoListCard: NextPage<TodoListContainerProps> = (props) => {
  return (
    <ListCardLayout backgroundColor={ props.backgroundColor } titleColor={ props.titleColor }>
        <TodoListHeader title={ props.title } circleFill={ props.circleFill ?? props.backgroundColor } />
        <ul>
            {
                props.list.length > 0 && props.list.map((item, index, array)=>{
                    return (
                        <li key={ index }>
                            <TodoItemSurfaceCard id={ item.id } title={ item.title } name={ item.name } deadline={ item.deadline } />
                        </li>
                    )
                })
            }
        </ul>
    </ListCardLayout>
  )
}

export default TodoListCard