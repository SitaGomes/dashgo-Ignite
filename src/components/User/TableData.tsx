import { Box, Button, Checkbox, Icon, Td, Text, Tr } from "@chakra-ui/react";
import { RiPencilLine } from "react-icons/ri";
import { EditButton } from "./EditButton";

interface TableDataProps {
    name: string,
    email: string,
    data: string
}

export function TableData ({data, name, email}: TableDataProps) {
    return(
        <Tr px="6">
            <Td>
                <Checkbox colorScheme="pink"/>
            </Td>
            <Td>
                <Box>
                    <Text fontWeight="bold">{name}</Text>
                    <Text fontSize="sm" color="gray.300">{email}</Text>
                </Box>
            </Td>
            <Td>{data}</Td>
            <Td>
                <EditButton />
            </Td>
        </Tr>
    )
}