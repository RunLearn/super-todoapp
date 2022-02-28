import Nav from "@common/components/Nav"
import InvitationContianer from "@todo/components/InvitationContianer"
import TodoListConatiner from "@todo/components/TodoListConatiner"
import TodoRoomMainHeader from "@todo/components/TodoRoomMainHeader"
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
                <TodoRoomMainHeader />
                <FlexBoxLayout flexType="colLeft" style={{paddingTop: "0.5rem"}}>
                    <FlexBoxLayout flexType="rowAround" style={{width: "100%", paddingTop: "1rem"}}>
                        <TodoListConatiner title="Todo" list={ todoList } backgroundColor="primary" />
                        <TodoListConatiner title="Doing" list={ doingList } backgroundColor="success" />
                        <TodoListConatiner title="Done" list={ doneList } backgroundColor="info" />
                    </FlexBoxLayout>
                </FlexBoxLayout>
            </MainLayout>
        </>
    )
}

export default TodoPage