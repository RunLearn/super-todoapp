import { NextPage } from "next"
import StyledButton, { StyledButtonProps } from "../../../styles/buttons/StyledButton"


const SuccessButton: NextPage<StyledButtonProps> = (props) => {
  return (
    <StyledButton buttonColor="success" { ...props }>
        { props.children }
    </StyledButton>
  )
}

export default SuccessButton