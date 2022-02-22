import styled from 'styled-components'
import { FlexType } from 'styles/styleSet/flex'

export interface FlexBoxLayoutProps {
    flexType?: FlexType;
}

const FlexBoxLayout = styled.div<FlexBoxLayoutProps>`
    ${(props) => {
        const flexType = props.flexType ?? 'rowAround';
        console.log(props.theme.styleSet.flex[flexType])
        return props.theme.styleSet.flex[flexType]
    }}
`

export default FlexBoxLayout