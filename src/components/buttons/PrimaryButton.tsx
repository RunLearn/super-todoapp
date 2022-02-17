import { NextPage } from "next"
import StyledButton, { StyledButtonProps } from "../../../styles/buttons/StyledButton"


const PrimaryButton: NextPage<StyledButtonProps> = (props) => {
  return (
    <StyledButton buttonColor="primary" { ...props } >
        { props.children }
    </StyledButton>
  )
}

export default PrimaryButton