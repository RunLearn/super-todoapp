import DangerButton from "../../src/components/buttons/DangerButton"
import PrimaryButton from "../../src/components/buttons/PrimaryButton"
import SecondaryButton from "../../src/components/buttons/SecondaryButton"
import SuccessButton from "../../src/components/buttons/SuccessButton"
import SampleRedux from "../../src/components/todo/SampleRedux"


const index = () => {
  return (
    <>
        <main>
            <PrimaryButton borderRadius="20px">primary</PrimaryButton>
            <SecondaryButton>secondary</SecondaryButton>
            <SuccessButton>success</SuccessButton>
            <DangerButton>danger</DangerButton>
            <SampleRedux />
        </main>
    </>
  )
}

export default index