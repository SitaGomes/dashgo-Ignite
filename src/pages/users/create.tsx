import {Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack, } from "@chakra-ui/react"
import { Input } from "../../components/Form/input"


import { Header } from "../../components/Header"
import { Sidebar } from "../../components/Sidebar"

export default function CreateUser () {

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
                    <Heading size="lg" fontWeight="normal"> Criar usuário</Heading>

                    <Divider mb="6" borderColor="gray.700"/>

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <Input name="name" label="Nome Completo" />
                            <Input type="email" name="email" label="E-mail"/>
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <Input name="password" type="password" label="Senha" />
                            <Input name="password_confirmation" type="password" label="Confirmação da Senha" />
                        </SimpleGrid>

                        <Flex mt="6" justify="flex-end" w="100%">
                            <HStack spacing="6">
                                <Button colorScheme="whiteAlpha">Cancelar</Button>
                                <Button colorScheme="pink"> Salvar </Button>
                            </HStack>
                        </Flex>

                    </VStack>
                    
                </Box>
            
            </Flex>
            
        </Box>
    )
}