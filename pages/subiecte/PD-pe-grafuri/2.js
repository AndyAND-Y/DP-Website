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

                            <Heading size="4xl" as="u" color={blue}> Independent Set </Heading>

                            <MyButton link={"https://atcoder.jp/contests/dp/tasks/dp_p"} > Enunt </MyButton>

                            <Text fontSize={"2xl"} color={blue}> Rezolvare se reducere la o clasica problema de numarare. Astfel, dp[i][cul]=numarul de posibilitati din subarborele nodului i care are culoare cul .</Text>

                            <Text fontSize={"2xl"} color={blue}> Solutie:</Text>

                            <MyCode>
                                {codeSnippet1}
                            </MyCode>

                            <HStack spacing="8">
                                <MyButton link="/subiecte/PD-pe-grafuri/1">Inapoi</MyButton>
                                <MyButton link="/subiecte/PD-pe-grafuri/3">Inainte</MyButton>
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

vector < int > G[100005];

int n,dp[100005][4];
int mod=(1e9)+7;

void dfs(int nod,int tata)
{   dp[nod][0]=1;
    dp[nod][1]=1;
    for(int vecin:G[nod])
    {
        if(vecin!=tata)
        {   dfs(vecin,nod);
            dp[nod][0]*=(dp[vecin][1]+dp[vecin][0])%mod;
            dp[nod][0]%=mod;
            dp[nod][1]*=(dp[vecin][0])%mod;
            dp[nod][1]%=mod;
        }
    }
}
main()
{
    cin>>n;
    for(int i=1;i<n;++i)
    {
        int a,b;
        cin>>a>>b;
        G[a].push_back(b);
        G[b].push_back(a);
    }
    dfs(1,0);
    cout<< (dp[1][0]+dp[1][1])%mod;
    return 0;

}`;