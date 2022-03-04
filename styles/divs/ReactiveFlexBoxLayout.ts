import styled, { css } from "styled-components";

export interface ReactiveFlexBoxLayoutProps {
    horizontalAlign?: "left" | "center" | "right";
    verticalAlign?: "top" | "middle" | "bottom";
}

// FIXME List Card 사이즈 바꾸고 반응형 768px로 변경
export const ReactiveFlexBoxLayout = styled.div<ReactiveFlexBoxLayoutProps>`
    ${(props) => {
        const alignAtLargeScreen = {"top": "rowAround", "middle": "rowAroundMiddle", "bottom": "rowAroundBottom"}[props.verticalAlign ?? "top"]
        const alignAtSmallScreen = {"left": "colLeft", "center": "colCenter", "right": "colRight"}[props.horizontalAlign ?? "center"]

        return css`
            ${props.theme.styleSet.flex[alignAtLargeScreen]}
            @media screen and (max-width: 996px) {
                ${props.theme.styleSet.flex[alignAtSmallScreen]}
            }
        `
    }}
`;