import { NextPage } from "next"
import StyledButton, { StyledButtonProps } from "../../../styles/buttons/StyledButton"


const PrimaryButton: NextPage<StyledButtonProps> = (props) => {
  return (
    <StyledButton buttonType="dark" { ...props }>
        { props.children }
    </StyledButton>
  )
}

export default PrimaryButton