 import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Th, Thead, Tr} from "@chakra-ui/react"
import Head from "next/head"

import { RiAddLine } from "react-icons/ri"

import { Header } from "../../components/Header"
import { Pagination } from "../../components/Pagination"
import { Sidebar } from "../../components/Sidebar"
import { Title } from "../../components/Title"
import { TableData } from "../../components/User/TableData"

export default function UserList () {

    return(
        <Box>
            <Head>
                <title>Usuários | Dashgo</title>
            </Head>

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
                        <Title>Usuários</Title>

                        <Button
                            as="a"
                            colorScheme={"pink"}
                            size="sm"
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

                           <TableData name="Arthur Gomes" email="ansitagomes@gmail.com" data="04 de Abril, 1999" />
                           <TableData name="Ducher Machili" email="ducherkingcv@gmail.com" data="05 de Abril, 1999" />
                           <TableData name="P3nng Lee" email="yourworstfear@gmail.com" data="06 de Abril, 1999" />
                           <TableData name="King Ducher cv" email="imbatman@gmail.com" data="07 de Abril, 1999" />

                        </Tbody>

                    </Table>
    
                    <Pagination />

                </Box>
            
            </Flex>
            
        </Box>
    )
}