import React, { useContext } from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Title, ErrorMessage } from './styles'
import { Context } from '../../context/Context'
import { SubmitButton } from '../SubmitButton'
import Swal from 'sweetalert2'

export const UserForm = ({ onSubmit, OnError, OnLoading, title }) => {
  const { activateAuth } = useContext(Context)

  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (e) => {
    const data = { email: email.value, password: password.value }
    onSubmit({ variables: { input: data } }).then(({ data }) => { OnSuccess({ data }) }, (response) => { OnReject(response) })
    e.preventDefault()
  }
  const OnSuccess = ({ data }) => {
    if (title === 'Registrarse') {
      Swal.fire(
        'Registrado!',
        'Usuario registrado con exito!',
        'success'
      )
      activateAuth(data.signup)
    } else {
      Swal.fire(
        'Logueado!',
        'Logueado con extio!',
        'success'
      )
      activateAuth(data.login)
    }
  }

  const OnReject = (res) => {
    console.log('error')
  }

  return (
    <>
      <Title>{title}</Title>
      <Form disabled={OnLoading} onSubmit={handleSubmit}>
        <Input disabled={OnLoading} placeholder='Email' {...email} />
        <Input disabled={OnLoading} placeholder='Password' {...password} />
        <SubmitButton disabled={OnLoading}>{title}</SubmitButton>
        <ErrorMessage>{OnError?.message}</ErrorMessage>
      </Form>
    </>
  )
}
