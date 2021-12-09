import { Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface TitleProps {
    children: ReactNode
}

export function Title({children}: TitleProps) {
    return (
        <Heading size="lg" fontWeight="normal"> {children} </Heading>
    )
}
