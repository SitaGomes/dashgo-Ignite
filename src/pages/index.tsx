import Head from 'next/head'

import {SubmitHandler, useForm} from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import * as yup from "yup";

import {Flex, Button, Stack} from "@chakra-ui/react"

import {Input} from "../components/Form/input"

interface HandleSingInProps {
  email: string,
  password: string
}

const singInSchema = yup.object().shape({
  email: yup.string().required("E-mail Obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha Obrigatória"),
})

export default function SingIn() {
  
  const {register, handleSubmit, formState} = useForm<HandleSingInProps>({resolver: yupResolver(singInSchema)})  
  const {errors} = formState

  const handleSingIn: SubmitHandler<HandleSingInProps> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log(values)
  }

  return (
    <>
      <Head>
        <title>Dashgo | Home</title>
      </Head>

      <Flex
        w="100vw"
        h="100vh"
        align="center"
        justify="center"
      >

        <Flex
          as="form"
          w="100%"
          maxW="360px"
          bg="gray.800"
          p="8"
          borderRadius="8"
          flexDir="column"
          onSubmit={handleSubmit(handleSingIn)}
        >

          <Stack spacing="4">

            <Input
              {...register("email")}
              name="email"
              label="E-mail"
              type="email" 
              error={errors.email}
            />
            
            <Input
              {...register("password")}
              name="password"
              label="Senha"
              type="password"
              error={errors.password}
            />
            
          </Stack>

          <Button
            type="submit"
            mt="6"
            colorScheme="pink"
            size="lg"
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    
    </>
  )
}
