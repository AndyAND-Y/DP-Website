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

                            <Heading size="4xl" as="u" color={blue}> TreeGCD </Heading>

                            <MyButton link={"https://www.infoarena.ro/problema/treegcd"} > Enunt </MyButton>

                            <Text fontSize={"2xl"} color={blue}> Gasirea recurentei potrivite pentru aceasta problema este dificila. Una eficienta din punct de vedere a complexitatii timpului este greu de gasit si de implementat. In solutie se foloseste o parcurgere dfs a arborelui pentru a implementa recurenta. </Text>

                            <Text fontSize={"2xl"} color={blue}> Solutie:</Text>

                            <MyCode>
                                {codeSnippet1}
                            </MyCode>

                            <HStack spacing="8">
                                <MyButton link="/subiecte/PD-pe-grafuri/3">Inapoi</MyButton>
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
#define int ll
using namespace std;
 
ifstream f("treegcd.in");
ofstream g("treegcd.out");
 
vector < int > G[105];
int dp[10004][105];
int n,m;
int mod = (1e9)+7;
int nrdiv[10004];
bool fp2[10004];
inline void dfs(int nod,int tata)
{
    for(int i=2;i<=m;++i) dp[i][nod] = 1;
    for(int vecin:G[nod])
    {
        if(vecin!=tata)
        {
            dfs(vecin,nod);
            vector < int > aux(m+5);
 
            for(int i=2;i<=m;++i)
            {
                if(fp2[i]==0)
                {
                    int aa=0;
                    for(int j=i;j<=m;j+=i)
                    {
                        aa = aa + dp[j][vecin];
                        if(aa>=mod)
                        {
                            aa-=mod;
                        }
 
                    }
                    if(nrdiv[i]%2==0) aa = -aa+mod;
 
                    for(int j=i;j<=m;j+=i)
                    {   aux[j] = (aux[j]+aa);
                        if(aux[j]>=mod)
                        {
                            aux[j]-=mod;
                        }
                    }
                }
            }
 
            for(int i=2;i<=m;++i)
                dp[i][nod] = (1LL*dp[i][nod]*aux[i])%mod;
        }
 
    }
}
 
vector < int > p;
 
main()
{
    f>>n>>m;
    for(int i=1;i<n;++i)
    {
        int a,b;
        f>>a>>b;
        G[a].push_back(b);
        G[b].push_back(a);
    }
 
    for(int i=2;i<=m;++i)
    {
        if(nrdiv[i]==0)
        {   nrdiv[i]=1;
            for(int j=2*i;j<=m;j+=i) nrdiv[j]++;
            p.push_back(i);
        }
        else
        {   int x = i;
            int nrf=0;
            for(int d:p)
            {
                if(x%(d*d)==0)
                {
                    fp2[i] = 1;
                    break;
                }
                if(d*d>x) break;
            }
        }
    }
    dfs(1,-1);
    int ans = 0;
    for(int i=2;i<=m;++i)
    {
        ans = (ans+dp[i][1])%mod;
    }
    g<<ans;
    return 0;
}`;