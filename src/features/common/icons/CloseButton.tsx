import { NextPage } from "next"
import { IoMdCloseCircleOutline } from "react-icons/io"
import CloseIconLayout from "styles/icons/CloseIconLayout"
export interface CloseButtonProps  {
    style?: React.CSSProperties;
}

const CloseButton: NextPage<CloseButtonProps> = (props) => {
  return (
    <CloseIconLayout style={props.style}>
        <IoMdCloseCircleOutline />
    </CloseIconLayout>
  )
}

export default CloseButton