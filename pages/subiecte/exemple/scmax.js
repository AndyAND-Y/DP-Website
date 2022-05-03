import { Center, Container, Flex, Heading, VStack, Text, HStack, Box, Button, Link, useColorModeValue, UnorderedList, ListItem, Br, List, Grid, GridItem, Code } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../../../components/navbar';
import MyButton from '../../../components/myButton';
import MyCode from '../../../components/myCode';

export default function ScmaxPage() {

    const blue = useColorModeValue('blue.500');

    return (
        <>
            <Box bg="RGBA(255, 255, 255, 0.92)" width="full" height="100vh" >
                <Navbar />

                <Center as="main" mt="20">
                    <Container maxW="container.lg">

                        <VStack spacing="50" align="flex-start">

                            <Heading size="4xl" color={blue} as='u'> Subsir crescator maximal </Heading>

                            <Text fontSize='2xl' color={blue}> {textSnippet1} </Text>

                            <Text fontSize="2xl" color={blue}> {textSnippet2} Aceasta solutie are complexitatea <Text as={"b"}>O(N^2)</Text>. </Text>

                            <Text fontSize='2xl' color={blue}> Complexitatea optima este <Text as="b">O(N*logN)</Text>. {textSnippet3} </Text>

                            <MyCode>
                                {codeSnippet1}
                            </MyCode>

                            <Text fontSize="2xl" color={blue}> Problema poate sa fie rezolvata si cu ajutorul cautarii binare. Solutia desi este mai usor de scris si mai rapida, este greu de introdus intr-o problema mai complexa. </Text>

                            <MyCode>
                                {codeSnippet2}
                            </MyCode>

                            <HStack spacing="8">
                                <MyButton link="/subiecte/exemple/ssm" >Inapoi</MyButton>
                                <MyButton link="/subiecte/exemple/rucsac">Inainte</MyButton>
                            </HStack>

                        </VStack>

                    </Container>


                </Center>

            </Box>
        </>
    )

}

const textSnippet1 = "Fie un vector a cu N elemente. Numim subsir al lui a de lungime K un vector A = (ai1, ai2, ..., aiK) astfel incat sa avem i1 < i2 < ... < iK.Sa se determine un subsir al lui a care este ordonat strict crescator si care are lungimea maxima."
const textSnippet2 = "O prima rezolvare utilizeaza programarea dinamica. Se noteaza best[i] - lungimea maxima a unui subsir crescator care se termina pe pozitia i . Obtinem astfel urmatoarea relatie de recurenta: best[i] = 1 + max(best[j]) cu 1 ≤ j < i si a[j] < a[i] . Pentru a reconstrui solutia mai retinem un vector cu semnificatia pre[i] - pozitia valorii care preceda elementul i in subsirul crescator care se termina pe pozitia i.";
const textSnippet3 = "La fiecare pas i trebuie determinata lungimea cea mai mare best[j] unde 1 ≤ j < i astfel incat a[j] < a[i]. Pentru a afla aceasta informatie in timp optim O(logN) se poate folosi un arbore de intervale sau un arbore indexat binar."

const codeSnippet1 = `#include <bits/stdc++.h>
#define ll long long
using namespace std;
 
ifstream f("scmax.in");
ofstream g("scmax.out");
 
 
int n;
int aib[100005];
int v[100005];
int ans[100005];
vector < int > normm;
unordered_map < int ,int > mp;
 
 
int query(int poz)
{   int r=0;
    for(int i=poz;i>0;i-=(i&(-i)))
    {
        r=max(r,aib[i]);
    }
    return r;
}
void update(int poz,int x)
{
    for(int i=poz;i<=n;i+=(i&(-i)))
    {
        aib[i]=max(aib[i],x);
    }
    return ;
}
 
int main()
{
    f>>n;
    for(int i=1;i<=n;i++)
    {
        f>>v[i];
        normm.push_back(v[i]);
    }
    sort(normm.begin(),normm.end());
    for(int i=0;i<normm.size();i++)
        mp[normm[i]]=i+1;
 
    for(int i=1;i<=n;i++)
    {
        ans[i] = query(mp[v[i]]-1)+1;
        update(mp[v[i]],ans[i]);
    }
    g<<*max_element(ans+1,ans+n+1)<<'\\n';
    int target = *max_element(ans+1,ans+n+1);
 
    vector < int > raspuns;
 
    for(int i=n;i;i--)
    {
        if(ans[i]==target)
        {
            raspuns.push_back(v[i]);
            target--;
        }
    }
    reverse(raspuns.begin(),raspuns.end());
    for(auto x:raspuns) g<<x<< ' ';

    return 0;
 
}`

const codeSnippet2 = `#include <bits/stdc++.h>
#define ll long long
using namespace std;
 
ifstream f("scmax.in");
ofstream g("scmax.out");
int n, v[100003], best[100003], p[100003], maxim, k, L[100003], nr;
 
void afis(int i)
{
    if (p[i] > 0)  afis(p[i]);
    g<<v[i]<< " ";
}
 
int caut(int x)
{
    int p, u, m;
    p = 0; u = nr; m = (p+u)/2;
    while (p <= u)
    {
        if (v[L[m]] < x &&  v[L[m+1]] >= x) return m;
        else if (v[L[m+1]] < x) {p = m + 1; m = (p + u)/2;}
        else {u = m - 1; m = (p + u)/2;}
    }
    return nr;
}
 
int main()
{
    int i, j, poz;
    nr = 1;
 
    f>>n;
    for (i = 1; i <= n; i++) f>>v[i];
    best[1] = L[1] = 1; L[0] =  0;
 
    for (i = 2; i <= n; i++)
    {
        poz = caut(v[i]);
        p[i] = L[poz];
        best[i] = poz + 1;
        L[poz + 1] = i;
        if (nr < poz + 1)   nr = poz + 1;
    }
    maxim = 0; poz = 0;
    for (i = 1; i <= n; i++)
        if (maxim < best[i])
        {
            maxim = best[i]; poz = i;
        }
    g<<maxim<< "\\n"; 
    afis(poz);
    return 0;   
}`;

