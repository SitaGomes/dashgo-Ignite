import Head from "next/head"
import Link from "next/link"
import { Input } from "../../components/Form/input"

import {SubmitHandler, useForm} from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import * as yup from "yup";

import {Box, Button, Divider, Flex, HStack, SimpleGrid, VStack, } from "@chakra-ui/react"

import { Header } from "../../components/Header"
import { Sidebar } from "../../components/Sidebar"
import { Title } from "../../components/Title"

interface CreateUserProps {
    name: string,
    email: string,
    password: string
    password_confirmation: string
}
  
const createUSerSchema = yup.object().shape({
    name: yup.string().required("Nome Obrigatório"),
    email: yup.string().required("E-mail Obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha Obrigatória").min(6, "Precisa no minímo de 6 caracteres "),
    password_confirmation: yup.string().oneOf([
        null, yup.ref("password")
    ], "As senhas precisam ser iguais"),
})

export default function CreateUser () {

    const {register, handleSubmit, formState} = useForm<CreateUserProps>({resolver: yupResolver(createUSerSchema)})
    const {errors} = formState

    const handleCreateUser: SubmitHandler<CreateUserProps> = async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        
        console.log(values)
    }
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
                  as="form"
                  onSubmit={handleSubmit(handleCreateUser)}
                >

                    <Title>Criar usuário</Title>

                    <Divider mb="6" borderColor="gray.700"/>

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input
                              name="name"
                              label="Nome Completo"
                              {...register("name")}
                              error={errors.name} 
                            />

                            <Input
                              type="email"
                              name="email"
                              label="E-mail"
                              {...register("email")}
                              error={errors.email} 
                            />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input
                              name="password"
                              type="password"
                              label="Senha"
                              {...register("password")}
                              error={errors.password} 
                            />

                            <Input
                              name="password_confirmation"
                              type="password"
                              label="Confirmação da Senha"
                              {...register("password_confirmation")}
                              error={errors.password_confirmation} 
                            />
                        </SimpleGrid>

                        <Flex mt="6" justify="flex-end" w="100%">
                            <HStack spacing="6">

                                <Link href="/users" passHref>
                                    <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
                                </Link>
                                
                                <Button
                                    colorScheme="pink"
                                    type="submit"
                                    isLoading={formState.isSubmitting}
                                >
                                  Salvar
                                </Button>
                            </HStack>
                        </Flex>

                    </VStack>
                    
                </Box>
            
            </Flex>
            
        </Box>
    )
}