import React from "react";
import dynamic from "next/dynamic";
import "@uiw/react-textarea-code-editor/dist.css";
import { Container, Flex, useColorModeValue } from "@chakra-ui/react";

const CodeEditor = dynamic(
    () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
    { ssr: false }
);

export default function MyCode({ children }) {
    const [code, setCode] = React.useState(
        `${children}`
    );

    return (
        <Flex maxWidth="container.lg">
            <CodeEditor
                value={code}
                language="c"
                placeholder=""
                onChange={(evn) => setCode(evn.target.value)}
                padding={15}
                style={{
                    fontSize: 18,
                    backgroundColor: "white",
                    fontFamily:
                        "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace"
                }}
            />
        </Flex>
    );
}

