import { useEffect } from 'react'
import { Routes, Route } from 'react-router'
import { Loader } from '@react-three/drei'
import Dashboard from './Dashboard'
import Home from './pages/Home'
import Play from './pages/Play'
import Adventure from './pages/Adventure'
import Bugtong from './pages/Bugtong'
import Testing from './pages/Testing'
import BugtongBooks from './components/portal/BugtongBooks'
import SketchedButton from './components/buttons/SketchedButton'

import './App.css'

const App = () => {

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

    useEffect(() => {
        localStorage.setItem('bugtongBooks', JSON.stringify(bugtongBooks))
        localStorage.setItem('items', JSON.stringify(items))
    }, [])

    return (
        <>
            <Loader dataStyles={{ font:'5rem' }}/>
            <div className='app center'>
                <div className='app-content'>
                    <Routes>
                        <Route path='/' element={<Dashboard />}>
                            <Route index element={<Home />}/>
                            <Route path='play' element={<Play />}/>

                            <Route path='adventure' element={<Adventure />}>
                                <Route path='bugtong' element={<Bugtong />}/>
                            </Route>

                            
                        </Route>
                        <Route path='testing' element={<Testing />}/>
                        <Route path='game' element={<Bugtong />}/>
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default App