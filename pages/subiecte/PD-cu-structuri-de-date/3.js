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

                            <Heading size="4xl" as="u" color={blue}> minisecvente </Heading>

                            <MyButton link={"https://www.pbinfo.ro/probleme/2865/minisecvente"} > Enunt </MyButton>

                            <Text fontSize={"2xl"} color={blue}> Aceasta este o problema care arata un caz unde poate sa fie folosita structura RMQ. Pentru rezolvarea completa trebuie imbinata cu observatia ca pe fiecare nivel rmq este strict monoton.Deci aici deducem ca putem folosi cautarea binara.</Text>

                            <Text fontSize={"2xl"} color={blue}> Solutie:</Text>

                            <MyCode>
                                {codeSnippet1}
                            </MyCode>

                            <HStack spacing="8">
                                <MyButton link="/subiecte/PD-cu-structuri-de-date/2">Inapoi</MyButton>
                                <MyButton link="/subiecte/PD-pe-stari-exponentiale/1">Inainte</MyButton>
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

ifstream f ("minisecvente.in");
ofstream g ("minisecvente.out");

int n;
int rmq[100005][20];
int lg[100005];

int q(int a,int b)
{
    int d=b-a+1;
    int l=lg[d];
    return min(rmq[a][l],rmq[a+d-(1<<l)][l]);
}
main()
{
    f>>n;
    for(int i=1;i<=n;++i) f>>rmq[i][0];

    for(int i=2;i<=n;++i) lg[i]=lg[i/2]+1;

    for(int nivel=1;(1<<nivel)<=n;++nivel)
        for(int i=1;i<=n+1-(1<<(nivel-1));++i)
        {
            rmq[i][nivel] = min(rmq[i][nivel-1],rmq[i+(1<<(nivel-1))][nivel-1]);
        }
    int ans=0;
    for(int i=1;i<=n;i++)
    {
        int st=1,dr=n-i+1,x=(1e9);
        while(st<=dr)
        {
            int mij=(st+dr)/2;
            if(mij>q(i,i+mij-1)) dr=mij-1,x=min(x,mij);
            else st=mij+1;
        }
        if(x!=(1e9)) ans+=n-x-i+2;
    }
    g<<ans;
    return
}`;
