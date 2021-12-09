import {Text, Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react"

import { RiAddLine, RiPencilLine } from "react-icons/ri"

import { Header } from "../../components/Header"
import { Pagination } from "../../components/Pagination"
import { Sidebar } from "../../components/Sidebar"

export default function UserList () {

    return(
        <Box>
            <Header />

            <Flex w="100%" my="6" maxW="1480px" mx="auto" px="6">

                <Sidebar />
            
                <Box
                  flex="1"
                  bg="gray.800"
                  borderRadius="8"
                  p="8"
                >
                    <Flex
                      mb="8"
                      justify="space-between"
                      align="center"
                    >
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>

                        <Button
                            as="a"
                            colorScheme={"pink"}
                            size="sm"
                            fontSize="10"
                            leftIcon={<Icon as={RiAddLine} fontSize="20"/>}
                            
                            
                        >
                            Criar novo 
                        </Button>
                    </Flex>

                    <Table colorScheme="whiteAlpha">

                        <Thead>
                            <Tr>
                                <Th px="6" width="8" color="gray.300">
                                    <Checkbox colorScheme="pink"/>
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de cadastro</Th>
                                <Th width="1"></Th>
                            </Tr>
                        </Thead>


                        <Tbody>

                            <Tr px="6">
                                <Td>
                                    <Checkbox colorScheme="pink"/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Arthur Gomes</Text>
                                        <Text fontSize="sm" color="gray.300">ansitagomes@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>04 de Abril de 2021</Td>
                                <Td>
                                    <Button
                                        as="a"
                                        colorScheme="purple"
                                        size="sm"
                                        fontSize="sm"
                                        leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                                    >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>

                        </Tbody>

                    </Table>
    
                    <Pagination />

                </Box>
            
            </Flex>
            
        </Box>
    )
}