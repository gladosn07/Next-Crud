import { Button, Flex, Text } from "@chakra-ui/react";

type Props = {
    isFormOpen: boolean | any;
    setIsFormOpen: boolean | any;
}

export const HeaderForm = ({ isFormOpen, setIsFormOpen }: Props) => {
    return (
        <Flex justifyContent='space-between' alignItems="center">
            <Text color="black" fontSize="2xl">Lista de clientes</Text>
            <Button colorScheme='blue' onClick={() => setIsFormOpen(!isFormOpen)}>
                {isFormOpen ? 'Fechar' : 'Novo cliente'}
            </Button>
        </Flex>
    )
}