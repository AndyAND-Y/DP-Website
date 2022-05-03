import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Center,
    Container,
    Divider,
} from '@chakra-ui/react';



export default function Navbar() {

    const linkColor = useColorModeValue('blue.500');
    const linkHoverColor = useColorModeValue('white');
    const popoverContentBgColor = useColorModeValue('white');

    return (
        <>
            <Center bg="RGBA(255, 255, 255, 0.80)">
                <Stack direction={'row'} spacing={4}>
                    {navItems.map((navItem) => (
                        <Box key={navItem.label}>
                            <Popover trigger={'hover'} placement={'bottom-start'}>
                                <PopoverTrigger>
                                    <Link
                                        p={2}
                                        href={navItem.href ?? '#'}
                                        fontSize={'2xl'}
                                        fontWeight={500}
                                        color={linkColor}
                                        _hover={{
                                            textDecoration: 'none',
                                            color: linkHoverColor,
                                            bg: linkColor,
                                        }}>
                                        {navItem.label}
                                    </Link>
                                </PopoverTrigger>

                                {navItem.children && (
                                    <PopoverContent
                                        border={0}
                                        boxShadow={'xl'}
                                        bg={popoverContentBgColor}
                                        p={4}
                                        rounded={'xl'}
                                        minW={'sm'}>
                                        <Stack>
                                            {navItem.children.map((child) => (
                                                <DesktopSubNav key={child.label} {...child} />
                                            ))}
                                        </Stack>
                                    </PopoverContent>
                                )}
                            </Popover>
                        </Box>
                    ))}
                </Stack>
            </Center>
            <Divider mt="1" size="2xl" />
        </>
    )
}

function DesktopSubNav({ label, href }) {

    const linkColor = useColorModeValue('blue.500');
    const linkHoverColor = useColorModeValue('white');
    const popoverContentBgColor = useColorModeValue('white');

    return (
        <Link
            href={href}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            color={linkColor}
            _hover={{ bg: useColorModeValue("blue.500") }}>
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'white' }}
                        fontWeight={500}>
                        {label}
                    </Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                </Flex>
            </Stack>
        </Link>
    );

}


const navItems = [

    {
        label: "Acasa",
        href: "/"
    },
    {
        label: "Subiecte",
        children: [
            {
                label: "Exemple",
                href: "/subiecte/exemple"
            },
            {
                label: "Probleme Introductive",
                href: "/subiecte/probleme-introductive"
            },
            {
                label: "PD cu structuri de date",
                href: "/subiecte/PD-cu-structuri-de-date",
            },
            {
                label: "PD pe stari exponentiale",
                href: "/subiecte/PD-pe-stari-exponentiale",
            },
            {
                label: "PD pe grafuri",
                href: "/subiecte/PD-pe-grafuri"
            },
            {
                label: "Toate subiectele",
                href: "/subiecte"
            }
        ]
    },
    {
        label: "Despre",
        href: '/despre'
    }

] 