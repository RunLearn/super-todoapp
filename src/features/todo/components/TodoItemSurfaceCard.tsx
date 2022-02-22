import TodoItemSurface from "@todo/domain/TodoItemSurface"
import { getDdayTo } from "@todo/utils/todo-function"
import { NextPage } from "next"
import ItemSurfaceCardLayout from "styles/divs/ItemSurfaceCardLayout"

const TodoItemSurfaceCard:NextPage<TodoItemSurface> = (props) => {
    let dDay : number | undefined = undefined

    if(props.deadline) {
        dDay = getDdayTo(props.deadline)
    }

    return (
        <ItemSurfaceCardLayout>
            <ul>
                <li className="title">{ props.title }</li>
                <li className="name">{ props.name }</li>
                <li className="d-day">
                    {   dDay !== undefined &&
                        (
                            <>
                                { dDay > 0      &&  `D-${dDay}`  }
                                { dDay === 0    &&  `D-DAY`      }
                                { dDay < 0      &&  `D+${-dDay}` }
                            </>
                        )
                    }
                </li>
            </ul>
        </ItemSurfaceCardLayout>
    )
}

export default TodoItemSurfaceCard