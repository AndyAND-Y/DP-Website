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

                            <Heading size="4xl" as="u" color={blue}> RecycleBin </Heading>

                            <MyButton link={"https://www.pbinfo.ro/probleme/3448/recyclebin"} > Enunt </MyButton>

                            <Text fontSize={"2xl"} color={blue}> Problema se rezuma la recurenta dp[i][j] = cea mai mare suma a unei secvente cu capatul din dreapta egal cu i si din care s-au eliminat secvente de lungimi puteri de 2, distincte, care insumate dau valoarea j. Complexitatea finala este <Text as="b"> O(n^2 * log n) </Text> </Text>

                            <Text fontSize={"2xl"} color={blue}> Solutie:</Text>

                            <MyCode>
                                {codeSnippet1}
                            </MyCode>

                            <HStack spacing="8">
                                <MyButton link="/subiecte/PD-pe-stari-exponentiale/2">Inapoi</MyButton>
                                <MyButton link="/subiecte/PD-pe-stari-exponentiale/4">Inainte</MyButton>
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

ifstream f("recyclebin.in");
ofstream g("recyclebin.out");

int dp[2005][2005];
int v[2005];
int main()
{

    int n;
    f>>n;
    for(int i=1;i<=n;++i)
    {
        f>>v[i];
    }
    int ans=0;

    for(int i=1;i<=n;++i)
    {
        for(int mask = 0; mask <=i; ++mask)
        {
            dp[i][mask]=max(dp[i-1][mask]+v[i],0);
            for(int j=0;(1<<j)<=i;++j)
            {
                if( mask & (1<<j))
                {
                    dp[i][mask] = max(dp[i][mask] , dp[i-(1<<j)][mask-(1<<j)]);
                    ans = max(ans,dp[i][mask]);
                }
            }
        }
    }
    g<<ans;
    return 0;

}`
