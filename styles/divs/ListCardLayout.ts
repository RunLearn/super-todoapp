import styled, { css } from "styled-components";
import { palette } from "styles/theme";

export interface ListCardLayoutProps {
    backgroundColor?: string;
    titleColor?: string;
}

const ListCardLayout = styled.div<ListCardLayoutProps>`
    ${(props) =>  props.theme.styleSet.flex.colCenter}

    ${(props) => {
        const { func } = props.theme
        if(props.backgroundColor
                && Object.keys(palette).includes(props.backgroundColor)) {
            props.backgroundColor = props.theme[props.backgroundColor]
        }

        return css`
            --bg-color: ${func.hexWithOpacity(props.backgroundColor ?? props.theme.main, 0.5)};
            --title-color: ${ props.titleColor ?? props.theme.sub };
            --shadow: ${props.theme.shadowLarge};
        `
    }}

    background-color: var(--bg-color);
    border-radius: 5px;
    box-shadow: ${props => props.theme.shadowLarge};
    margin-bottom: 1rem;
    padding: 1rem;

    header {
        color: var(--title-color);
        font-weight: bold;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
        padding-bottom: 0.5rem;
        width: 100%;

        h1 {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            
            min-height: 2rem;
            font-size: 14pt;
        }
    }
`;

export default ListCardLayout