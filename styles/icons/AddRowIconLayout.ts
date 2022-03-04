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
            --circ-fill: ${ props.circleFill ?? "#00AA55" };
        `
    }}

    cursor: default;
    padding: 1px;
    transition: all 500ms;

    & * {
        transition: all 500ms;
    }

    svg {
        min-width: 30px;
        min-height: 30px;
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
        transform: scale(1.11);
        circle {
            fill: var(--circ-fill);
            stroke: white;
            stroke-width: 1px;
        }
    }

    &:active {
        transform: scale(1.0);
    }
`;

export default AddRowIconLayout