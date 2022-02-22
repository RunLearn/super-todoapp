import TodoItemSurface from "./TodoItemSurface";

interface TodoItemDetail extends TodoItemSurface {
    /* [inherited]
        title: string;
        name: string;
        deadline?: string;
    */
    content: HTMLElement | string;
    createdAt: string;
    completedAt?: string;
}

export default TodoItemDetail