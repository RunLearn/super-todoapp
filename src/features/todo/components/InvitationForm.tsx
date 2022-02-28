import FlexBoxLayout from "styles/divs/FlexBoxLayout"
import CloseButton from "@common/icons/CloseButton"
import { NextPage } from "next"
import InputTextLayout from "styles/inputs/InputTextLayout"
import InvitationFormLayout from "styles/divs/InvitationFormLayout"
import SendButton from "@common/icons/SendButton"

const InvitationForm: NextPage = () => {
    return (
        <InvitationFormLayout className="invitation-form">
            <CloseButton />
            <span></span>
            <FlexBoxLayout flexType="rowBetweenMiddle">
                <span style={{fontSize: "10pt"}}>User Name</span>
                <InputTextLayout />
            </FlexBoxLayout>
            <SendButton />
        </InvitationFormLayout>
    )
}

export default InvitationForm