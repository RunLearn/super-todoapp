import { NextPage } from "next"
import StyledButton, { StyledButtonProps } from "../../../styles/buttons/StyledButton"


const InfoButton : NextPage<StyledButtonProps> = (props) => {
  return (
    <StyledButton buttonColor="info" { ...props }>
        { props.children }
    </StyledButton>
  )
}

export default InfoButton 