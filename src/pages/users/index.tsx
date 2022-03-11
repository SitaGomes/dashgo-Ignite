import Head from "next/head"
import Link from "next/link"
import {useQuery} from "react-query"

import { RiAddLine } from "react-icons/ri"
import { Box, Button, Checkbox, Flex, Text, Icon, Spinner, Table, Tbody, Th, Thead, Tr, useBreakpointValue, Heading} from "@chakra-ui/react"

import { Header } from "../../components/Header"
import { Pagination } from "../../components/Pagination"
import { Sidebar } from "../../components/Sidebar"
import { Title } from "../../components/Title"
import { TableData } from "../../components/User/TableData"

interface User {
    id: number,
    name: string,
    email: string,
    createdAt: string,
}

export default function UserList () {

    const {data, isLoading, isFetching, error} = useQuery("users", async () => {

        const response = await fetch("http://localhost:3000/api/users")

        const data = await response.json()

        const users = data.users.map((user) => {
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                createdAt: new Date(user.createdAt).toLocaleString("pt-BR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric"
                })
            }
        })

        return users
    }, {
        staleTime: 1000 * 5, // 5 seconds
    })

    console.log(data)

    const isWideScreen = useBreakpointValue({
        base: false,
        lg: true
    })

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
                        <Heading size="lg" fontWeight="normal"> 
                            Usuários 

                            {!isLoading && isFetching && <Spinner color="gray.500" ml="4" size="sm" />}
                        </Heading>
                        
                        <Link href="/users/create" passHref>
                            <Button
                                as="a"
                                colorScheme={"pink"}
                                size="sm"
                                leftIcon={<Icon as={RiAddLine} fontSize="20"/>}
                            >
                                Criar novo 
                            </Button>
                        </Link>
                    </Flex>

                    {isLoading 
                        ? (
                            <Flex justify="center"> <Spinner /> </Flex>
                        ) 
                        : error ? (
                            <Flex> <Text>Falha no carregamento dos usuários</Text> </Flex>
                        ) : (
                            <>
                            
                                <Table colorScheme="whiteAlpha">

                                <Thead>
                                    <Tr>
                                        <Th px="6" width={["6", "8"]} color="gray.300">
                                            <Checkbox colorScheme="pink"/>
                                        </Th>
                                        <Th>Usuário</Th>
                                        {isWideScreen &&
                                            (
                                                <>
                                                    <Th>Data de cadastro</Th>
                                                    <Th width="1"></Th>
                                                </>
                                            )
                                        }
                                    </Tr>
                                </Thead>
        
                                <Tbody>

                                    {data.map((user: User) => (

                                        <TableData key={user.id} isWideScreen name={user.name} email={user.email} data={user.createdAt} />
                                    ))}
                    
                                </Tbody>
        
                                </Table>
                
                                <Pagination />
                            </>
                        )
                    }

                </Box>
            
            </Flex>
            
        </Box>
    )
}