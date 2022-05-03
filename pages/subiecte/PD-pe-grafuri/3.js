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

                            <Heading size="4xl" as="u" color={blue}> Deque </Heading>

                            <MyButton link={"https://atcoder.jp/contests/dp/tasks/dp_l"} > Enunt </MyButton>

                            <Text fontSize={"2xl"} color={blue}> Rezolvarea poate pare ca nu implica grafuri. Desi nu este vizibil atat de usor prin recursivitate se genereaza un graf din apelurile recursive.</Text>

                            <Text fontSize={"2xl"} color={blue}> Solutie:</Text>

                            <MyCode>
                                {codeSnippet1}
                            </MyCode>

                            <HStack spacing="8">
                                <MyButton link="/subiecte/PD-pe-grafuri/2">Inapoi</MyButton>
                                <MyButton link="/subiecte/PD-pe-grafuri/4">Inainte</MyButton>
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

ifstream f("test.in");
ofstream g("test.out");


int dp[3005][3005];
int v[3005];

void solve(int i,int j,int player)
{
    if(i>j) return ;
    if(dp[i][j]) return ;

    if(player)
    {
        solve(i+1,j,!player);
        solve(i,j-1,!player);
        dp[i][j] = max(v[i]+dp[i+1][j] , v[j]+dp[i][j-1]);
    }
    else
    {
        solve(i+1,j,!player);
        solve(i,j-1,!player);
        dp[i][j] = min(dp[i+1][j]-v[i], dp[i][j-1]-v[j]);
    }
}


main()
{   ios_base::sync_with_stdio(0);
    cin.tie(0);

    int n;
    cin>>n;

    for(int i=1;i<=n;++i)
    {
        cin>>v[i];
    }

    solve(1,n,1);
    cout<<dp[1][n];


    return 0;
}`;