import Nav from "@common/components/Nav"
import TodoListConatiner from "@todo/components/TodoListConatiner"
import { NextPage } from "next"
import FlexBoxLayout from "styles/divs/FlexBoxLayout"
import MainLayout from "styles/divs/MainLayout"

const TodoPage: NextPage = () => {
    return (
        <>
            <header>
                <Nav selectedIndex={1} />
            </header>
            <MainLayout>
                <FlexBoxLayout flexType="rowAround">
                    <TodoListConatiner title="Todo" list={ undefined } />
                    <TodoListConatiner title="Doing" list={ undefined } backgroundColor="#cc9a7b" />
                    <TodoListConatiner title="Done" list={ undefined } backgroundColor="#9acc7b" />
                </FlexBoxLayout>
            </MainLayout>
        </>
    )
}

export default TodoPage