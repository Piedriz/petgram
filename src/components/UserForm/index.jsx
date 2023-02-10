import React, { useContext } from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title } from './styles'
import { useRegisterMutation } from '../../hooks/useRegisterMutation'
import { Context } from '../../context/Context'

export const UserForm = ({ onSubmit, title }) => {
  const { setIsAuth } = useContext(Context)
  const { mutation, mutationError } = useRegisterMutation()
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (e) => {
    const data = { email: email.value, password: password.value }
    console.log(data)
    mutation({ variables: { input: data } })
    if (mutationError) {
      console.log(mutationError)
    } else {
      console.log('registro exitoso')
      setIsAuth(true)
    }
    e.preventDefault()
  }

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input placeholder='Email' {...email} />
        <Input placeholder='Password' {...password} />
        <Button>{title}</Button>
      </Form>
    </>
  )
}
