import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router'
import { Loader } from '@react-three/drei'
import Dashboard from './Dashboard'
import Home from './pages/Home'
import Play from './pages/Play'
import Adventure from './pages/Adventure'
import Bugtong from './pages/Bugtong'
import Shop from './pages/Shop'
import Testing from './pages/Testing'
import BugtongBooks from './components/portal/BugtongBooks'
import SketchedButton from './components/buttons/SketchedButton'

import './App.css'

const App = () => {
    const [playerGold, setPlayerGold] = useState()

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
        item3: 5
    }

    const gold = 1000

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            localStorage.setItem('token', true)
            localStorage.setItem('bugtongBooks', JSON.stringify(bugtongBooks))
            localStorage.setItem('items', JSON.stringify(items))
            localStorage.setItem('gold', gold)
        }
    }, [])

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
                        <Route path='testing' element={<Testing />}/>
                        <Route path='game' element={<Bugtong setPlayerGold={setPlayerGold} />}/>
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default App