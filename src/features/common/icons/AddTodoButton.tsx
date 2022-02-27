import AddRowIconLayout, { AddRowIconLayoutProps } from "styles/icons/AddRowIconLayout"
import { FcAddRow } from 'react-icons/fc'
import { NextPage } from "next"

export interface AddTodoButtonProps extends AddRowIconLayoutProps {

}

const AddTodoButton: NextPage<AddTodoButtonProps> = (props) => {
    return (
        <AddRowIconLayout circleFill="primary">
            <FcAddRow />
        </AddRowIconLayout>
    )
}

export default AddTodoButton