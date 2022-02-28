import styled from "styled-components";

const KebobIconLayout = styled.div`
    transition: all 500ms;
    cursor: default;

    &:hover {
        transform: scale(1.3);
    }

    &:active {
        transform: scale(1.2);
    }
`;

export default KebobIconLayout