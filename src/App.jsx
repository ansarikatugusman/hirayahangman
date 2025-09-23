import { useState, useEffect, useCallback } from 'react'
import { Routes, Route, useNavigate } from 'react-router'
import { Loader } from '@react-three/drei'
import { AuthContext } from './context/AuthContext'
import LandingPage from './pages/LandingPage'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './Dashboard'
import Home from './pages/Home'
import Play from './pages/Play'
import Adventure from './pages/Adventure'
import Bugtong from './pages/Bugtong'
import Shop from './pages/Shop'
import Testing from './pages/Testing'
import Loading from './utils/Loading'
import BugtongBooks from './components/portal/BugtongBooks'
import SketchedButton from './components/buttons/SketchedButton'

import './App.css'

const App = () => {
    const navigate = useNavigate()

    const [id, setId] = useState()
    const [name, setName] = useState()
    const [loggedIn, setLoggedIn] = useState(false)
    const [playerGold, setPlayerGold] = useState()

    const getId = (id) => {
        setId(id)
    }

    const getName = (name) => {
        setName(name)
    }

    const login = (name, id) => {
        setName(name)
        setToken(id)
        setLoggedIn(true)
    }

    const logout = useCallback(() => {
        setName(null)
        setId(null)
        setLoggedIn(false)
        navigate('/')
    }, [navigate])

    useEffect(() => {
        setPlayerGold(localStorage.getItem('gold'))
    }, [playerGold])

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
        if (!localStorage.getItem('token0')) {
            localStorage.removeItem('token1')
            localStorage.setItem('token0', true)
            localStorage.setItem('bugtongBooks', JSON.stringify(bugtongBooks))
            localStorage.setItem('items', JSON.stringify(items))
            localStorage.setItem('gold', gold)
        }
    }, [])

    let routes

    if (loggedIn === true) {
        routes = (
            <Routes>
                <Route path='/' element={<Dashboard playerGold={playerGold} setPlayerGold={setPlayerGold} />}>
                    <Route index element={<Home />}/>
                    <Route path='play' element={<Play />}/>

                    <Route path='adventure' element={<Adventure />}>
                        <Route path='bugtong' element={<Bugtong />}/>
                    </Route>

                    <Route path='shop' element={<Shop setPlayerGold={setPlayerGold} />}/>
                </Route>
                <Route path='testing' element={<Testing />}/>
                <Route path='game' element={<Bugtong setPlayerGold={setPlayerGold} />}/>
            </Routes>
        )
    } else {
        routes = (
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='register' element={<Register />}/>
                <Route path='login' element={<Login />}/>
                <Route path='testing' element={<Testing />}/>
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
            <AuthContext.Provider value={{ id: id, getId: getId, name: name, getName: getName, login: login, logout: logout }}>
                <div className='app center'>
                    <div className='app-content'>
                        <Routes>
                            <Route path='/' element={<Dashboard playerGold={playerGold} setPlayerGold={setPlayerGold} />}>
                                <Route index element={<Home />}/>
                                <Route path='play' element={<Play />}/>

                                <Route path='adventure' element={<Adventure />}>
                                    <Route path='bugtong' element={<Bugtong />}/>
                                </Route>
                                <Route path='shop' element={<Shop setPlayerGold={setPlayerGold} />}/>
                            </Route>
                            <Route path='testing' element={<Login />}/>
                            <Route path='game' element={<Bugtong setPlayerGold={setPlayerGold} />}/>
                            <Route path='register' element={<Register />}/>
                            <Route path='login' element={<Login />}/>
                        </Routes>
                    </div>
                </div>
            </AuthContext.Provider>
        </>
    )
}

export default App