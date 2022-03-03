import { NextPage } from "next"
import ButtonLayout from "styles/buttons/ButtonLayout";
import AddTodoFormLayout from "styles/divs/AddTodoFormLayout"
import FlexBoxLayout from "styles/divs/FlexBoxLayout"
import { ReactiveFlexBoxLayout } from "styles/divs/ReactiveFlexBoxLayout";

export interface AddTodoItemFormProps {
    listName: 'todo' | 'doing' | 'done';
}

const AddTodoItemForm: NextPage<AddTodoItemFormProps> = (props) => {

    // FIXME Now using client time. If it is not correct, fix it.
    const today = new Date().toISOString().substring(0, 10);

    return (
        <AddTodoFormLayout>
            <header>
                <h1>Add to { props.listName?.toUpperCase() ?? "<Error: No list selected...>" }</h1>
            </header>
            <ReactiveFlexBoxLayout horizontalAlign="left" className="input-container">
                <div className="input-cell">
                    <input type="text" name="title"
                        placeholder="Title"
                        className="necessary"
                        tabIndex={ 1 } />
                    <span />
                </div>
                <div className="input-cell">
                    <input type="text" name="name"
                        placeholder="Name"
                        list="users"
                        className="necessary"
                        tabIndex={ 2 } />
                    <span />
                    <datalist id="users">
                        <option value="홍길동" />
                        <option value="김길동" />
                        <option value="고길동" />
                        <option value="대길이" />
                    </datalist>
                </div>
            </ReactiveFlexBoxLayout>
            <div className="input-container">
                <div className="textarea-cell">
                    <textarea name="content"
                        placeholder="Content"
                        tabIndex={ 3 } />
                    <span />
                </div>
            </div>
            <FlexBoxLayout flexType="rowBetweenMiddle" className="input-container deadline-container">
                <h6>Deadline</h6>
                <ReactiveFlexBoxLayout>
                    <div className="input-cell">
                        <input type="text" name="deadline-year"
                            placeholder={ today.substring(0, 4) }
                            tabIndex={ 4 } />
                        <span />
                    </div>
                    <div className="input-cell">
                        <input type="text" name="deadline-month"
                            placeholder={ today.substring(5, 7) }
                            tabIndex={ 5 } />
                        <span />
                    </div>
                    <div className="input-cell">
                        <input type="text" name="deadline-date"
                            placeholder={ today.substring(8, 10) }
                            tabIndex={ 6 } />
                        <span />
                    </div>
                </ReactiveFlexBoxLayout>
            </FlexBoxLayout>
            <FlexBoxLayout flexType="rowRightMiddle" className="button-group">
                <ButtonLayout className="main" tabIndex={ 7 }>Add</ButtonLayout>
                <ButtonLayout className="light" tabIndex={ 8 }>Cancel</ButtonLayout>
            </FlexBoxLayout>
        </AddTodoFormLayout>
    )
}

export default AddTodoItemForm