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

                            <Heading size="4xl" as="u" color={blue}> Bal </Heading>

                            <MyButton link={"https://www.pbinfo.ro/probleme/3508/bal"} > Enunt </MyButton>

                            <Text fontSize={"2xl"} color={blue}> Din enunt deducem ca este vorba despre o problema de numarare. Impreuna cu pd pe stari exponentiale se poate obtine punctajul maxim. Atentie la optimizarile de timp si memorie intrucat limitele sunt foarte stranse.  </Text>

                            <Text fontSize={"2xl"} color={blue}> Solutie:</Text>

                            <MyCode>
                                {codeSnippet1}
                            </MyCode>

                            <HStack spacing="8">
                                <MyButton link="/subiecte/PD-pe-stari-exponentiale/1">Inapoi</MyButton>
                                <MyButton link="/subiecte/PD-pe-stari-exponentiale/3">Inainte</MyButton>
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

const int N = (1<<24);
int mod = (1e9)+7;
int n,dp[N];
int ft[26][26];

int main()
{
    cin>>n;
    for(int i=1;i<=n;++i)
        for(int j=1;j<=n;++j)
        {   int x;
            cin>>x;
            if(x) ft[i][++ft[i][0]] = 1<<(j-1);
        }

    for(int i=1;i<=ft[1][0];++i) dp[ ft[1][i] ] = 1;

    for(int i=2;i<=n;++i)
        for(int k= (1<<n)-1;k>0;k--)
        {
            if(!dp[k]) continue;
            for(int j=1;j<=ft[i][0];++j)
            {
                if( k & ft[i][j] ) continue;

                dp[ k|ft[i][j] ] += dp[k];
                if(dp[ k|ft[i][j] ]>=mod)
                {
                    dp[ k|ft[i][j] ]-=mod;
                }
            }
            dp[k]=0;
        }
    cout<<dp[(1<<n) -1];

    return 0;
}`;
