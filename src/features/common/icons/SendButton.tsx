import { NextPage } from "next"
import { RiSendPlaneFill } from "react-icons/ri"
import SendIconLayout from "styles/icons/SendIconLayout"

const SendButton: NextPage = () => {
    const addBounce = (event: React.MouseEvent<HTMLElement>) => {
        const me = event.target as HTMLElement
        document.querySelector('.send-btn svg')?.classList.add('bounce')
    }

    const removeBounce = (event: React.MouseEvent<HTMLElement>) => {
        document.querySelector('.send-btn svg')?.classList.remove('bounce')
    }

    return (
        <SendIconLayout className="send-btn"
            onMouseEnter={ addBounce }
            onMouseLeave={ removeBounce }
            onClick={ removeBounce }
        >
            <RiSendPlaneFill />
        </SendIconLayout>
    )
}

export default SendButton