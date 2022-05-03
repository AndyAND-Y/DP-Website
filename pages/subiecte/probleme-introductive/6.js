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

                            <Heading size="4xl" as="u" color={blue}> Coins </Heading>

                            <MyButton link={"https://atcoder.jp/contests/dp/tasks/dp_i"} > Enunt </MyButton>

                            <Text fontSize={"2xl"} color={blue}> {textSnippet1} </Text>

                            <Text fontSize={"2xl"} color={blue}> Solutia se bazeaza pe recurenta dp[i][j] = probabilitatea ca arucand primele i monede sa avem exact j monede cap. </Text>

                            <Text fontSize={"2xl"} color={blue}> Solutie:</Text>

                            <MyCode>
                                {codeSnippet1}
                            </MyCode>

                            <HStack spacing="8">
                                <MyButton link="/subiecte/probleme-introductive/5">Inapoi</MyButton>
                                <MyButton link="/subiecte/PD-cu-structuri-de-date/1">Inainte</MyButton>
                            </HStack>

                        </VStack>

                    </Container>


                </Center>

            </Box>
        </>
    )

}

const textSnippet1 = "Problema poate parea destul de complicata la prima vedere. Plecam prima data de la ideea ca probabilitatea sa pice pajura este 1 - probabilitatea sa pice cap. (prob_tail[i] = 1 - prob_head[i]).";
const codeSnippet1 = `#include <bits/stdc++.h>
#define ll long long
using namespace std;

double prob_tail[3005];
double prob_head[3005];
int n;

double dp[3005][3005];



main()
{   ios_base::sync_with_stdio(0);
    cin.tie(0);

    cin>>n;
    for(int i=1;i<=n;++i)
    {
        cin>>prob_head[i];
        prob_tail[i] = 1 - prob_head[i];
    }
    dp[0][0] = 1;

    for(int i=1;i<=n;++i)
    {
        dp[i][0] = dp[i-1][0]*prob_tail[i];
    }

    for(int i=1;i<=n;++i)
    {
        for(int j=1;j<=i;++j)
        {
            dp[i][j] = dp[i-1][j-1]*prob_head[i]+dp[i-1][j]*prob_tail[i];
        }
    }


    double ans = 0;
    for(int i=n/2+1; i<=n;++i)
    {
        ans += dp[n][i];
    }
    cout<<fixed<<setprecision(10)<<ans;

    return 0;
}`;
