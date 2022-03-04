import styled, { css } from "styled-components";

const CloseIconLayout = styled.div`
    ${(props) => css`
        --sub: ${props.theme.sub};
        --svg-w: 1.3em;
        --svg-h: 1.3em;
    `}

    position: absolute;
    left: calc(var(--svg-w) * -0.6);
    width: calc(var(--svg-w) * 1.3);
    height: calc(var(--svg-h) * 1.3);

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    background-color: var(--sub);
    border-radius: calc(var(--svg-w) * 0.7);
    box-shadow: 5px 0px 5px rgb(0 0 0 / 0.1);
    margin: 0px;
    padding-left: calc(var(--svg-w) * 0.15);
    
    svg {
        fill: gray;
        transition: all 500ms;
        width: var(--svg-w);
        height: var(--svg-h);
    }

    &:hover {
        svg {
            fill: black;
        }
    }
`;

export default CloseIconLayout