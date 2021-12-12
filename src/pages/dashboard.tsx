import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

import {Text, Box, Flex, SimpleGrid} from "@chakra-ui/react"
import { Chart } from "../components/DashBoard/Chart";
import Head from "next/head";

export default function Dashboard() {

    return (
        <Flex direction="column" h="100vh">
            <Head>
                <title>DashBoard | Dashgo</title>
            </Head>

            <Header />

            <Flex w="100%" my="6" maxW="1480px" mx="auto" px="6">
                <Sidebar />

                <SimpleGrid
                  minChildWidth="320px"
                  flex="1"
                  gap="4"
                  align="flex-start"
                >
                    
                    <Box
                      borderRadius="8px"
                      p="8"
                      bg="gray.800"
                    >
                        <Text fontSize="lg" mb="4"> Incritos da semana </Text>
                        <Chart isSubs/>
                    </Box>
                    
                    <Box
                      borderRadius="8px"
                      p="8"
                      bg="gray.800"
                    >
                        <Text fontSize="lg" mb="4"> Taxa de abertura </Text>
                        <Chart/>
                    </Box>

                </SimpleGrid>
            </Flex>

        </Flex>
    )
}