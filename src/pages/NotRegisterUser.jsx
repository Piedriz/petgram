import React, { useContext } from 'react'
import { Context } from '../context/Context'

export const NotRegisterUser = () => {
  const { activateAuth } = useContext(Context)
  return (
    <>
      <form onSubmit={activateAuth}>
        <button>Iniciar Sesión</button>
      </form>
    </>
  )
}
