import Nav from "@common/components/Nav"
import { NextPage } from "next"
import MainLayout from "styles/divs/MainLayout"

const TodoPage: NextPage = () => {
    return (
        <>
            <header>
                <Nav selectedIndex={1} />
            </header>
            <MainLayout>
                <h3>Todo List</h3>
            </MainLayout>
        </>
    )
}

export default TodoPage