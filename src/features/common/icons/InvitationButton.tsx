import { NextPage } from "next"
import { HiOutlineUserAdd } from "react-icons/hi"
import InvitationIconLayout from "styles/icons/InvitationIconLayout"

const InvitationButton: NextPage = () => {
    return (
        <InvitationIconLayout>
            <HiOutlineUserAdd />
        </InvitationIconLayout>
    )
}

export default InvitationButton