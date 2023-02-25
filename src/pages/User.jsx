import React from 'react'
import { Context } from '../context/Context'
import { SubmitButton } from '../components/SubmitButton'

export const User = () => {
  const { removeAuth } = React.useContext(Context)
  return (
    <div>
      <h3>Perfil usuario</h3>
      <SubmitButton disabled={false} onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </div>
  )
}
