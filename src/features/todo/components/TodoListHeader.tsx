import { NextPage } from "next"
import FlexBoxLayout from "styles/divs/FlexBoxLayout"
import AddTodoButton, { AddTodoButtonProps } from "@common/icons/AddTodoButton"
import KebobButton from "@common/icons/KebobButton"

export interface TodoListHeaderProps extends AddTodoButtonProps {
    title: string;
}

const TodoListHeader: NextPage<TodoListHeaderProps> = (props) => {
    console.log(props.circleFill)
    return (
        <header>
            <FlexBoxLayout flexType="rowBetween">
                <h1 style={{cursor: "default"}}>{ props.title }</h1>
                <FlexBoxLayout flexType="rowBetween" style={{width: "60px"}}>
                    <AddTodoButton circleFill={ props.circleFill } />
                    <KebobButton />
                </FlexBoxLayout>
            </FlexBoxLayout>
        </header>
    )
}

export default TodoListHeader