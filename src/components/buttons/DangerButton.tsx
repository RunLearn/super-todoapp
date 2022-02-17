import { NextPage } from "next"
import StyledButton, { StyledButtonProps } from "../../../styles/buttons/StyledButton"


const PrimaryButton: NextPage<StyledButtonProps> = (props) => {
  return (
    <StyledButton buttonType="danger" { ...props }>
        { props.children }
    </StyledButton>
  )
}

export default PrimaryButton