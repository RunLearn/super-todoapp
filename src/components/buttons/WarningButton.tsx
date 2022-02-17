import { NextPage } from "next"
import StyledButton, { StyledButtonProps } from "../../../styles/buttons/StyledButton"


const WarningButton: NextPage<StyledButtonProps> = (props) => {
  return (
    <StyledButton buttonColor="warning" { ...props }>
        { props.children }
    </StyledButton>
  )
}

export default WarningButton