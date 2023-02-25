import { createContext, useState } from 'react'
export const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })

  const activateAuth = (token) => {
    setIsAuth(true)
    window.sessionStorage.setItem('token', token)
  }
  const removeAuth = (token) => {
    setIsAuth(false)
    window.sessionStorage.removeItem('token')
  }

  return (
    <Context.Provider value={{ isAuth, activateAuth, removeAuth }}>
      {children}
    </Context.Provider>
  )
}
