import styled, { css } from "styled-components";

const InputTextLayout = styled.input.attrs((props) => ({
        type: 'text',
}))`
    ${props => {
        return css`
            --sub: ${props.theme.sub};
            --light: ${props.theme.light};
            --shadow-md: ${props.theme.shadowLarge};
        `
    }}
    
    min-width: 100px;
    background-color: var(--light);
    border-style: solid;
    border-color: var(--light);
    border-width: 1px;
    border-radius: 5px;
    box-shadow: var(--shadow-md);
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
`;

export default InputTextLayout