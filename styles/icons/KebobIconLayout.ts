import styled from "styled-components";

const KebobIconLayout = styled.div`
    transition: all 500ms;
    cursor: default;

    svg {
        transition: all 500ms;
        fill: gray;
    }

    &:hover svg {
        fill: black;
    }

    &:active {
        transform: scale(0.8);
    }
`;

export default KebobIconLayout