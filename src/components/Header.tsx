import { Avatar, Box, HStack, Flex, Text, Input, Icon } from "@chakra-ui/react";
import {RiNotificationLine, RiSearchLine, RiUserAddLine} from "react-icons/ri" 

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
            {/* Logo */}
            <Text
              fontWeight="bold"
              fontSize="3xl"
              letterSpacing="tight"
              w="64"
            >
                dashgo
                <Text as="span" ml="1" color="pink">
                    .
                </Text>
            </Text>

            {/* Search Bar */}
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

            <Flex
              ml="auto"
              align="center"
              >
                {/* Notifications and New friends */}
                <HStack
                  spacing="8"
                  mx="8"
                  pr="8"
                  py="1"
                  color="gray.300"
                  borderRightWidth="1px"
                  borderColor="gray.700"
                >
                    <Icon as={RiNotificationLine} fontSize="20"/>
                    <Icon as={RiUserAddLine} fontSize="20"/>
                </HStack>

                {/* User Profile */}
                <Flex align="center">
                    <Box
                      mr="4"
                      textAlign="right"
                    >
                        <Text>Arthur Gomes</Text>
                        <Text
                          color="gray.300"
                          fontSize="small"
                        >
                            ansitagomes@gmail.com
                        </Text>
                    </Box>

                    <Avatar size="md" name="Arthur Gomes" src="https://github.com/SitaGomes.png"/>

                </Flex>
            </Flex>

        </Flex>
    )
}
