import { createContext } from 'react'

const AuthContext = createContext({
    id: null,
    getId: () => {},
    token: null,
    login: () => {},
    logout: () => {}
})

export default AuthContext