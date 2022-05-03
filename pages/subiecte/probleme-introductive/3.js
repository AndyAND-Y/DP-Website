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

                            <Heading size="4xl" as="u" color={blue}> Knapsack 1 </Heading>

                            <MyButton link={"https://atcoder.jp/contests/dp/tasks/dp_d"} > Enunt </MyButton>

                            <Text fontSize={"2xl"} color={blue}> Problema nu este de una singura spectaculoasa.Este clasica problema a rucsacului.Ea devine interesanta pusa in discutia cu urmatoarea problema.</Text>

                            <Text fontSize={"2xl"} color={blue}> Solutia se bazeaza pe recurenta deja bine cunoscuta dp[ j+w[i] ] = max(dp[ j+w[i] ] ,v[i] + dp[j] ) cu i=1,n si j=W-w[i],0 .</Text>

                            <Text fontSize={"2xl"} color={blue}> Solutie:</Text>

                            <MyCode>
                                {codeSnippet1}
                            </MyCode>

                            <HStack spacing="8">
                                <MyButton link="/subiecte/probleme-introductive/2">Inapoi</MyButton>
                                <MyButton link="/subiecte/probleme-introductive/4">Inainte</MyButton>
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

ll n,W,dp[100005],w[105],v[105];
int main()
{   ios_base::sync_with_stdio(0);
    cin.tie(0);
    cin>>n>>W;
    for(int i=1;i<=n;i++) cin>>w[i]>>v[i];
    for(int i=1;i<=n;i++)
    {   for(int j=W-w[i];j>=0;j--)
            dp[j+w[i]]=max(v[i]+dp[j],dp[j+w[i]]);
    }
    ll ans=0;
    for(int i=0;i<=W;i++)
        ans=max(ans,dp[i]);
    cout<<ans;
    return 0;
}`;
