import styled, { css } from "styled-components";

interface ListContainerCardLayoutProps {
    backgroundColor?: string;
    titleColor?: string;
}

export const ListContainerCardLayout = styled.div<ListContainerCardLayoutProps>`
    ${(props) =>  props.theme.styleSet.flex.colCenter}

    ${(props) => {
        const { func } = props.theme

        return css`
            --bg-color: ${func.hexWithOpacity(props.backgroundColor ?? props.theme.main, 0.5)};
            --title-color: ${ props.backgroundColor ?? props.theme.sub };
            --shadow: ${props.theme.shadowLarge};
    `}}

    background-color: var(--bg-color);
    border-radius: 5px;
    box-shadow: ${props => props.theme.shadowLarge};
    padding: 1rem;

    header {
        color: var(--title-color);
        font-weight: bold;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
        padding-bottom: 0.5rem;
        width: 100%;
    }
`;