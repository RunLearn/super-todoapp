import { useAppSelector, useAppDispatch } from '../../hooks';
import {
    addTodoItem,
    addDoingItem,
    addDoneItem,
    selectTodolist,
    TodoItem,
} from '../../features/todo/todolistSlice';
import DarkButton from '../buttons/DarkButton';
import LightButton from '../buttons/LightButton';

const SampleRedux = () => {
    const todolist = useAppSelector(selectTodolist);    // get state: 우리가 페이지에서 보여줄.
    const dispatch = useAppDispatch();                  // set state: 우리가 리덕스에서 조작할.

    const getValueById = (id:string) => (document.getElementById(id) as HTMLInputElement).value

    return (
        <div>
            <header><p>SampleRedux</p></header>
            <div>
                <input id="title" value="다이어트" />
                <input id="name" value="홍길동" />
                <input id="content" value="다 eat" />
                <input id="deadline" value="2025-12-31" />
                <input id="createdAt" readOnly={ true } value={ new Date().toISOString().slice(0, 10) } />
            </div>
            <div>
                <DarkButton onClick={(event)=>{
                    const todoItem : TodoItem = {
                        title: getValueById('title'),
                        name: getValueById('name'),
                        content: getValueById('content'),
                        deadline: getValueById('deadline'),
                        createdAt: getValueById('createdAt'),
                    }
                    
                    dispatch(addTodoItem(todoItem))
                }} 
                >추가</DarkButton>
            </div>
            <div>
                <LightButton buttonColor='#888888' onClick={()=>{
                    console.log(todolist)
                }}
                >콘솔창에 출력해 보기
                </LightButton>
            </div>
        </div>
    )
}

export default SampleRedux