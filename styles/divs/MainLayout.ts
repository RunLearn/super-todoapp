import styled from 'styled-components';

const MainLayout = styled.main`
    display: flex;
    flex-direction: column;

    padding-top: 1rem;
    background-color: ${(props) => props.theme.sub};

    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: "auto";
`;

export default MainLayout