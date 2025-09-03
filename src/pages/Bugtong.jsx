import { Loader } from '@react-three/drei'
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
    const [gameStart, setGameStart] = useState(false)   
    const [bugtongBooks, setBugtongBooks] = useState({})
    const [currentItem, setCurrentItem] = useState('')

    useEffect(() => {
        const data = localStorage.getItem('bugtongBooks')
        setBugtongBooks(JSON.parse(data))
    }, [gameStart])

    const handleActivePortal = (name) => {
		setActive(active === name ? null : name)
	}	

    const handleCurrentItem = (e) => {
        setCurrentItem(e.target.id)
        console.log(currentItem)
    }
    
    const gameStarted = () => {
        setGameStart(current => !current )
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
        <Loader />
        {gameStart && <AdventureGame name='BUGTONG' handleActivePortal={handleActivePortal} gameStarted={gameStarted} handleLevelSolved={handleLevelSolved} style={{ position: 'fixed' }} />}
        <Canvas style={{position: 'fixed', width:'100vw', height:'100vh', top:'0', left:'0', zIndex:'0'}} shadows camera={{ position: [0, 0, 10], fov: 30 }}>
            <Suspense fallback={null}>
                <Portal className='bugtong_portal center' name='BUGTONG' texture='textures/bugtong_bg.jpg' active={active}  handleActivePortal={handleActivePortal} handleCurrentItem={handleCurrentItem} currentItem={currentItem} gameStart={gameStart} gameStarted={gameStarted} Books={BugtongBooks} books={bugtongBooks} />
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