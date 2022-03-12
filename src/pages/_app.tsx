import {AppProps} from "next/app"

import {QueryClient, QueryClientProvider} from "react-query"
import {ReactQueryDevtools} from "react-query/devtools"

import {ChakraProvider} from "@chakra-ui/react"
import { theme } from "../styles/theme"

import { SidebarProvider } from "../context/SidebarContext"
import { makeServer } from "../services/mirage"
import { queryClient } from "../services/queryClient"

if (process.env.NODE_ENV !== 'production') {
  makeServer()
}


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}> 
      <ChakraProvider theme={theme}>
          <SidebarProvider>
            <Component {...pageProps} />
          </SidebarProvider>
      </ChakraProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp
