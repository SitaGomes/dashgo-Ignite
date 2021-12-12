import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return(
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
    )
}