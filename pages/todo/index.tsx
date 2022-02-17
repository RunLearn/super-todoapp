import PrimaryButton from "../../src/components/buttons/PrimaryButton"
import SecondaryButton from "../../src/components/buttons/SecondaryButton"
import SuccessButton from "../../src/components/buttons/SuccessButton"


const index = () => {
  return (
    <>
        <main>
            <PrimaryButton borderRadius="20px">primary</PrimaryButton>
            <SecondaryButton>secondary</SecondaryButton>
            <SuccessButton>success</SuccessButton>
        </main>
    </>
  )
}

export default index