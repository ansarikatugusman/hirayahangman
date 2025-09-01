import { Routes, Route } from 'react-router'
import Dashboard from './Dashboard'
import Home from './pages/Home'
import Play from './pages/Play'
import Adventure from './pages/Adventure'
import Bugtong from './pages/Bugtong'
import AnchorButton from './components/buttons/AnchorButton'
import Testing from './pages/Testing'

import './App.css'

const App = () => {
    return (
        <div className='app center'>
            <div className='app-content'>
                <Routes>
                    <Route path='/' element={<Dashboard />}>
                        <Route index element={<Home />}/>
                        <Route path='play' element={<Play />}/>
                        

                        <Route path='adventure' element={<Adventure />}>
                            <Route path='bugtong' element={<Bugtong />}/>
                        </Route>

                        <Route path='testing' element={<AnchorButton />}/>
                    </Route>
                    <Route path='game' element={<Bugtong />}/>
                </Routes>
            </div>
        </div>
    )
}

export default App