import styled, { css } from "styled-components";
import { palette } from "styles/theme";

export interface AddRowIconLayoutProps {
    circleFill?: string;
}

const AddRowIconLayout = styled.div<AddRowIconLayoutProps>`
    ${(props) => {
        if(props.circleFill && Object.keys(palette).includes(props.circleFill)) {
            props.circleFill = props.theme[props.circleFill]
        }

        return css`
            --circ-fill: ${props.circleFill ?? props.theme.primary};
        `
    }}

    cursor: pointer;
    padding: 1px;
    transition: all 500ms;

    & * {
        transition: all 500ms;
    }

    path {
        fill: #FFF;
    }

    circle {
        fill: #AAA;
    }

    rect {
        fill: #FFF;
    }

    &:hover {
        transform: scale(1.5);
        circle {
            fill: var(--circ-fill);
            stroke: white;
            stroke-width: 1px;
        }
    }

    &:active {
        transform: scale(1.25);
    }
`;

export default AddRowIconLayout