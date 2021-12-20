import { UseDisclosureReturn, useDisclosure } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { createContext, useEffect } from 'react'

interface SidebarProviderProps {
    children: React.ReactNode
}

type SidebarContextData = UseDisclosureReturn

export const SidebarContext = createContext({} as SidebarContextData)

export function SidebarProvider({children}: SidebarProviderProps) {

    const disclosure = useDisclosure()

    const router = useRouter()

    useEffect(() => {
        disclosure.onClose()
    }, [router.asPath])

    return (
        <SidebarContext.Provider value={disclosure}>
            {children}
        </SidebarContext.Provider>
    )
}
