import { Icon, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinksProps extends ChakraLinkProps{
    icon: ElementType;
    name: string
}

export function NavLinks({icon, name, ...rest}: NavLinksProps) {
    return(
        <Link display="flex" align="center" {...rest}>
            <Icon as={icon} fontSize="20"/>
            <Text ml="4" fontWeight="medium">{name}</Text>
        </Link>
    )
}