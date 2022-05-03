import { Center, Container, Flex, Heading, VStack, Text, HStack, Box, Button, Link, useColorModeValue, UnorderedList, ListItem, Br, List, Grid, GridItem, Code } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../../../components/navbar';
import MyButton from '../../../components/myButton';
import MyCode from '../../../components/myCode';

export default function FibonacciPage() {

    const blue = useColorModeValue('blue.500');

    return (
        <>
            <Box bg="RGBA(255, 255, 255, 0.92)" width="full" height="100vh" >
                <Navbar />

                <Center as="main" mt="20">
                    <Container maxW="container.lg">

                        <VStack spacing="50" align="flex-start">

                            <Heading size="4xl" as="u" color={blue}> Fibonacci </Heading>

                            <Text fontSize="2xl" color={blue}>Un exemplu bine cunoscut de PD este sirul lui Fibonacci. </Text>

                            <MyCode>
                                {codeSnippet1}
                            </MyCode>

                            <Text fontSize="2xl" color={blue}> O astfel de abordare are o complexitate de timp exponentiale <Text as="b"> O(2^n) </Text>.</Text>
                            <Text fontSize="2xl" color={blue}> Prin folosirea programarii dinamice problema poate sa fie redusa la <Text as="b"> O(n) </Text>.</Text>

                            <MyCode>
                                {codeSnippet2}
                            </MyCode>

                            <Text fontSize="2xl" color={blue}> Problema inca mai poate sa fie redusa la o complexitate logaritmica <Text as="b"> O(log n) </Text>. Mai multe delatii pot fii gasite <Link href='https://www.infoarena.ro/problema/kfib'>aici</Link>.</Text>

                            <HStack spacing="8">
                                <MyButton link="/subiecte/exemple/introducere" >Inapoi</MyButton>
                                <MyButton link="/subiecte/exemple/ssm">Inainte</MyButton>
                            </HStack>

                        </VStack>

                    </Container>


                </Center>

            </Box>
        </>
    )

}

const codeSnippet1 = `#include <bits/stdc++.h>
using namespace std;
 
int F(int n)
{
    if(n==1 or n==2) return 1;
    return F(n-1)+F(n-2);
}
 
int main()
{   
    int n;
    cin>>n;
    cout<<F(n);
    return 0;
}`

const codeSnippet2 = `#include <bits/stdc++.h>
using namespace std;

int fib[55];

int F(int n)
{
    if(n==1 or n==2) return fib[n]=1;

    if(fib[n]) return fib[n];

    return ( fib[n] = F(n-1) + F(n-2) );
}
 
int main()
{   
    int n;
    cin>>n;
    cout<<F(n);
    return 0;
}`