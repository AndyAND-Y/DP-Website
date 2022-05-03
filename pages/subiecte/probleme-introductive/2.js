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

                            <Heading size="4xl" as="u" color={blue}> Vacation </Heading>

                            <MyButton link={"https://atcoder.jp/contests/dp/tasks/dp_c"} > Enunt </MyButton>

                            <Text fontSize={"2xl"} color={blue}> Problema impune limite asupra deciziilor pe care le putem face intr-o zi data. Astfel nu putem alege sa facem aceasi actiune doua zile consecutive. De aici deducem si recurenta pentru rezolvarea problemei.</Text>

                            <Text fontSize={"2xl"} color={blue}> Solutia se bazeaza pe recurenta dp[i][j] = max(dp[i][j], dp[i-1][k] + a/b/c[i] ) cu i = 1,n si k = 1,3 k!=j cu a,b sau c in funcite de caz.</Text>

                            <Text fontSize={"2xl"} color={blue}> Solutie:</Text>

                            <MyCode>
                                {codeSnippet1}
                            </MyCode>

                            <Text fontSize={"2xl"} color={blue}> Problema mai poate fii optimizita. Bazandu-ne pe faptul ca folosim doar ziua anterioara in recurenta putem reduce complexitatea de memorie la <Text as={"b"}> O(1) </Text>.</Text>


                            <HStack spacing="8">
                                <MyButton link="/subiecte/probleme-introductive/1">Inapoi</MyButton>
                                <MyButton link="/subiecte/probleme-introductive/3">Inainte</MyButton>
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

ll n,a[100005],b[100005],c[100005],dp[100005][5];

int main()
{   ios_base::sync_with_stdio(0);
    cin.tie(0);
    cin>>n;
    for(int i=1;i<=n;i++) cin>>a[i]>>b[i]>>c[i];
    dp[1][1]=a[1];
    dp[1][2]=b[1];
    dp[1][3]=c[1];
    for(int i=2;i<=n;i++)
    {   dp[i][1]=max(dp[i-1][2]+a[i],dp[i-1][3]+a[i]);
        dp[i][2]=max(dp[i-1][1]+b[i],dp[i-1][3]+b[i]);
        dp[i][3]=max(dp[i-1][1]+c[i],dp[i-1][2]+c[i]);
    }
    cout<<max(dp[n][1],max(dp[n][2],dp[n][3]));
    return 0;
}`;
