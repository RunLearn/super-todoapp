import FlexBoxLayout from "styles/divs/FlexBoxLayout"
import { NextPage } from "next"
import InvitationButton from "@common/icons/InvitationButton"
import CloseButton from "@common/icons/CloseButton"

const InvitationContianer: NextPage = () => {
    return (
        <FlexBoxLayout flexType="rowRightMiddle">
            <CloseButton />
            <InvitationButton />
        </FlexBoxLayout>
    )
}

export default InvitationContianer