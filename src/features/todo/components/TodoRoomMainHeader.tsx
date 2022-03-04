import { NextPage } from "next"
import FlexBoxLayout from "styles/divs/FlexBoxLayout"
import InvitationContianer from "./InvitationContianer"

const TodoRoomMainHeader: NextPage = () => {
    return (
        <FlexBoxLayout flexType="rowRight"
            style={{
                width: "100%",
                paddingRight: "3rem",
            }}
        >
            <InvitationContianer />
        </FlexBoxLayout>
    )
}

export default TodoRoomMainHeader