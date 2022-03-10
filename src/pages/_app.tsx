import {AppProps} from "next/app"

import {ChakraProvider} from "@chakra-ui/react"
import { theme } from "../styles/theme"

import { SidebarProvider } from "../context/SidebarContext"
import { makeServer } from "../services/mirage"

if (process.env.NODE_ENV !== 'production') {
  makeServer()
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarProvider>
        <Component {...pageProps} />
      </SidebarProvider>
    </ChakraProvider>
  )
}

export default MyApp
