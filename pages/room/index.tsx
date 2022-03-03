import Nav from "@common/components/Nav"
import AddTodoItemForm from "@todo/components/AddTodoItemForm"
import TodoListCard from "@todo/components/TodoListCard"
import TodoRoomMainHeader from "@todo/components/TodoRoomMainHeader"
import { NextPage } from "next"
import { doingList, doneList, todoList } from "src/data/sample"
import FlexBoxLayout from "styles/divs/FlexBoxLayout"
import MainLayout from "styles/divs/MainLayout"
import { ReactiveFlexBoxLayout } from "styles/divs/ReactiveFlexBoxLayout"

const TodoPage: NextPage = () => {
    return (
        <>
            <header>
                <Nav menuIndex={1} />
            </header>
            <MainLayout>
                <TodoRoomMainHeader />
                <FlexBoxLayout flexType="colLeft" style={{paddingTop: "0.5rem"}}>
                    <ReactiveFlexBoxLayout style={{width: "100%", paddingTop: "1rem"}}>
                        <TodoListCard title="Todo" list={ todoList } backgroundColor="primary" />
                        <TodoListCard title="Doing" list={ doingList } backgroundColor="success" />
                        <TodoListCard title="Done" list={ doneList } backgroundColor="info" />
                    </ReactiveFlexBoxLayout>
                    <aside>
                        <AddTodoItemForm listName="todo" />
                    </aside>
                </FlexBoxLayout>
            </MainLayout>
        </>
    )
}

export default TodoPage