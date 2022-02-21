import Nav from '@common/components/Nav'
import type { NextPage } from 'next'
import MainLayout from 'styles/divs/MainLayout'

const Home: NextPage = () => {
  return (
    <>
      <header>
        <Nav selectedIndex={0} />
      </header>
      <MainLayout>
        <h3>Just Page</h3>
      </MainLayout>
    </>
  )
}

export default Home
