import { Center, Container, Flex, Heading, VStack, Text, HStack, Box, Button, Link } from '@chakra-ui/react';
import Head from 'next/head';
import MyButton from '../components/myButton';
import Navbar from '../components/navbar';

export default function Home() {
    return (
        <>
            <Head>
                <title>Atestat Informatica</title>
            </Head>
            <Box bg="RGBA(255, 255, 255, 0.92)" width="full" height="100vh" >
                <Navbar />


                <Center as="main" m="20" >

                    <VStack spacing="200">
                        <VStack spacing="100">
                            <Heading size="4xl" color="blue.500" as="u">Atestat Informatica</Heading>
                            <Heading size="2xl" color="blue.500" as="u"> Programare Dinamica </Heading>

                            <HStack spacing="70">

                                <Text color="blue.500" fontSize="2xl">Elev: Slatinaru Andrei Alexandru</Text>
                                <Text color="blue.500" fontSize="2xl">Profesor Indrumator: Ene Dumitru</Text>
                            </HStack>
                        </VStack>

                        <MyButton link="/subiecte/exemple/introducere" >Incepe</MyButton>

                    </VStack>

                </Center>
            </Box>


        </>
    );
}