import PrimaryButton from "../../src/components/buttons/PrimaryButton"
import SecondaryButton from "../../src/components/buttons/SecondaryButton"


const index = () => {
  return (
    <>
        <main>
            <PrimaryButton borderRadius="20px">primary</PrimaryButton>
            <SecondaryButton>secondary</SecondaryButton>
        </main>
    </>
  )
}

export default index