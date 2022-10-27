import { globalStyles } from '~/theme'
import { GetStaticProps } from 'next'
import type { AppProps } from 'next/app'
import React, { createContext } from 'react'

// Store Strapi Global object in context
export const GlobalContext = createContext({})

const App = ({ Component, pageProps }: AppProps) => {
  globalStyles()

  return <Component {...pageProps} />
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}

export default App
