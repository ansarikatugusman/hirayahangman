import { useEffect } from 'react'
import { Routes, Route } from 'react-router'
import { Loader } from '@react-three/drei'
import AuthContext from './context/AuthContext'
import useAuth from './hooks/useAuth'
import LandingPage from './pages/LandingPage'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import Play from './pages/Play'
import Testing from './pages/Testing'

import './App.css'

const App = () => {
    const { id, token, login, logout } = useAuth()

    useEffect(() => {
        if (!localStorage.getItem('token1')) {
            localStorage.removeItem('token0')
            localStorage.setItem('token1', true)
        }
    }, [])

    let routes

    if (token) {
        routes = (
            <Routes>
                <Route index element={<Home />} />
                <Route path='/testing' element={<Testing />}/>
                <Route path='/play' element={<Play />}/>
                <Route path='*' element={<Home />} />
            </Routes>
        )
    } else {
        routes = (
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/testing' element={<Testing />}/>
                <Route path='*' element={<LandingPage />} />
            </Routes>
        )
    }

    return (
        <>
            <Loader
                dataStyles={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: '1.75rem', 
                    fontFamily: 'CabinSketch-Regular, sans-serif'
                }}
                containerStyles={{
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    height: '100vh'
                }}
                barStyles={{
                    height: '0.5rem',
                }}
            />
            <AuthContext.Provider value={{ id: id, token: token, login: login, logout: logout }}>
                <div className='app'>
                    {routes}
                </div>
                <div className='app_parchment'>
                </div>
                <svg className='filter'>
                <filter id='wavy2'>
                    <feTurbulence x='0' y='0' baseFrequency='0.02' numOctaves='2' seed='8'></feTurbulence>
                    <feDisplacementMap in='SourceGraphic' scale='20'></feDisplacementMap>
                </filter>
                </svg>
            </AuthContext.Provider>
        </>
    )
}

export default App