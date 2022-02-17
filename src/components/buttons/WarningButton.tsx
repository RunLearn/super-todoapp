import { NextPage } from "next"
import StyledButton, { StyledButtonProps } from "../../../styles/buttons/StyledButton"


const SecondaryButton: NextPage<StyledButtonProps> = (props) => {
  return (
    <StyledButton buttonType="warning" { ...props }>
        { props.children }
    </StyledButton>
  )
}

export default SecondaryButton