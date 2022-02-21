import styled from 'styled-components';

export type ButtonLayoutProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}

const ButtonLayout = styled.button`
    padding: 4px;
    border-radius: 3px;

    transition: 130ms;
    
    &:active {
        transform: scale(.93);
    }

    ${ (props) => props.theme.styleSet.buttons }
`;

export default ButtonLayout