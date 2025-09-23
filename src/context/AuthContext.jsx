import { createContext } from "react";

export const AuthContext = createContext({
    id: null,
    getId: () => {},
    name: null,
    getName: () => {},
    login: () => {},
    logout: () => {}
})