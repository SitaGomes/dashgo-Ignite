import {Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue} from "@chakra-ui/react"
import { useSidebarContext } from "../../hooks/useSidebarContext"

import { SidebarNav } from "./SidebarNav"

export function Sidebar() {

    const {isOpen, onClose} = useSidebarContext()

    const isDrawerMenu = useBreakpointValue({
        base: true,
        lg: false
    })

    if (isDrawerMenu) {
        return(
            <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent  bg="gray.800" p="4">
                        <DrawerCloseButton mt="6"/>
                        <DrawerHeader>Navegação</DrawerHeader>

                        <DrawerBody>
                            <SidebarNav />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        )
    }

    return(
        <Box as="aside" w="64" mr="8">
           <SidebarNav></SidebarNav>
        </Box>        
    )
}