import styled from "styled-components";

const InvitationIconLayout = styled.div`
    svg {
        width: 1.5rem;
        height: 1.5rem;

        stroke: gray;
        transition: all 300ms;
    }
    
    &:hover svg {
        stroke: black;
    }

    &:active svg {
        transform: scale(0.9);
    }
`;

export default InvitationIconLayout