import { Text } from "@chakra-ui/react";

export function Logo() {
    return(
        <Text
        fontWeight="bold"
        fontSize="3xl"
        letterSpacing="tight"
        w="64"
      >
          dashgo
          <Text as="span" ml="1" color="pink">
              .
          </Text>
      </Text>
    )
}