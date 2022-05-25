import { FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react'
import React from 'react'

type Props = {
    name: string,
    label: string,
    type: string
    value: string,
    onChange: (e: any) => void
    error: string
}

const InputForm: React.FC<Props> = ({ name, label, error, ...rest }) => {
    return (
        <FormControl isInvalid={!!error}>
            <FormLabel>{label}</FormLabel>
            <Input name={name} id={name} {...rest} />

            {!!error && <FormErrorMessage>{error}</FormErrorMessage>}
        </FormControl>
    )
}

export default InputForm