import { useState, useEffect, useCallback } from 'react'
import { googleLogout } from '@react-oauth/google';

let logoutTimer

const useAuth = () => {
    const [id, setId] = useState()
    const [token, setToken] = useState()
    const [expiration, setExpiration] = useState()

    const login = useCallback((id, token, tokenExpiration) => {
        setId(id)
        setToken(token)
        const expiration = tokenExpiration || new Date(new Date().getTime() + 1000 * 60 * 720)
        setExpiration(expiration)
        localStorage.setItem('token', JSON.stringify({id: id, token: token, expiration: expiration.toISOString()}))
    }, [])

    const logout = useCallback(() => {
        setId(null)
        setToken(null)
        setExpiration(null)
        localStorage.removeItem('token')
        googleLogout();
    }, [])

    useEffect(() => {
        const userToken = JSON.parse(localStorage.getItem('token'))
        if (userToken && userToken.token && new Date(userToken.expiration) > new Date()) {
            login(userToken.id, userToken.token, new Date(userToken.expiration))
        }
    }, [login])

    useEffect(() => {
        if (token && expiration) {
            const timeLeft = expiration.getTime() - new Date().getTime()
            logoutTimer = setTimeout(logout, timeLeft)
        } else {
            clearTimeout(logoutTimer)
        }
    }, [token, expiration, logout])

    return { id, token, login, logout }
}

export default useAuth