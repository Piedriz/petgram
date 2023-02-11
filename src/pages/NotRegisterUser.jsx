import React from 'react'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../hooks/useRegisterMutation'
import { useLoginMutation } from '../hooks/useLoginMutation'

export const NotRegisterUser = () => {
  const { mutation, mutationError, mutationLoading } = useRegisterMutation()
  const { mutation: loginMutation, mutationError: loginError, mutationLoading: loginLoading } = useLoginMutation()
  return (
    <>
      <UserForm
        onSubmit={mutation}
        OnError={mutationError}
        OnLoading={mutationLoading}
        title='Registrarse'
      />

      <UserForm
        onSubmit={loginMutation}
        OnError={loginError}
        OnLoading={loginLoading}
        title='Iniciar sección'
      />
    </>
  )
}
