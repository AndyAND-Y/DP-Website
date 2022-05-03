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

                            <Heading size="4xl" as="u" color={blue}> Ubuntzei </Heading>

                            <MyButton link={"https://www.pbinfo.ro/probleme/1069/ubuntzei"} > Enunt </MyButton>

                            <Text fontSize={"2xl"} color={blue}> In aceasta problema intervine mai multe tehnici de programare si algoritmi. Noi ne vom opri asupra pd pe stari exponentiale care intervine ca subproblema. Problema doreste calcularea unui drum de la 1 la n care trece prin toate cele K localitati. </Text>

                            <Text fontSize={"2xl"} color={blue}> Trebuie sa trecem prin toate starile posibile si sa construim lugimiile drumurilor minime. Pas cu pas adaugam la cate un oras din cele k in multime. Astfel, avem urmatoarea metoda de rezolvare: dp[stareaMultimii][ultimulNodAdaugat] = drumul minim de la 1 la ultimulNodAdaugat care trece prin toate nodurile din stareaMultimii. </Text>

                            <Text fontSize={"2xl"} color={blue}> Solutie:</Text>

                            <MyCode>
                                {codeSnippet1}
                            </MyCode>

                            <HStack spacing="8">
                                <MyButton link="/subiecte/PD-pe-stari-exponentiale/3">Inapoi</MyButton>
                                <MyButton link="/subiecte/PD-pe-grafuri/1">Inainte</MyButton>
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

ifstream f( "ubuntzei.in" );
ofstream g( "ubuntzei.out");

int n,m,k,drum_min[20][2005];
int drum_min_s[2005];
int dp[(1<<15)+5][20];
vector < pair < int ,int > > G[2005];
int orase[20];
void make_drum_min(int start,int dmin[])
{
    for(int i=1;i<=n;i++) dmin[i]=(1e9);

    dmin[start] = 0 ;
    set < pair < int ,int > > q;
    q.insert( {0,start} );

    while(q.size())
    {
        int nod = (*q.begin()).second;
        q.erase(q.begin());
        for(auto &vecin:G[nod])
        {
            int v=vecin.second;
            int c=vecin.first;

            if(dmin[nod]+c<=dmin[v])
            {
                q.erase({dmin[v],v});
                dmin[v]=dmin[nod]+c;
                q.insert({dmin[v],v});
            }
        }
    }
    return ;
}

int main()
{
    f>>n>>m>>k;

    for(int i=1;i<=k;i++)
        f>>orase[i];

    for(int i=1;i<=m;i++)
    {
        int a,b,c;
        f>>a>>b>>c;
        G[a].push_back({c,b});
        G[b].push_back({c,a});
    }
    make_drum_min(1,drum_min_s);
    if(k==0)
    {
        g<<drum_min_s[n]<<'\\n';
        return 0;
    }
    for(int i=1;i<=k;i++) make_drum_min(orase[i],drum_min[i]);
    for(int i=1;i<=(1<<k)-1;i++)
        for(int j=1;j<=k;j++)
            dp[i][j]=(1e9);
    for(int i=1;i<=(1<<k)-1;i++)
        for(int j=1;j<=k;j++)
        {
            if(i & (1<<(j-1)))
            {
                int ant = i - (1<<(j-1));
                if(ant == 0)
                {
                    dp[i][j] = drum_min_s[ orase[j] ];
                }
                else
                {
                    for(int q = 1 ; q<=k; ++q)
                        dp[i][j]=min( dp[i][j] , dp[ant][q]+drum_min[q][orase[j]]);
                }
            }
        }
    int ans=(1e9);
    for(int i=1;i<=k;i++) ans=min(ans, dp[ (1<<k)-1][i] + drum_min[i][n]);
    g<<ans<<'\\n';

    return 0;
}`;
