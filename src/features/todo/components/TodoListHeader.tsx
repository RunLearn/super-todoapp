import { NextPage } from "next"
import FlexBoxLayout from "styles/divs/FlexBoxLayout"
import AddTodoButton, { AddTodoButtonProps } from "@common/icons/AddTodoButton"

export interface TodoListHeaderProps extends AddTodoButtonProps {
    title: string;
}

const TodoListHeader: NextPage<TodoListHeaderProps> = (props) => {
    console.log(props.circleFill)
    return (
        <header>
            <FlexBoxLayout flexType="rowBetween">
                <h1 style={{cursor: "default"}}>{ props.title }</h1>
                <FlexBoxLayout flexType="rowRight" style={{width: "60px"}}>
                    <AddTodoButton circleFill={ props.circleFill } />
                </FlexBoxLayout>
            </FlexBoxLayout>
        </header>
    )
}

export default TodoListHeader