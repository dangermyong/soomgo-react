import React, { useContext, useState } from 'react'

export const LoginUserContext = React.createContext()

export function LoginUserProvider({ children }) {
  const [loginUser, setLoginUser] = useState('')

  function updateUser() {
    setLoginUser()
  }

  return (
    <LoginUserContext.Provider value={loginUser}>
        {children}
    </LoginUserContext.Provider>

  )
}