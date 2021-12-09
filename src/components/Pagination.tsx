import { Box, Button, HStack } from "@chakra-ui/react";

export function Pagination() {
    return(
        <HStack m="8" justify="space-between" align="center" spacing="6">
            <Box>
                <strong>0</strong> - <strong>1</strong> de <strong>100</strong>
            </Box>
            <HStack spacing="2">
                <Button
                    size="sm"
                    disabled
                    colorScheme="pink"
                    fontSize="xs"
                    width="4"
                    _disabled={{
                        bgColor: "pink.500",
                        cursor: "default"
                    }}
                >
                    1
                </Button>
                <Button
                    size="sm"
                    colorScheme="pink"
                    fontSize="xs"
                    width="4"
                    bg="gray.700"
                    _hover={{
                        bg: "gray.500"
                    }}
                >
                    2
                </Button>
                <Button
                    size="sm"
                    colorScheme="pink"
                    fontSize="xs"
                    width="4"
                    bg="gray.700"
                    _hover={{
                        bg: "gray.500"
                    }}
                >
                    3
                </Button>
                <Button
                    size="sm"
                    colorScheme="pink"
                    fontSize="xs"
                    width="4"
                    bg="gray.700"
                    _hover={{
                        bg: "gray.500"
                    }}
                >
                    4
                </Button>
            </HStack>
        </HStack>
    )
}