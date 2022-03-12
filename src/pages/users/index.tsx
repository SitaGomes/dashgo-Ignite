import { GetServerSideProps } from "next"
import Head from "next/head"
import NextLink from "next/link"
import { useState } from "react"

import { RiAddLine } from "react-icons/ri"
import { Box, Button, Checkbox, Flex, Text, Icon, Spinner, Table, Tbody, Th, Thead, Tr, useBreakpointValue, Heading} from "@chakra-ui/react"

import { queryClient } from "../../services/queryClient"
import { getUser, useUsers } from "../../services/hooks/useUsers"
import { api } from "../../services/axios"

import { Header } from "../../components/Header"
import { Pagination } from "../../components/Pagination"
import { Sidebar } from "../../components/Sidebar"
import { TableData } from "../../components/User/TableData"

interface User {
    id: number,
    name: string,
    email: string,
    createdAt: string,
}

export default function UserList ({initialUsers}) {
    const [page, setPage] = useState(1)

    const {data, isLoading, isFetching, error} = useUsers(page, {
        initialData: initialUsers
    })

    const isWideScreen = useBreakpointValue({
        base: false,
        lg: true
    })

    async function handlePrefetchData (userId: number) {
        await queryClient.prefetchQuery(["user", userId], async () => {
            const response = await api.get(`users/${userId}`)

            return response.data
        }, {
            staleTime: 1000 * 60 * 10, // 10 minutes
        })
    }

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
                        
                        <NextLink href="/users/create" passHref>
                            <Button
                                as="a"
                                colorScheme={"pink"}
                                size="sm"
                                leftIcon={<Icon as={RiAddLine} fontSize="20"/>}
                            >
                                Criar novo 
                            </Button>
                        </NextLink>
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

                                    {data.users.map((user: User) => (
                                        <TableData
                                          key={user.id}
                                          isWideScreen
                                          handlePrefetchData={() => handlePrefetchData(user.id)}
                                          id={user.id}
                                          name={user.name}
                                          email={user.email}
                                          data={user.createdAt} 
                                        />
                                    ))}
                    
                                </Tbody>
        
                                </Table>
                
                                <Pagination 
                                    totalCountOfRegisters={data.totalCount}
                                    currentPage={page}
                                    onPageChange={setPage}
                                />
                            </>
                        )
                    }

                </Box>
            
            </Flex>
            
        </Box>
    )
}


export const getServerSideProps: GetServerSideProps = async () => {
    
    const {users} = await getUser(1)

    return {
        props: {
            initialUsers: users
        }
    }
}