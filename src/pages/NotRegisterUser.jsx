import React, { useContext } from 'react'
import { Context } from '../context/Context'
import { UserForm } from '../components/UserForm'

export const NotRegisterUser = () => {
  const { registerNewUser } = useContext(Context)

  return (
    <>
      <UserForm onSubmit={registerNewUser} title='Registrarse' />
      <UserForm onSubmit={() => { console.log('a') }} title='Iniciar Sesion' />
    </>
  )
}
