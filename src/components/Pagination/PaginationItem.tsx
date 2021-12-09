import { Button } from "@chakra-ui/react"

interface PaginationItemProps {
    isCurrent?: boolean;
    pageNumber: string
}

export function PaginationItem({isCurrent = false, pageNumber}: PaginationItemProps) {
    if(isCurrent) {
        return(
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
                {pageNumber}
            </Button>
        )
    }

    return(
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
            {pageNumber}
        </Button>
    )
}
