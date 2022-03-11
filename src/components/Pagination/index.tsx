import { Text, Box, HStack, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
    totalCountOfRegisters: number;
    registerPerPage?: number;
    currentPage?: number;
    onPageChange: (page: number) => void;
}

const siblingsCount = 1

function generateArrayPages(from: number, to: number) {
    return [...new Array(to - from)]
        .map((_, index) => {
            return from + index + 1
        })
        .filter(page => page > 0)

    /**
     * ? generateArrayPages(3, 6)
     * * => [0, 0, 0] Creating an empty array (6 - 3 = 3)
     * * => [3 + 0 + 1, 3 + 1 + 1, 3 + 2 + 1] (from + index + 1)
     * * => [4, 5, 6] Final array
     * 
     * ? filtering all the negative values
    */

}

export function Pagination({
    totalCountOfRegisters,
    registerPerPage = 10, 
    currentPage = 1,
    onPageChange
    }: PaginationProps) {

    const lastPage = Math.floor(totalCountOfRegisters / registerPerPage); //205 registers => 21 pages (10 per page)
    
    const previousPage = currentPage > 1
        ? generateArrayPages(currentPage - 1 - siblingsCount, currentPage - 1) 
        : []

    const nextPage = currentPage < lastPage
        ? generateArrayPages(currentPage, Math.min(currentPage + 1, lastPage)) //? If currentPage > lastPage, grabs lastPage
        : []

    return(
        <Stack m="8" justify="space-between" align="center" spacing="6" direction={["column", "row"]}>
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <HStack spacing="2">

                {currentPage > (1 + siblingsCount) && (
                    <>
                        <PaginationItem onPageChange={onPageChange} pageNumber={1} />
                        {currentPage > (2 + siblingsCount) && (
                            <Text textAlign="center" color="gray.300" w="8">...</Text>
                        )}
                    </>
                )}

                {previousPage.length > 0 && previousPage.map(page => (
                    <PaginationItem onPageChange={onPageChange} key={page} pageNumber={page} />
                ))}

                <PaginationItem onPageChange={onPageChange} isCurrent pageNumber={currentPage} />

                {nextPage.length > 0 && nextPage.map(page => (
                    <PaginationItem onPageChange={onPageChange} key={page} pageNumber={page} />
                ))}

                {currentPage < (lastPage - siblingsCount) && (
                    <>
                        {currentPage < (lastPage - siblingsCount - 1) && (
                            <Text textAlign="center" color="gray.300" w="8">...</Text>
                        )}
                        <PaginationItem onPageChange={onPageChange} pageNumber={lastPage} />
                    </>
                )}

            </HStack>
        </Stack>
    )
}