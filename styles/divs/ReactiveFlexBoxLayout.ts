import styled from "styled-components";

export const ReactiveFlexBoxLayout = styled.div`
    ${(props) => props.theme.styleSet.flex['rowAround']}

    @media screen and (max-width: 996px) {
        ${(props) => props.theme.styleSet.flex['colCenter']}
    }
`;