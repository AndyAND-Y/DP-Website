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

                            <Heading size="4xl" as="u" color={blue}> nunta1 </Heading>

                            <MyButton link={"https://www.pbinfo.ro/probleme/2137/nunta1"} > Enunt </MyButton>

                            <Text fontSize={"2xl"} color={blue}> In problema intervine notiunea de pd pe stari exponentiale. In acest caz starea este codificata chiar in valoare dp[i][j].</Text>

                            <Text fontSize={"2xl"} color={blue}> Solutie:</Text>

                            <MyCode>
                                {codeSnippet1}
                            </MyCode>

                            <HStack spacing="8">
                                <MyButton link="/subiecte/PD-cu-structuri-de-date/3">Inapoi</MyButton>
                                <MyButton link="/subiecte/PD-pe-stari-exponentiale/2">Inainte</MyButton>
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
using namespace std;

ifstream f("nunta1.in");
ofstream g("nunta1.out");

int dp[55][55];

int main()
{
    int n;
    f >> n;

    for (int i = 1; i <= n; i++)
    {
        int x;
        f >> x;
        dp[i][i] = (1 << x);
    }

    for(int lg = 2;lg<=n;++lg)
    {
        for(int i=1;i<=n;++i)
        {
            for(int k=i;k<i+lg;++k)
            {
                for(int bit1=0;bit1<=20;++bit1)
                {
                    if(dp[i][k] & (1<<bit1) )
                    {
                        for(int bit2=0;bit2<=20;++bit2)
                        {
                            if(dp[k+1][i+lg-1] & (1<<bit2) )
                            {
                                dp[i][i+lg-1] = dp[i][i+lg-1] | (1<< abs(bit1-bit2));
                            }
                        }
                    }
                }
            }
        }
    }

    int ans = 0;

    for(int i=0;i<=20;++i)
    {
        if(dp[1][n] & (1<<i))
        {
            ans++;
        }
    }

    g<<ans<<'\\n';

    for(int i=0;i<=20;++i)
    {
        if(dp[1][n] & (1<<i))
        {
            g<<i<< ' ';
        }
    }

    return 0;
}`;
