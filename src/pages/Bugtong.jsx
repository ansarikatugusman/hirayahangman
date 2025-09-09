import { Suspense, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import { Link } from 'react-router'
import AdventureGame from './AdventureGame'
import Portal from '../components/Portal'
import BugtongBooks from '../components/portal/BugtongBooks'
import SketchedButton from '../components/buttons/SketchedButton'

import './Bugtong.css'

const Bugtong = () => {
    const [active, setActive] = useState(null)
    const [levelStart, setLevelStart] = useState(false)   
    const [bugtongBooks, setBugtongBooks] = useState({})
    const [currentItem, setCurrentItem] = useState('')
    const [levelSolved, setLevelSolved] = useState(false)

    useEffect(() => {
        const data = localStorage.getItem('bugtongBooks')
        setBugtongBooks(JSON.parse(data))
    }, [levelStart])

    const handleActivePortal = (name) => {
		setActive(active === name ? null : name)
	}	

    const levelStarted = () => {
        setLevelStart(true)
    }

    const levelEnded = () => {
        setLevelStart(false)
    }
    
    const handleCurrentItem = (e) => {
        setCurrentItem(e.target.id)
        console.log(currentItem)
    }

    const levelIsSolved = () => {
        setLevelSolved(true)
    }

    const levelIsNotSolved = () => {
        setLevelSolved(false)
    }

    const handleLevelSolved = () => {
        let bugtongBooks = JSON.parse(localStorage.getItem('bugtongBooks'))
        console.log(bugtongBooks) 
        let newBugtongBooks = {...bugtongBooks, [currentItem]: true}
        console.log(newBugtongBooks)
        localStorage.setItem('bugtongBooks', JSON.stringify(newBugtongBooks))
    }

    return (
        <>
        {levelStart && <AdventureGame levelEnded={levelEnded} levelSolved={levelSolved} levelIsSolved={levelIsSolved} levelIsNotSolved={levelIsNotSolved} handleLevelSolved={handleLevelSolved} />}
        <Canvas style={{position: 'fixed', width:'100vw', height:'100vh', top:'0', left:'0', zIndex:'0'}} shadows camera={{ position: [0, 0, 10], fov: 30 }}>
            <Suspense fallback={null}>
                <Portal className='bugtong_portal center' name='BUGTONG' texture='textures/bugtong_bg.jpg' active={active}  handleActivePortal={handleActivePortal} handleCurrentItem={handleCurrentItem} currentItem={currentItem} levelStart={levelStart} levelStarted={levelStarted} Books={BugtongBooks} books={bugtongBooks} />
            </Suspense>
        </Canvas>
        {!active && 
        <Link className='link_href bugtong_return_button' to='../'>
            <SketchedButton text='HOME' width='200px' height='75px' fontsize='150%' scale={true} />
        </Link>}
        </> 
    )
}

export default Bugtong