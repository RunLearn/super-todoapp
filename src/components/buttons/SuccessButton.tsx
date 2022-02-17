import { NextPage } from "next"
import StyledButton, { StyledButtonProps } from "../../../styles/buttons/StyledButton"


const SuccessButton: NextPage<StyledButtonProps> = (props) => {
  return (
    <StyledButton buttonType="success" { ...props }>
        { props.children }
    </StyledButton>
  )
}

export default SuccessButton