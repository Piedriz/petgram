import { createContext, useState } from 'react'
export const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <Context.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </Context.Provider>
  )
}
