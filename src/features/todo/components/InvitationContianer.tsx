import FlexBoxLayout from "styles/divs/FlexBoxLayout"
import { NextPage } from "next"
import InvitationButton from "@common/icons/InvitationButton"
import InvitationForm from "./InvitationForm"

const InvitationContianer: NextPage = () => {
    return (
        <FlexBoxLayout flexType="rowRightMiddle">
            <InvitationForm />
            <InvitationButton />
        </FlexBoxLayout>
    )
}

export default InvitationContianer