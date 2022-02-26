import styled, { css } from "styled-components";

interface ListContainerCardLayoutProps {
    backgroundColor?: string;
    fontColor?: string;
}

export const ListContainerCardLayout = styled.div<ListContainerCardLayoutProps>`
    ${(props) =>  props.theme.styleSet.flex.colCenter}

    ${(props) => css`
        --sub: ${props.theme.sub};
    `}

    background-color: ${(props) => props.theme.func.hexWithOpacity(props.backgroundColor ?? props.theme.main, 0.5)};
    border-radius: 5px;
    box-shadow: ${props => props.theme.shadowLarge};
    color: ${(props) => props.backgroundColor ?? props.theme.sub};
    font-weight: bold;

    padding: 1rem;
`;