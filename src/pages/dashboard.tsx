import dynamic from "next/dynamic";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"), {
    ssr: false
});

import {Text, Box, Flex, SimpleGrid, theme} from "@chakra-ui/react"

const options = {
    chart: {
        toolbar: { show: false},
        zoom: {enabled: false},
        foreColor: theme.colors.gray[500]
    },
    grid: { show: false},
    dataLabels: { enabled: false },
    tooltip: { enabled: false},
    xaxis: {
        type: "datetime",
        axisBorder: { 
            color: theme.colors.gray[600]
        },
        axisTicks: {
            color: theme.colors.gray[600]
        },
        categories: [
            "2021-12-8T00:00:00:000Z",
            "2021-12-9T00:00:00:000Z",
            "2021-12-10T00:00:00:000Z",
            "2021-12-11T00:00:00:000Z",
            "2021-12-12T00:00:00:000Z",
            "2021-12-13T00:00:00:000Z",
            "2021-12-14T00:00:00:000Z",
            "2021-12-15T00:00:00:000Z",
            "2021-12-16T00:00:00:000Z",
            "2021-12-17T00:00:00:000Z",
        ],
    },
    fill: {
        opacity: 0.3,
        type: "gradient",
        gradient: {
            shade: "dark",
            opacityFrom: 0.7,
            opacityTo: 0.3
        }
    }

}

const subsSeries = [{
    name: "subs",
    data: [12, 332, 545, 212, 121, 21, 434, 123, 23, 54]
}]

const taxSeries = [{
    name: "tax",
    data: [99, 23, 45, 233, 123, 344, 112, 22, 123, 34]
}]

export default function Dashboard() {

    return (
        <Flex direction="column" h="100vh">
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
                        <Text fontSize="lg" mb="4">
                            Incritos da semana
                        </Text>
                        <Chart type="area" height="160" options={options} series={subsSeries} />
                    </Box>
                    
                    <Box
                      borderRadius="8px"
                      p="8"
                      bg="gray.800"
                    >
                        <Text fontSize="lg" mb="4">
                            Taxa de abertura
                        </Text>
                        <Chart type="area" height="160" options={options} series={taxSeries} />
                    </Box>

                </SimpleGrid>
            </Flex>

        </Flex>
    )
}