import { Box, Checkbox, Link, Td, Text, Tr } from "@chakra-ui/react";
import { EditButton } from "./EditButton";

interface TableDataProps {
    id: number,
    name: string,
    email: string,
    data: string,
    handlePrefetchData: (userId: number) => void,
    isWideScreen: boolean
}

export function TableData ({id, data, name, email, handlePrefetchData, isWideScreen = true}: TableDataProps) {
    return(
        <Tr px={["2", "4", "6"]}>
            <Td>
                <Checkbox colorScheme="pink"/>
            </Td>
            <Td>
                <Box>
                    <Link color="purple.400" onMouseEnter={() => handlePrefetchData(id)}>
                        <Text fontWeight="bold">{name}</Text>
                    </Link>
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