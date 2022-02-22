import styled, { css } from 'styled-components';
import { FlexType } from 'styles/styleSet/flex';

export interface ItemSurfaceCardLayout {
    flexType?: FlexType;
}

const ItemSurfaceCardLayout = styled.div<ItemSurfaceCardLayout>`
    ${(props) => {
        const flexType = props.flexType ?? 'rowAroundMiddle';
        console.log(props.theme.styleSet.flex[flexType])
        return css`
            ${props.theme.styleSet.flex[flexType]}
            ul {
                ${props.theme.styleSet.flex[flexType]}
            }
        `
    }}

    background-color: ${(props) => props.theme.light};
    border-radius: 5px;
    box-shadow: ${(props) => props.theme.shadowMedium};
    width: 300px;
    padding: 1rem;
    cursor: default;
    user-select: none;

    transition: 500ms;

    &:hover {
        transform: scale(1.05);
    }

    &>ul {
        width: 100%;
        height: 100%;
    }

    &>ul>li {
        word-break: break-word;
        width: 60px;
    }
    
    &>ul>li.title {
        font-weight: bold;
        width: 120px;
    }

    &>ul>li.d-day {
        font-size: 8pt;
    }

`;

export default ItemSurfaceCardLayout