import { Flex } from "@chakra-ui/react";

import { Logo } from "./Logo";
import { Notifications } from "./Notifications";
import { Profile } from "./Profile";
import { Search } from "./Search";

export function Header() {

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
            <Logo />

            <Search />

            <Flex
              ml="auto"
              align="center"
              >
                <Notifications />

                <Profile />
            </Flex>

        </Flex>
    )
}
