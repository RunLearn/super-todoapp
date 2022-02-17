import styled, { css } from "styled-components";

interface Props {
  borderRadius?: string;
}

const PrimaryButton = styled.button<Props>`
  background-color: ${ props => props.theme.palette.primary };
  border-style: solid;
  border-radius: ${ props => props.borderRadius ?? "5px" };
  border-color: black;
  padding: 2px;
`

export default PrimaryButton