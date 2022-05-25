import { Box, Button, TableContainer, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useState } from 'react'
import InputForm from '../src/components/Formuser/FormUser'
import { HeaderForm } from '../src/components/Header/headerForm';
import UserDate from '../src/components/TableUserData/UserDate';
import { Clients } from '../src/types/ClientType';

const Home: NextPage = () => {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false)
  const [clients, setClients] = useState<Clients[]>([])
  const [name, setName] = useState<String | any>('')
  const [email, setEmail] = useState<String | any>('')
  const [id, setId] = useState<String | any>('')
  const [errors, setErrors] = useState<String | any>({ name: '', email: '' })

  const isValidateForm = (): boolean => {
    const validateName = name.trim()

    if (!name || validateName) {
      setErrors({ ...errors, name: 'Nome é requerido' })
      return false
    }

    if (!email) {
      setErrors({ ...errors, email: 'E-mail é requerido' })
      return false
    }

    if (clients.some(client => client.email === email && client._id !== id)) {
      setErrors({ ...errors, email: 'E-mail já esta em uso' })
      return false
    }

    setErrors({ name: '', email: '' })
    return true
  }

  const handleSubmitCreateClient = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault()

    if (!isValidateForm()) return

    setClients(clients.concat({ _id: new Date().getMilliseconds().toString(), name, email }))
    setEmail('')
    setName('')
    setIsFormOpen(false)
  }

  const handleRemoveClient = (id: string): void => {
    setClients(clients.filter(client => client._id !== id))
  }

  const handleSubmitUpdateClient = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault()

    if (!isValidateForm()) return

    setClients(clients.map(client => client._id === id ? { name, email, _id: id } : client))
    setEmail('')
    setName('')
    setId('')
    setIsFormOpen(!isFormOpen)
  }

  const handleShowUpdateClientForm = (client: Clients) => {
    setId(client._id)
    setName(client.name)
    setEmail(client.email)
    setIsFormOpen(true)
  }

  return (
    <Box margin={4}>
      <HeaderForm
        isFormOpen={isFormOpen}
        setIsFormOpen={setIsFormOpen}
      />

      {isFormOpen &&
        <VStack marginTop={6} as="form" onSubmit={id ? handleSubmitUpdateClient : handleSubmitCreateClient}>
          <InputForm
            label='Nome'
            name='name'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={errors.name}
          />

          <InputForm
            label='E-mail'
            name='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />

          <Button alignSelf="flex-end" colorScheme="blue" type="submit">{id ? 'Atualizar' : 'Cadastrar'}</Button>
        </VStack>
      }

      <TableContainer marginTop={4}>
        <UserDate
          clients={clients}
          handleShowUpdateClientForm={handleShowUpdateClientForm}
          handleRemoveClient={handleRemoveClient}
        />
      </TableContainer>
    </Box >
  )
}

export default Home
