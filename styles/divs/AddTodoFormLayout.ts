import styled, { css } from "styled-components";

const inputFontSize = {
    "title": "20pt",
    "name": "14pt",
}

const AddTodoFormLayout = styled.div`
    ${props => props.theme.styleSet.flex.colLeft}
    ${props => css`
        --main: ${props.theme.main};
        --sub: ${props.theme.sub};
    `}

    padding: 1rem;
    background-color: white;
    border-style: solid;
    border-color: black;
    border-width: 6px;
    border-radius: 12px;

    header {
        background-color: var(--main);
        border-radius: 3px;
        color: var(--sub);
        padding: 0.2rem;
        user-select: none;
    }

    .input-container {
        width: 100%;
    }

    .input-cell {
        position: relative;

        span::after {
            content: " ";
            position: absolute;
            left: 0%;
            bottom: 0px;
            color: black;
            width: 0%;
            background-color: none;
            border-bottom-style: solid;
            border-bottom-color: black;
            border-bottom-width: 2px;

            transition: 0ms;
        }

        &:hover, & input:focus + {
            span::after {
                transition: all 1000ms;
                width: 98%;
            }
        }
    }

    input[type="text"] {
        background-color: none;
    }

    ${
        (Object.keys(inputFontSize) as (keyof typeof inputFontSize)[]).map((name, index, arr) => css`
            input[name="${name}"] {
                font-size: ${ inputFontSize[arr[index]] };
            }
        `)
    }

    .textarea-cell {
        padding-top: 1rem;
        padding-bottom: 1rem;

        textarea[name="content"] {
            transition: all 1000ms;
            width: 100%;
            height: calc(36pt + 1rem);

            background: none;
            border: none;
            border-radius: 5px;
            font-size: 12pt;
        }

        &:hover {
            textarea[name="content"] {
                background: rgba(0 0 0 / 0.05);
            }
        }
    }

    .deadline-container {
        input {
            text-align: right;
        }
    }

    .button-group {
        width: 100%;
        padding-top: 1.5rem;

        button {
            margin-left: 1rem;
            padding: 0.6em;
            min-width: 5rem;
            min-height: 2rem;
            font-size: 10pt;
        }
    }
`

export default AddTodoFormLayout