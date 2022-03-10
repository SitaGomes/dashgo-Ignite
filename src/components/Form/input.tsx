import { forwardRef, ForwardRefRenderFunction } from "react"

import { FieldError } from "react-hook-form"

import { Input as ChakraInput, InputProps as ChakraInputProps, FormLabel, FormControl, Text, FormErrorMessage} from "@chakra-ui/react"

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = 
    ({error=null, name, label, ...rest}, ref) => {
        //? first type goes to ref, that's gonna be an input

        return (
            <FormControl isInvalid={!!error}>
                {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>} {/* if it doesnt exist */}

                <ChakraInput
                    name={name}
                    id={name}
                    focusBorderColor="pink.500"
                    bgColor="gray.900"
                    variant="filled"
                    _hover={{
                        bgColor: "gray.900"
                    }}
                    size="lg"
                    ref={ref}
                    {...rest}
                />

                {!!error && (
                    <FormErrorMessage>{error.message}</FormErrorMessage>
                )}
        </FormControl>
        )
}

export const Input = forwardRef(InputBase) //Just passing the ref 