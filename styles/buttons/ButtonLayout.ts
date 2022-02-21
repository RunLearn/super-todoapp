import styled from 'styled-components';

export type ButtonLayoutProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}

const ButtonLayout = styled.button`
    padding: 4px;
    border-radius: 3px;

    transition: 150ms;
    
    &:active {
        transform: scaleY(.95);
    }

    ${ (props) => props.theme.styleSet.buttons }
`;

export default ButtonLayout