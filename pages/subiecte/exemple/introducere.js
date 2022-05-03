import { Center, Container, Flex, Heading, VStack, Text, HStack, Box, Button, Link, useColorModeValue, UnorderedList, ListItem, Br, List, Grid, GridItem } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../../../components/navbar';
import MyButton from '../../../components/myButton';

export default function IntroducerePage() {

    const blue = useColorModeValue('blue.500');

    return (
        <>
            <Box bg="RGBA(255, 255, 255, 0.92)" width="full" height="100vh" >
                <Navbar />


                <Center as="main" m="20" >

                    <Container maxW="container.lg">
                        <VStack spacing="50" align="flex-start">

                            <Heading size="4xl" color={blue} as='u'>Introducere</Heading>

                            <Text fontSize="2xl" color={blue} > Programarea dinamică este o metodă de rezolvare a unor probleme de informatică în care se cere de regulă determinarea unei valori maxime sau minime, sau numărarea elementelor unei mulțimi.</Text>

                            <Flex>

                                <VStack spacing="4" align="flex-start">
                                    <Text fontSize="2xl" color={blue}>Similar cu metoda Divide et Impera, problema se împarte în subprobleme:</Text>

                                    <UnorderedList color={blue} fontSize="2xl">
                                        <ListItem>
                                            de aceeași natură cu problema inițială;
                                        </ListItem>
                                        <ListItem>de dimensiuni mai mici;</ListItem>
                                        <ListItem>spre deosebire de Divide et Impera, problemele nu mai sunt independente, ci se suprapun – probleme superpozabile!</ListItem>
                                        <ListItem>rezolvarea optimă a problemei inițiale depinde de rezolvarea optimă a subproblemelor – principiul optimalității!</ListItem>
                                    </UnorderedList>
                                </VStack>
                            </Flex>

                            <Text fontSize="2xl" color={blue}>Observație: Subproblemele se mai numesc și stări ale problemei.</Text>

                            <Center>
                                <MyButton link="/subiecte/exemple/fibonacci"> Inainte</MyButton>
                            </Center>

                        </VStack>
                    </Container>
                </Center>
            </Box>

        </>
    )

}