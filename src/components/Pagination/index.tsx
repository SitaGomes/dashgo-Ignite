import { Box, HStack, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
    return(
        <Stack m="8" justify="space-between" align="center" spacing="6" direction={["column", "row"]}>
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <HStack spacing="2">
                <PaginationItem isCurrent pageNumber="1" />
                <PaginationItem pageNumber="2" />
                <PaginationItem pageNumber="3" />
                <PaginationItem pageNumber="4" />
            </HStack>
        </Stack>
    )
}