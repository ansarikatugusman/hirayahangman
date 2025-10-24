import { useState, useRef } from 'react'
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
import Cursor from './assets/images/icons/cursor.png'

import './App.css'

const App = () => {
    const { id, token, login, logout } = useAuth()
    const [musicMuted, setMusicMuted] = useState(false)

    const cursor = useRef(null)

    const mobileCheck = /android|iphone|kindle|ipad/i.test(navigator.userAgent)

    const changePosition = (e) => {
        cursor.current.style.top = `${e.clientY + 13}px`
        cursor.current.style.left = `${e.clientX + 13}px`
    }

    const muteMusic = () => {
        setMusicMuted(true)
    }

    const unmuteMusic = () => {
        setMusicMuted(false)
    }

    let routes

    if (token) {
        routes = (
            <Routes>
                
                <Route index element={<Home musicMuted={musicMuted} muteMusic={muteMusic} unmuteMusic={unmuteMusic} />} />
                <Route path='/testing' element={<Testing />}/>
                <Route path='/play' element={<Play musicMuted={musicMuted} />}/>
                <Route path='*' element={<Home musicMuted={musicMuted} muteMusic={muteMusic} unmuteMusic={unmuteMusic} />} />
            </Routes>
        )
    } else {
        routes = (
            <Routes>
                <Route path='/' element={<LandingPage musicMuted={musicMuted} />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/testing' element={<Testing />}/>
                <Route path='*' element={<LandingPage musicMuted={musicMuted} />} />
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
                <div className='app' onMouseMove={changePosition}>
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

                <div 
                    className='cursor-wrapper' 
                    ref={cursor}
                    style={{ 
                        display: token ? 'block' : 'none',
                        display: !mobileCheck ? 'block' : 'none',
                    }}
                >
                    <img className='cursor' src={Cursor} alt='cursor' />
                </div>
            </AuthContext.Provider>
        </>
    )
}

export default App