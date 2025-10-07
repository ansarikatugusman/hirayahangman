import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router'
import { Loader } from '@react-three/drei'
import AuthContext from './context/AuthContext'
import useAuth from './hooks/useAuth'
import LandingPage from './pages/LandingPage'
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './menus/Profile'
import Home from './pages/Home'
import Play from './pages/Play'
import Bugtong from './pages/Bugtong'
import Shop from './pages/Shop'
import Testing from './pages/Testing'
import ErrorMessage from './utils/ErrorMessage'

import './App.css'

const App = () => {
    const { id, token, login, logout } = useAuth()
    const [playerGold, setPlayerGold] = useState()

    const bugtongBooks = { 
        bugtongBook1: false, 
        bugtongBook2: false, 
        bugtongBook3: false, 
        bugtongBook4: false, 
        bugtongBook5: false, 
        bugtongBook6: false, 
        bugtongBook7: false, 
        bugtongBook8: false, 
        bugtongBook9: false, 
        bugtongBook10: false
    }

    const items = {
        item1: 3,
        item2: 4,
        item3: 5,
        item4: 0,
        item5: 0
    }

    const gold = 1000

    useEffect(() => {
        setPlayerGold(localStorage.getItem('gold'))
    }, [playerGold])

    useEffect(() => {
        if (!localStorage.getItem('token1')) {
            localStorage.removeItem('token0')
            localStorage.setItem('token1', true)
            localStorage.setItem('bugtongBooks', JSON.stringify(bugtongBooks))
            localStorage.setItem('items', JSON.stringify(items))
            localStorage.setItem('gold', gold)
        }
    }, [])

    let routes

    if (token) {
        routes = (
            <Routes>
                <Route index element={<Home />} />
                <Route path='/shop' element={<Shop />}/>
                <Route path='/bugtong' element={<Bugtong />}/>
                <Route path='/testing' element={<Profile />}/>
                <Route path='/game' element={<Bugtong setPlayerGold={setPlayerGold} />}/>
                <Route path='*' element={<Play />} />
            </Routes>
        )
    } else {
        routes = (
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/testing' element={<Testing/ >}/>
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