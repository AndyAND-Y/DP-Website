import { Center, Container, Flex, Heading, Stack, VStack, Text, HStack, Box, Button, Link, useColorModeValue, SimpleGrid } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../../../components/navbar';

export default function AllExemple() {

    const blue = useColorModeValue("blue.500");

    return (
        <>
            <Box bg="RGBA(255, 255, 255, 0.92)" width="full" height="100vh" >
                <Navbar />


                <Center as="main" m="20" >
                    <Container maxW={"container.lg"}>
                        <VStack spacing="50" align="start" >
                            <Heading size="4xl" color={blue} as="u">Exemple</Heading>

                            <VStack spacing="30" align="flex-start">
                                {pagini.map(pagina => (
                                    <Container p={4} maxW={"container.lg"} key={pagina.title} >
                                        <Link
                                            href={pagina.link}
                                            color={blue}
                                        >
                                            <Box
                                                p={4}
                                                maxWidth="container.xl"
                                                borderWidth={2}
                                                borderColor={blue}
                                                margin={2}
                                                boxShadow={"2xl"}
                                                color={blue}
                                                background={"white"}
                                                _hover={{
                                                    color: "white",
                                                    borderColor: "white",
                                                    background: blue,
                                                }}

                                            >
                                                <HStack spacing="30">
                                                    <Heading size="4xl"> {pagina.title} </Heading>
                                                </HStack>
                                            </Box>
                                        </Link>
                                    </Container>
                                ))}

                            </VStack>

                        </VStack>
                    </Container>

                </Center>
            </Box>

        </>
    )
}

const pagini = [

    {
        title: "Introducere",
        link: "exemple/introducere",
    },
    {
        title: "Fibonacci",
        link: "exemple/fibonacci",
    },
    {
        title: "Subsecventa de suma maxima",
        link: "exemple/ssm",
    },
    {
        title: "Subsir crescator maximal",
        link: "exemple/scmax",
    },
    {
        title: "Problema rucsacului",
        link: "exemple/rucsac",
    }

]