import { Center, Container, Flex, Heading, Stack, VStack, Text, HStack, Box, Button, Link, useColorModeValue, SimpleGrid } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../../../components/navbar';

export default function AllName() {

    const blue = useColorModeValue("blue.500");

    return (
        <>
            <Box bg="RGBA(255, 255, 255, 0.92)" width="full" height="100vh" >
                <Navbar />


                <Center as="main" m="20" >
                    <Container maxW={"container.lg"}>
                        <VStack spacing="50" align="start" >
                            <Heading size="4xl" color={blue} as="u"> PD pe stari exponentiale </Heading>

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
        title: "nunta 1",
        link: "/subiecte/PD-pe-stari-exponentiale/1",
    },
    {
        title: "Bal",
        link: "/subiecte/PD-pe-stari-exponentiale/2",
    },
    {
        title: "RecycleBin",
        link: "/subiecte/PD-pe-stari-exponentiale/3",
    },
    {
        title: "Ubuntzei",
        link: "/subiecte/PD-pe-stari-exponentiale/4",
    },


]