import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function Search() {
    return(
        <Flex
            as="label"
            flex="1"
            py="4"
            px="8"
            ml="6"
            alignSelf="center"
            maxW="400px"
            color="gray.200"
            position="relative"
            bg="gray.800"
            borderRadius="full"
        >
            <Input
                color="gray.50"
                variant="unstyled"
                placeholder="Buscar na plataforma" 
                _placeholder={{color: "gray.400"}}
                mr="4"
                px="4"    
            />

            <Icon as={RiSearchLine} alignSelf="center" fontSize="18"/>

        </Flex>

    )
}