import { createContext, useContext } from "react"

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider value={{ user: null }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth
