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

                            <Heading size="4xl" as="u" color={blue}> Grid 1 </Heading>

                            <MyButton link={"https://atcoder.jp/contests/dp/tasks/dp_h"} > Enunt </MyButton>

                            <Text fontSize={"2xl"} color={blue}> Din enunt deducem ca este vorba despre o problema de numarare. Vom folosi tehnica programarii dinamice pentru a calcula numarul de drumuri posibile. </Text>

                            <Text fontSize={"2xl"} color={blue}> Solutia se bazeaza pe o simpla observatie, anume daca v[i][j] este 1 (blocaj) atunci dp[i][j]=0 (nu putem ajunge acolo). Recurenta rezultata este dp[i][j] = dp[i-1][j] + dp[i][j-1].</Text>
                            <Text fontSize={"2xl"} color={blue}> Solutie:</Text>

                            <MyCode>
                                {codeSnippet1}
                            </MyCode>

                            <HStack spacing="8">
                                <MyButton link="/subiecte/probleme-introductive/4">Inapoi</MyButton>
                                <MyButton link="/subiecte/probleme-introductive/6">Inainte</MyButton>
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

ll n,m,dp[1005][1005];
ll mod=(1e9)+7;
bool v[1005][1005];

int main()
{   ios_base::sync_with_stdio(0);
    cin.tie(0);
    cin>>n>>m;
    for(int i=1;i<=n;i++)
    {   for(int j=1;j<=m;j++)
        {   char  x;
            cin>>x;
            v[i][j]=(x!='.');
        }
    }
    for(int i=0;i<=n;i++)
    {   if(v[i][1]) break;
        dp[i][1]=1;
    }
    for(int i=0;i<=m;i++)
    {   if(v[1][i]) break;
        dp[1][i]=1;
    }
    for(int i=2;i<=n;i++)
        for(int j=2;j<=m;j++)
            if(v[i][j]) dp[i][j]=0;
            else dp[i][j]=(dp[i-1][j]%mod+dp[i][j-1]%mod)%mod;
    cout<<dp[n][m];
    return 0;
}

`;
