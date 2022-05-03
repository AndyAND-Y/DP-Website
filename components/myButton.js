import { Button, Link } from "@chakra-ui/react";

export default function MyButton({ link, children }) {
    return (
        <>
            <Link href={link} fontSize="2xl" >
                <Button
                    size="lg"
                    bg="blue.500"
                    color="white"
                    _hover={{

                        color: "blue.500",
                        bg: "gray.100",
                    }}
                >
                    {children}
                </Button>
            </Link>

        </>
    )
}