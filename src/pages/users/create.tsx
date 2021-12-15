import {Box, Button, Divider, Flex, HStack, SimpleGrid, VStack, } from "@chakra-ui/react"
import Head from "next/head"
import Link from "next/link"
import { Input } from "../../components/Form/input"


import { Header } from "../../components/Header"
import { Sidebar } from "../../components/Sidebar"
import { Title } from "../../components/Title"

export default function CreateUser () {

    return(
        <Box>

            <Head>
                <title>Criar usuário | Dashgo</title>
            </Head>

            <Header />

            <Flex w="100%" my="6" maxW="1480px" mx="auto" px="6">

                <Sidebar />
            
                <Box
                  flex="1"
                  bg="gray.800"
                  borderRadius="8"
                  p={["6", "8"]}
                >

                    <Title>Criar usuário</Title>

                    <Divider mb="6" borderColor="gray.700"/>

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input name="name" label="Nome Completo" />
                            <Input type="email" name="email" label="E-mail"/>
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input name="password" type="password" label="Senha" />
                            <Input name="password_confirmation" type="password" label="Confirmação da Senha" />
                        </SimpleGrid>

                        <Flex mt="6" justify="flex-end" w="100%">
                            <HStack spacing="6">

                                <Link href="/users" passHref>
                                    <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
                                </Link>
                                
                                <Button colorScheme="pink"> Salvar </Button>
                            </HStack>
                        </Flex>

                    </VStack>
                    
                </Box>
            
            </Flex>
            
        </Box>
    )
}