import { NextPage } from "next"
import StyledButton, { StyledButtonProps } from "../../../styles/buttons/StyledButton"


const DangerButton: NextPage<StyledButtonProps> = (props) => {
  return (
    <StyledButton buttonColor="danger" { ...props }>
        { props.children }
    </StyledButton>
  )
}

export default DangerButton