import { NextPage } from "next"
import StyledButton, { StyledButtonProps } from "../../../styles/buttons/StyledButton"


const LightButton: NextPage<StyledButtonProps> = (props) => {
  return (
    <StyledButton buttonColor="light" { ...props }>
        { props.children }
    </StyledButton>
  )
}

export default LightButton