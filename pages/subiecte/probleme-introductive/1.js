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

                            <Heading size="4xl" as="u" color={blue}> Frog 2 </Heading>

                            <MyButton link={"https://atcoder.jp/contests/dp/tasks/dp_b"} > Enunt </MyButton>

                            <Text fontSize={"2xl"} color={blue}> Acesta este o problema clasica de optimizare. Se cere numarul minim de pasi pentru a ajunge la o stare finala.</Text>

                            <Text fontSize={"2xl"} color={blue}> Solutia se bazeaza pe recurenta dp[i] = min(dp[i], dp[j] + abs(v[i] - v[j]) ) cu i = 1,n si j = i-k,i-1 .</Text>

                            <Text fontSize={"2xl"} color={blue}> Solutie:</Text>

                            <MyCode>
                                {codeSnippet1}
                            </MyCode>



                            <HStack spacing="8">
                                <MyButton link="/subiecte/exemple/rucsac" >Inapoi</MyButton>
                                <MyButton link="/subiecte/probleme-introductive/2">Inainte</MyButton>
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

int k,n,dp[100005],v[100005];
int main()
{   ios_base::sync_with_stdio(0);
    cin.tie(0);
    cin>>n>>k;
    for(int i=1;i<=n;dp[i]=(1<<30),i++) cin>>v[i];
    dp[1]=0;
    dp[2]=abs(v[1]-v[2]);
    for(int i=3;i<=n;i++)
        for(int j=i-1;j>=i-k and j;j--)
            dp[i]=min(dp[i],dp[j]+abs(v[i]-v[j]));
    cout<<dp[n];
    return 0;
}
`;
