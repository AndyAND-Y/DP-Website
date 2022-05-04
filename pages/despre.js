import { Center, Container, Flex, Heading, VStack, Text, HStack, Box, Button, Link, useColorModeValue, UnorderedList, ListItem, Br, List, Grid, GridItem, Code } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/navbar';

export default function NamePage() {

    const blue = useColorModeValue('blue.500');

    return (
        <>
            <Box bg="RGBA(255, 255, 255, 0.92)" width="full" height="100vh" >
                <Navbar />

                <Center as="main" mt="20">
                    <Container maxW="container.lg">

                        <VStack spacing="50" align="flex-start">

                            <Heading size="4xl" as="u" color={blue}> Despre </Heading>

                            <Text fontSize={"2xl"} color={blue}> Acest material pe langa faptul ca reprezinta subiectul atestatului, doreste sa vina in ajutorul elevilor care doresc sa afle mai multe despre tehnica in cauza. </Text>

                            <Text fontSize={"2xl"} color={blue}> Problemele au fost alese in functie de notiunile pe care acestea le prezinta ,cat si dupa frecventa lor in concursuri. </Text>

                            <Text fontSize={"2xl"} color={blue}> De preferat ar fi ca elevul care citeste acest material sa incerce mai intai sa gaseasca el rezolvari la diferitele probleme si dupa sa consulte materialul. </Text>

                        </VStack>

                    </Container>


                </Center>

            </Box>
        </>
    )

}

const textSnippet1 = "";
const codeSnippet1 = ``;
