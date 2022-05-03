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

                            <Heading size="4xl" as="u" color={blue}> Longest Path </Heading>

                            <MyButton link={"https://atcoder.jp/contests/dp/tasks/dp_g"} > Enunt </MyButton>

                            <Text fontSize={"2xl"} color={blue}> Aceasta este mai mult o problema introductiva. Este suficient sa trecem prin toate componentele conexe pentru rezolvarea problemei.  </Text>

                            <Text fontSize={"2xl"} color={blue}> Solutie:</Text>

                            <MyCode>
                                {codeSnippet1}
                            </MyCode>

                            <HStack spacing="8">
                                <MyButton link="/subiecte/PD-pe-stari-exponentiale/4">Inapoi</MyButton>
                                <MyButton link="/subiecte/PD-pe-grafuri/2">Inainte</MyButton>
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

vector < int > v[100005];
int n,m,dp[100005],viz[100005];

void dfs(int nod)
{

    if(v[nod].size() == 0 )
    {
        dp[nod] = 0 ;
        return ;
    }

    if(viz[nod] == 1) return ;

    viz[nod] = 1;

    int ans = 0;
    for(int vecin:v[nod])
    {
        if(viz[vecin])
        {
            ans = max(dp[vecin]+1,ans);
        }
        else
        {
            dfs(vecin);
            ans = max(dp[vecin]+1,ans);
        }
    }
    dp[nod] = ans;
    return ;
}



int main()
{   ios_base::sync_with_stdio(0);
    cin.tie(0);

    cin>>n>>m;

    for(int a,b,i=1;i<=m;i++)
    {   cin>>a>>b;
        v[a].push_back(b);
    }

    for(int i=1;i<=n;++i)
    {
        if(viz[i] == 0)
        {
            dfs(i);
        }
    }

    int ans = 0;

    for(int i=1;i<=n;++i)
    {
        ans = max(ans, dp[i]);
    }
    cout<<ans;
    return 0;
}

`;
