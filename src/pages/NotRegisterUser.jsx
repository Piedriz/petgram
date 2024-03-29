import React, { useContext } from 'react'
import { Context } from '../context/Context'
import { UserForm } from '../components/UserForm'

export const NotRegisterUser = () => {
  const { activateAuth } = useContext(Context)
  return (
    <>
      <UserForm onSubmit={activateAuth} title='Registrarse' />
      <UserForm onSubmit={activateAuth} title='Iniciar Sesion' />
    </>
  )
}
