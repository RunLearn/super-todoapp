import Nav from "@common/components/Nav"
import InvitationContianer from "@todo/components/InvitationContianer"
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
                <InvitationContianer />
                <FlexBoxLayout flexType="colLeft">
                    <header>
                        <h1>Task List</h1>
                    </header>
                    <FlexBoxLayout flexType="rowAround" style={{width: "100%"}}>
                        <TodoListConatiner title="Todo" list={ todoList } backgroundColor="primary"/>
                        <TodoListConatiner title="Doing" list={ doingList } backgroundColor="success" />
                        <TodoListConatiner title="Done" list={ doneList } backgroundColor="info" />
                    </FlexBoxLayout>
                </FlexBoxLayout>
            </MainLayout>
        </>
    )
}

export default TodoPage