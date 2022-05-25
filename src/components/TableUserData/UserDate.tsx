import { Button, Flex, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { Clients } from '../../types/ClientType'

type Props = {
    clients: Clients[],
    handleShowUpdateClientForm: (client: Clients) => void,
    handleRemoveClient: (id: string) => void
}

const UserDate = ({ clients, handleShowUpdateClientForm, handleRemoveClient }: Props) => {
    return (
        <Table variant='simple'>
            <Thead bgColor='blue.600'>
                <Tr>
                    <Th color="white">Nome</Th>
                    <Th color="white">E-mail</Th>
                    <Th color="white">Ações</Th>
                </Tr>
            </Thead>
            <Tbody marginTop={2}>
                {clients?.map(client => (
                    <Tr key={client._id}>
                        <Td>{client.name}</Td>
                        <Td>{client.email}</Td>
                        <Td>
                            <Flex>
                                <Button
                                    colorScheme="yellow"
                                    marginRight={2} size="sm"
                                    onClick={() =>
                                        handleShowUpdateClientForm(client)}
                                >Alterar
                                </Button>

                                <Button
                                    colorScheme="red"
                                    size="sm"
                                    onClick={() => handleRemoveClient(client._id)}
                                >Remover
                                </Button>
                            </Flex>
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    )
}

export default UserDate