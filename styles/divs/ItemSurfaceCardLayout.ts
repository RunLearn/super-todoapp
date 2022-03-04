import styled, { css } from 'styled-components';
import { FlexType } from 'styles/styleSet/flex';

export interface ItemSurfaceCardLayout {
    flexType?: FlexType;
}

const ItemSurfaceCardLayout = styled.div<ItemSurfaceCardLayout>`
    /* Variables */
    ${(props) => css`
        --light: ${props.theme.light};
        --shadow-medium: ${props.theme.shadowMedium};
    `}

    /* Flex */
    ${(props) => {
        const flexType = props.flexType ?? 'rowAroundMiddle';
        const flexStyleSet = props.theme.styleSet.flex[flexType]

        return css`
            ${ flexStyleSet }
            ul {
                ${ flexStyleSet }
            }
        `
    }}

    background-color: var(--light);
    border-radius: 5px;
    box-shadow: var(--shadow-medium);
    width: 300px;
    padding: 1rem;
    color: black;
    cursor: default;
    user-select: none;
    margin-top: 1px;
    margin-bottom: 1px;

    transition: transform 500ms, z-index 0ms;

    svg {
        display: none;
    }

    &:hover {
        transform: scale(1.02);
        z-index: 10;
        svg {
            display: block;
        }
    }

    ul {
        width: 100%;
        height: 100%;
    }

    ul > li {
        word-break: break-word;
        width: 60px;
    }
    
    ul > li.title {
        font-weight: bold;
        width: 120px;
    }

    ul > li.d-day {
        font-size: 8pt;
    }

    ul > li:last-child {
        width: 20px;
    }
`;

export default ItemSurfaceCardLayout