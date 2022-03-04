import styled, { css } from "styled-components";

const SendIconLayout = styled.div`
    ${(props) => css`
        --sub: ${props.theme.sub};
        --light-gray: ${props.theme.lightGray};
    `}

    padding-top: 0.3rem;

    svg {
        min-width: 15px;
        min-height: 15px;

        fill: var(--light-gray);
        transition: all 300ms;
    }

    &:hover {
        svg {
            fill: var(--sub);
        }
    }

    &:not(:active) svg.bounce {
        animation: bounce 1000ms infinite;

        @keyframes bounce {
            0%, 100% {
                transform: translate(3%, -3%);
                animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
            }
            50% {
                transform: translate(-5%, 5%);
                animation-timing-function: cubic-bezier(0, 0, 0.5, 1);
            }
        }
    }

    &:active svg {
        transform: scale(0.8);
    }
`;

export default SendIconLayout