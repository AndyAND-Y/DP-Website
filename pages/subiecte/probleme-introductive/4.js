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

                            <Heading size="4xl" as="u" color={blue}> Knapsack 2 </Heading>

                            <MyButton link={"https://atcoder.jp/contests/dp/tasks/dp_e"} > Enunt </MyButton>

                            <Text fontSize={"2xl"} color={blue}> Din enunt deducem ca este vorba despre o problema de numarare. Mai exact numarul de drumuri posibile intr-o matrice cu o configuratie data si cu restrictiile de miscare prezentate. </Text>

                            <Text fontSize={"2xl"} color={blue}> Solutia se bazeaza de data asta pe recurenta asemanatoare. Ea este dp[i] = greutatea minima pentru a ajunge la costul i. Recurenta care rezolva problema este dp[j+v[i]]=min(dp[j+v[i]],dp[j]+w[i]) cu i=1,n si j=pretmax-v[i],0. Raspunsul va fi ultimul pozitia maxima unde dp[i] este mai mic sau egal ca W </Text>

                            <Text fontSize={"2xl"} color={blue}> Solutie:</Text>

                            <MyCode>
                                {codeSnippet1}
                            </MyCode>

                            <HStack spacing="8">
                                <MyButton link="/subiecte/probleme-introductive/3">Inapoi</MyButton>
                                <MyButton link="/subiecte/probleme-introductive/5">Inainte</MyButton>
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

ll dp[100005],v[100005],w[100005];
int main()
{   ios_base::sync_with_stdio(0);
    cin.tie(0);
    int n,W;
    cin>>n>>W;
    for(int i=1;i<=n;i++) cin>>w[i]>>v[i];
    for(int i=0;i<=(1e5);i++)
        dp[i]=(1<<30);
    int pretmax=0;
    dp[0]=0;
    for(int i=1;i<=n;i++) pretmax+=v[i];
    for(int i=1;i<=n;i++)
        for(int j=pretmax-v[i];j>=0;j--)
            dp[j+v[i]]=min( dp[j+v[i]],dp[j]+w[i]);

    for(int i=(1e5);i;i--)
        if(dp[i]<=W)
        {   cout<<i;
            return 0;
        }
    return 0;
}
`;
