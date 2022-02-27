import Nav from "@common/components/Nav"
import TodoListConatiner from "@todo/components/TodoListConatiner"
import { NextPage } from "next"
import FlexBoxLayout from "styles/divs/FlexBoxLayout"
import MainLayout from "styles/divs/MainLayout"

const TodoPage: NextPage = () => {
    return (
        <>
            <header>
                <Nav menuIndex={1} />
            </header>
            <MainLayout>
                <FlexBoxLayout flexType="rowAround">
                    <TodoListConatiner title="Todo" list={ undefined } backgroundColor="primary"/>
                    <TodoListConatiner title="Doing" list={ undefined } backgroundColor="success" />
                    <TodoListConatiner title="Done" list={ undefined } backgroundColor="info" />
                </FlexBoxLayout>
            </MainLayout>
        </>
    )
}

export default TodoPage