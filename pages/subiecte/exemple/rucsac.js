import { Center, Container, Flex, Heading, VStack, Text, HStack, Box, Button, Link, useColorModeValue, UnorderedList, ListItem, Br, List, Grid, GridItem, Code } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../../../components/navbar';
import MyButton from '../../../components/myButton';
import MyCode from '../../../components/myCode';

export default function RucsacPage() {

    const blue = useColorModeValue('blue.500');

    return (
        <>
            <Box bg="RGBA(255, 255, 255, 0.92)" width="full" height="100vh" >
                <Navbar />

                <Center as="main" mt="20">
                    <Container maxW="container.lg">

                        <VStack spacing="50" align="flex-start">

                            <Heading size="4xl" as="u" color={blue}> Problema Rucsacului </Heading>

                            <Text fontSize="2xl" color={blue} >Se da o multime formata din N obiecte, fiecare fiind caracterizat de o greutate si un profit. Sa se gaseasca o submultime de obiecte astfel incat suma profiturilor lor sa fie maxima, iar suma greutatilor lor sa nu depaseasca o valoare G.</Text>

                            <Text fontSize="2xl" color={blue}> Problema se rezuma la urmatoare dinamica dp[i][j] = suma maxima cu primele i element si cu greutatea insumata j , cu recurenta dp[i][j] = dp[i-1][j-w[i]] + p[i] (w[i] - greutatea , p[i] - costul) </Text>

                            <Text fontSize="2xl" color={blue}> Pentru o complexitate de memorie optima <Text as="b">O(n)</Text> este nevoie sa observam ca ne folosim doar de linia anterioare si astfel nu avem nevoie sa memoram totul. Problema se poate rezolva cu ajutorul unui singur vector.  </Text>

                            <MyCode>
                                {codeSnippet1}
                            </MyCode>


                            <HStack spacing="8">
                                <MyButton link="/subiecte/exemple/scmax" >Inapoi</MyButton>
                                <MyButton link="/subiecte/probleme-introductive/1">Inainte</MyButton>
                            </HStack>

                        </VStack>

                    </Container>


                </Center>

            </Box>
        </>
    )

}

const textSnippet1 = "";
const codeSnippet1 = `#include <bits/stdc++.h>
#define ll long long
using namespace std;
 
ifstream f ("rucsac.in");
ofstream g ("rucsac.out");
 
int n,G,dp[10005];
 
int main()
{
    f>>n>>G;
    int ans=0;
    for(int i=1;i<=n;++i)
    {
        int w,p;
        f>>w>>p;
        for(int j=G-w;j>=0;--j)
        {
            dp[j+w]=max(dp[j]+p,dp[j+w]);
            ans=max(ans,dp[j+w]);
        }
    }
    g<<ans;
    return 0;
}`;
