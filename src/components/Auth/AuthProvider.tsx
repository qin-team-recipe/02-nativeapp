import React, { useState, createContext, useContext, useEffect } from "react"

import {
  getTokenFromLocalStorage,
  removeTokenFromLocalStorage,
  setTokenToLocalStorage,
} from "../../stores/localstorage/AuthToken"

const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: (isAuthenticated: boolean) => {},
  signin: (newToken: string) => {},
  signout: () => {},
})

export const AuthProvider: React.FC<{ children: JSX.Element }> = (props) => {
  const { children } = props
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const checkAuth = async () => {
      const token = await getTokenFromLocalStorage()
      if (token) {
        setIsAuthenticated(true)
      } else {
        setIsAuthenticated(false)
      }
    }
    checkAuth()
  }, [])

  const signin = (newToken: string) => {
    setIsAuthenticated(true)
    setTokenToLocalStorage(newToken)
  }

  const signout = () => {
    setIsAuthenticated(false)
    removeTokenFromLocalStorage()
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated: (isAuthenticated: boolean) =>
          setIsAuthenticated(isAuthenticated),
        signin: (newToken: string) => signin(newToken),
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuthエラー")
  }
  return context
}
