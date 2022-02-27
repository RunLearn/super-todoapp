import Nav from "@common/components/Nav"
import TodoListConatiner from "@todo/components/TodoListConatiner"
import { NextPage } from "next"
import { doingList, doneList, todoList } from "src/data/sample"
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
                    <TodoListConatiner title="Todo" list={ todoList } backgroundColor="primary"/>
                    <TodoListConatiner title="Doing" list={ doingList } backgroundColor="success" />
                    <TodoListConatiner title="Done" list={ doneList } backgroundColor="info" />
                </FlexBoxLayout>
            </MainLayout>
        </>
    )
}

export default TodoPage