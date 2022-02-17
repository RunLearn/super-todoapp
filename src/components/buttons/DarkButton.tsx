import { NextPage } from "next"
import StyledButton, { StyledButtonProps } from "../../../styles/buttons/StyledButton"


const DarkButton: NextPage<StyledButtonProps> = (props) => {
  return (
    <StyledButton buttonColor="dark" { ...props }>
        { props.children }
    </StyledButton>
  )
}

export default DarkButton