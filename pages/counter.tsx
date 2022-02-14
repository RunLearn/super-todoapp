import type { NextPage } from 'next'
import { Counter } from '../src/features/counter/Counter'

const Home: NextPage = () => {
  return (
      <div>
          <Counter />
      </div>
  )
}

export default Home