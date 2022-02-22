import styled from 'styled-components'
import { FlexType } from 'styles/styleSet/flex'

export interface FlexBoxLayoutProps {
    flexType?: FlexType;
}

const FlexBoxLayout = styled.div<FlexBoxLayoutProps>`
    ${(props) => {
        const flexType = props.flexType ?? 'rowAround';
        return props.theme.styleSet[flexType]
    }}
`

export default FlexBoxLayout