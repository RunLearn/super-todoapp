import TodoItemSurface from "./TodoItemSurface";

interface TodoItemDetail extends TodoItemSurface {
    /* [inherited]
        id: string;
        title: string;
        name: string;
        deadline?: string;
    */
    content?: HTMLElement | string;
    createdAt: string;
    completedAt?: string;
}

export default TodoItemDetail