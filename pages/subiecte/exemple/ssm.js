import { Center, Container, Flex, Heading, VStack, Text, HStack, Box, Button, Link, useColorModeValue, UnorderedList, ListItem, Br, List, Grid, GridItem, Code } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../../../components/navbar';
import MyButton from '../../../components/myButton';
import MyCode from '../../../components/myCode';

export default function SsmPage() {

    const blue = useColorModeValue('blue.500');

    return (
        <>
            <Box bg="RGBA(255, 255, 255, 0.92)" width="full" height="100vh" >
                <Navbar />

                <Center as="main" mt="20">
                    <Container maxW="container.lg">

                        <VStack spacing="50" align="flex-start">

                            <Heading size="4xl" color={blue} as='u'> Subsecventa de suma maxima </Heading>

                            <Text fontSize="2xl" color={blue}> Se da un şir s1, s2, .., sN. O subsecvenţă a şirului este de forma: si, si+1, ..., sj cu 1 ≤ i ≤ j ≤ N, iar suma subsecvenţei este si + si+1 + ... + sj. Se cere să se determine subsecvenţa de sumă maximă.</Text>

                            <Text fontSize="2xl" color={blue}> Solutie : </Text>

                            <MyCode>
                                {codeSnippet1}
                            </MyCode>

                            <Text fontSize="2xl" color={blue}> Construim un şir best[i] egal cu costul subsecvenţei de sumă maximă ce se termină pe poziţia i. Rezultă recurenţa următoare: best[i] = max(best[i-1] + s[i], s[i]). Rezultă mai departe că s[i] este sfârşitul unei subsecvenţe ce se extinde spre stânga cu subsecvenţa de sumă maximă ce se termină în s[i-1] doar dacă această subsecvenţă are suma pozitivă. În implementare nu este necesar să reţinem întregul vector best, ci doar o variabilă, după cum se vede şi în cod. <Text as="b">Complexitate: O(N)</Text> .</Text>


                            <HStack spacing="8">
                                <MyButton link="/subiecte/exemple/fibonacci" >Inapoi</MyButton>
                                <MyButton link="/subiecte/exemple/scmax">Inainte</MyButton>
                            </HStack>

                        </VStack>

                    </Container>


                </Center>

            </Box>
        </>
    )

}

const codeSnippet1 = `#include <bits/stdc++.h>
using namespace std;
 
ifstream f("ssm.in");
ofstream g("ssm.out");

int n;

int main() {
    
    f >> n;
 
    int bestSum = -int(2e9), sum = 0, beg, end, idx;
    for(int i=1;i<=n;++i)
    {
        int S;
        cin>>S;
        if (sum < 0)
            sum = S, idx = i;
        else
            sum += S;
        if (bestSum < sum)
            bestSum = sum, beg = idx, end = i;
    }
    
    g << bestSum << " " << beg << " " << end;
 
    f.close(), g.close();
    return 0;
}
`;