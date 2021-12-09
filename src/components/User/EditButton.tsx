import { Button, Icon } from '@chakra-ui/react'
import React from 'react'
import { RiPencilLine } from 'react-icons/ri'

export function EditButton() {
    return (
        <Button
            as="a"
            colorScheme="purple"
            size="sm"
            fontSize="sm"
            leftIcon={<Icon as={RiPencilLine} fontSize="14"/>}
        >
            Editar
        </Button>
    )
}
