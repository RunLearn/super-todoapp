import FlexBoxLayout from "styles/divs/FlexBoxLayout"
import { NextPage } from "next"
import InvitationButton from "@common/icons/InvitationButton"
import InvitationForm from "./InvitationForm"

const InvitationContianer: NextPage = () => {
    return (
        <FlexBoxLayout flexType="colRightMiddleFliplr" style={{paddingTop: "1rem", paddingBottom: "0.5rem"}}>
            <InvitationButton />
            <InvitationForm />
        </FlexBoxLayout>
    )
}

export default InvitationContianer