import { Center, Container, Flex, Heading, VStack, Text, HStack, Box, Button, Link, useColorModeValue, UnorderedList, ListItem, Br, List, Grid, GridItem, Code } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../../../components/navbar';
import MyButton from '../../../components/myButton';
import MyCode from '../../../components/myCode';

export default function NamePage() {

    const blue = useColorModeValue('blue.500');

    return (
        <>
            <Box bg="RGBA(255, 255, 255, 0.92)" width="full" height="100vh" >
                <Navbar />

                <Center as="main" mt="20">
                    <Container maxW="container.lg">

                        <VStack spacing="50" align="flex-start">

                            <Heading size="4xl" as="u" color={blue}> Static Range Minimum Queries </Heading>

                            <MyButton link={"https://cses.fi/problemset/task/1647/"} > Enunt </MyButton>

                            <Text fontSize={"2xl"} color={blue}> Structura de date RMQ se bazeaza pe tehnica programarii dinamice.Ea poate aparea in problema de una singura sau ca o subproblema ca in cazul LCA-ului (Cel mai mic stramos comun). </Text>

                            <Text fontSize={"2xl"} color={blue}> Solutie:</Text>

                            <MyCode>
                                {codeSnippet1}
                            </MyCode>

                            <HStack spacing="8">
                                <MyButton link="/subiecte/PD-cu-structuri-de-date/1">Inapoi</MyButton>
                                <MyButton link="/subiecte/PD-cu-structuri-de-date/3">Inainte</MyButton>
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
#define int ll
using namespace std;
 
ifstream f("test.in");
ofstream g("test.out");
 
int rmq[20][200005];
int p2[200005];
int n,q;
 
int solve(int a,int b)
{
    int d = b-a+1;
    int j = p2[d];
    return min(rmq[j][a],rmq[j][a + d - (1<<j) ]);
}
 
main()
{
    cin>>n>>q;
 
    for(int i=2;i<=n;++i) p2[i] = p2[i/2]+1;
 
    for(int i=1;i<=n;++i)
    {
        cin>>rmq[0][i];
    }
 
    ///rmq [j][i] = min pe (i,i+2^j-1)
 
    for(int j = 1 ; (1<<j) <= n ; ++j )
    {
        for(int i=1;i <= n-(1<<j)+1 ; ++i)
        {
            rmq[j][i] = min(rmq[j-1][i] , rmq[j-1][i + ( 1<<(j-1) ) ]);
        }
    }
 
    while(q--)
    {
        int a,b;
        cin>>a>>b;
        cout<<solve(a,b)<< '\\n';
    }
 
}`;
