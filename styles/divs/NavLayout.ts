import styled from 'styled-components';

export type NavLayoutProps = {
    id?: string;
    className?: string;
}

const NavLayout = styled.nav`
    cursor: default;

    padding-right: 1rem;
    padding-left: 1rem;
    padding-top: 1.5rem;

    display: flex;
    flex-direction: row;
    left: 0px;
    top: 0px;
    height: auto;
    width: 100%;
    background: ${(props) => props.theme.main};
    
    h1, h2, h3, h4, h5, h6 {
        width: 300px;
        word-break: break-word;
        color: ${(props) => props.theme.sub};
        font-family: sans-serif;
        font-size: 16pt;
        font-weight: bold;
        padding: 0.5rem;
    }

    ul {
        display: flex;
        list-style-type: none;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 0px;
        margin-bottom: 0px;
        padding-left: 40px;
        position: relative;
    }

    ul li {
        display: inline;
        list-style: none;
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 1rem;
        border-radius: 20px 20px 0px 0px;
        position: relative;
    }

    ul li.selected {
        background: ${(props) => props.theme.sub};
    }

   ul li span {
        text-decoration: none;
        color: ${(props) => props.theme.sub};
    }

    ul li.selected span {
        color: ${(props) => props.theme.main};
    }

    ul li b.left-curve {
        position: absolute;
        bottom: 0px;
        left: -20px;
        height: 100%;
        width: 20px;
        background: ${(props) => props.theme.sub};
        display: none;
    }

    ul li b.left-curve::before {
        content: "";
        top: 0;
        left: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        border-bottom-right-radius: 20px;
        background: ${(props) => props.theme.main};
    }

    ul li b.right-curve {
        position: absolute;
        right: -20px;
        top: 0px;
        height: 100%;
        width: 20px;
        background: ${(props) => props.theme.sub};
        display: none;
    }

    ul li b.right-curve::before {
        content: "";
        right: 0;
        position: absolute;
        width: 100%;
        top: 0;
        height: 100%;
        border-bottom-left-radius: 20px;
        background: ${(props) => props.theme.main};
    }

    ul li.selected b.left-curve,
    ul li.selected b.right-curve {
        display: block;
    }
    
    hr {
        transition: 1300ms;
        background-color: ${ (props) => props.theme.main }
    }

    hr.sub {
        background-color: ${ (props) => props.theme.sub }
    }
`;

export default NavLayout