import styled, { css } from "styled-components";

export type StyledButtonProps = {
  buttonColor?: string;
  borderRadius?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const StyledButton = styled.button<StyledButtonProps>`
  padding: 4px;

  transition: 150ms;
  &:active {
    transform: scaleY(.95);
  }

  ${props => {
    const btnColor = props.buttonColor ?? "primary"
    return css`
      background-color: ${ props.theme.palette[btnColor] ?? btnColor };
      color: ${ props.theme.fontColor[btnColor] };
      border-radius: ${ props.borderRadius ?? "5px" };
    `
  }}
`

export default StyledButton