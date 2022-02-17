import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../src/store'
import GlobalStyle from '../styles/global-styles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={ store } >
      <GlobalStyle  />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
