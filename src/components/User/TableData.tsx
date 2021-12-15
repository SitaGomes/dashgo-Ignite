import { Box, Checkbox, Td, Text, Tr } from "@chakra-ui/react";
import { EditButton } from "./EditButton";

interface TableDataProps {
    name: string,
    email: string,
    data: string,
    isWideScreen: boolean
}

export function TableData ({data, name, email, isWideScreen = true}: TableDataProps) {
    return(
        <Tr px={["2", "4", "6"]}>
            <Td>
                <Checkbox colorScheme="pink"/>
            </Td>
            <Td>
                <Box>
                    <Text fontWeight="bold">{name}</Text>
                    <Text fontSize="sm" color="gray.300">{email}</Text>
                </Box>
            </Td>
            {isWideScreen && 
                (    
                    <>
                        <Td>{data}</Td>
                        <Td>
                            <EditButton />
                        </Td>
                    </>
                )
            }
        </Tr>
    )
}