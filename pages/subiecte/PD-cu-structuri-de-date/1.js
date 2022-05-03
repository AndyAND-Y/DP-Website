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

                            <Heading size="4xl" as="u" color={blue}> Rau </Heading>

                            <MyButton link={"https://www.pbinfo.ro/probleme/3470/rau"} > Enunt </MyButton>

                            <Text fontSize={"2xl"} color={blue}> Gradul de dificultate a problemei este unul ridicat. Pentru rezolvarea completa a problemei este necesara nu doar cunoasterea tehnicii PD, ci si implementarea structurilor de date avasante (arbori de intervale) impreuna cu anumite observatii.  </Text>

                            <Text fontSize={"2xl"} color={blue}> Pentru o intelegere mai buna a problemei vom pleca de o solutie de la o solutie mai putin eficienta. </Text>

                            <MyCode>
                                {codeSnippet2}
                            </MyCode>

                            <Text fontSize={"2xl"} color={blue}> Aceasta solutie are complexitate <Text as="b">O(n*k)</Text>. Ea se bazeaza pe recurenta dp[j]=min(dp[j],dp[i]+cost) cu i=1,n si j = i+1,min(i+k,n).Ineficienta provine din cautarea minimului, care este liniara. Rezolvarea completa cere reducerea acestei cautari la una logaritmica.</Text>

                            <Text fontSize={"2xl"} color={blue}> Solutie:</Text>

                            <MyCode>
                                {codeSnippet1}
                            </MyCode>

                            <HStack spacing="8">
                                <MyButton link="/subiecte/probleme-introductive/6">Inapoi</MyButton>
                                <MyButton link="/subiecte/PD-cu-structuri-de-date/2">Inainte</MyButton>
                            </HStack>

                        </VStack>

                    </Container>


                </Center>

            </Box>
        </>
    )

}

const textSnippet1 = "";
const codeSnippet2 = `#include <bits/stdc++.h>
#define ll long longå
using namespace std;
ifstream f ( "rau.in" );
ofstream g ( "rau.out" );

int dp[50004];
int n,h[50004],k,C;
int main()
{
    f>>n>>k>>C;
    for(int i=1;i<=n;i++)
    {
        f>>h[i];
        dp[i]=(1e18);
    }
    dp[1]=0;
    for(int i=1;i<=n;i++)
        for(int j=i+1;j<=min(i+k,n);j++)
        {
            int cost= cbrt(abs(h[i]-h[j]))+C;
            dp[j]=min(dp[j],dp[i]+cost);
        }
    g<<dp[n]<< '\\n';
    return 0;
}`;

const codeSnippet1 = `#include <bits/stdc++.h>
#define ll long long
using namespace std;

ifstream f("rau.in");
ofstream g("rau.out");

int v[50004];
deque < int > fr[400005];
int aint[4*400005];
int dp[50004];
int n,k,C,hmax;

int poz,val;

inline void update(int nod,int st,int dr)
{
    if(st==dr)
    {
        aint[nod] = val;
        return;
    }
    int mij=(st+dr)/2;
    if(poz<=mij) update(nod*2,st,mij);
    else update(nod*2+1,mij+1,dr);
    aint[nod] = min(aint[nod*2],aint[nod*2+1]);
    return ;
}

int lq,rq;

inline int qr(int nod,int st,int dr)
{
    if(lq<=st and dr<=rq)
    {
        return aint[nod];
    }
    if(dr<lq or rq<st)
    {
        return (1e9);
    }
    int mij=(st+dr)/2;
    int st1= qr(nod*2,st,mij);
    int dr2= qr(nod*2+1,mij+1,dr);
    return min(st1,dr2);
}

void build(int nod,int st,int dr)
{
    if(st==dr)
    {
        aint[nod] = 1e9;
        return ;
    }
    int mij=(st+dr)/2;

    build(2*nod,st,mij);
    build(2*nod+1,mij+1,dr);
    aint[nod] = min(aint[nod*2],aint[nod*2+1]);
    return ;
}


int main()
{
    f>>n>>k>>C;

    for(int i=1;i<=n;++i)
    {   f>>v[i];
        hmax=max(hmax,v[i]);
        dp[i]=(1e9);
    }
    build(1,1,hmax);
    dp[1]=0;
    poz = v[1];
    val = dp[1];
    update(1,1,hmax);
    fr[v[1]].push_back(1);

    for(int i=2;i<=n;++i)
    {
        for(int j=2;j*j*j<=hmax;++j)
        {
            int st = v[i]-j*j*j+1;
            int dr = v[i]-(j-1)*(j-1)*(j-1);
            st = max(0,st);
            dr = max(0,dr);

            lq = st;
            rq = dr;

            int qrst = qr(1,1,hmax);
            qrst+=j-1+C;
            dp[i]=min(dp[i],qrst);

        }

        for(int j=2;j*j*j<=hmax;++j)
        {
            int st = v[i]+(j-1)*(j-1)*(j-1);
            int dr = v[i]+j*j*j-1;

            st=min(st,hmax);
            dr=min(dr,hmax);

            lq = st;
            rq = dr;

            int qrdr = qr(1,1,hmax);
            qrdr+=j-1+C;
            dp[i]=min(dp[i],qrdr);
        }
        lq = v[i];
        rq = v[i];
        dp[i] = min( dp[i], qr(1,1,hmax)+C);
        fr[v[i]].push_back(i);
        if(fr[v[i]].size() == 1 )
        {   poz = v[i];
            val = dp[i];
            update(1,1,hmax);
        }

        if(i>k)
        {
            fr[v[i-k]].pop_front();
            int valx = 0;
            if( ( fr[ v[i-k] ].size() ) == 0 )
            {
                valx = (1e9);
            }
            else
            {
                valx = dp[ fr[ v[i-k] ].front() ];
            }
            poz = v[i-k];
            val = valx;
            update(1,1,hmax);
        }
    }

    g<<dp[n];
    return 0;
}`;
