import { ElementType } from "react";
import { Icon, Link as ChakraLink, Text } from "@chakra-ui/react";

import { ActiveLink } from "./ActiveLink";

interface NavLinksProps {
    icon: ElementType;
    name: string;
    href: string;
}

export function NavLinks({icon, name, href}: NavLinksProps) {
    return(
        <ActiveLink href={href} passHref>
            <ChakraLink display="flex" align="center">
                <Icon as={icon} fontSize="20"/>
                <Text ml="4" fontWeight="medium">{name}</Text>
            </ChakraLink>
        </ActiveLink>
    )
}