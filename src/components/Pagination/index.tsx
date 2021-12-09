import { Box, HStack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
    return(
        <HStack m="8" justify="space-between" align="center" spacing="6">
            <Box>
                <strong>0</strong> - <strong>1</strong> de <strong>100</strong>
            </Box>
            <HStack spacing="2">
                <PaginationItem isCurrent pageNumber="1" />
                <PaginationItem pageNumber="2" />
                <PaginationItem pageNumber="3" />
                <PaginationItem pageNumber="4" />
            </HStack>
        </HStack>
    )
}