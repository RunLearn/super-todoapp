import styled, { css } from "styled-components";

const InvitationFormLayout = styled.div`
    ${(props) => props.theme.styleSet.flex["rowAroundMiddle"]}
    ${(props) => css`
        --main: ${props.theme.main};
        --sub: ${props.theme.sub};
        --shadow-md: ${props.theme.shadowMedium};
    `}

    background-color: var(--main);
    border-radius: 10px;
    box-shadow: var(--shadow-md);
    color: var(--sub);
    font-weight: bold;
    padding: 0.5rem;
    position: relative;
    width: 300px;

    span {
        cursor: default;
    }

    input {
        margin-left: 0.5rem;
    }
`;

export default InvitationFormLayout