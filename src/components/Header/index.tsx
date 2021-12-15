import { Button, Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarContext } from "../../hooks/useSidebarContext";

import { Logo } from "./Logo";
import { Notifications } from "./Notifications";
import { Profile } from "./Profile";
import { Search } from "./Search";

export function Header() {

  const {onOpen} = useSidebarContext()

  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true
  })

  return(
      <Flex
        as="header"
        w="100%"
        h="20"
        maxW="1480px"
        mx="auto"
        mt="4"
        px="6"
        align="center"
      >
        {!isWideScreen && (
          <IconButton
            icon={<Icon as={RiMenuLine} fontSize="32" />}
            aria-label="Abrir Menu"
            onClick={onOpen}
            variant="unstyled"
            mr="2"
            pt="1"
          />
        )}

        <Logo />

        {isWideScreen && <Search />}

        <Flex
          ml="auto"
          align="center"
          >
            <Notifications />

            <Profile showProfileData={isWideScreen}/>
        </Flex>

      </Flex>
  )
}
