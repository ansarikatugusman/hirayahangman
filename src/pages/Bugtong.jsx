import { Loader } from '@react-three/drei'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import { Link } from 'react-router'
import Portal from '../components/Portal'
import AdventureGame from './AdventureGame'
import FoldedButton from '../components/buttons/FoldedButton'

import './Bugtong.css'

const Bugtong = () => {
    const [active, setActive] = useState(null)
    const [enteredPortal, setEnteredPortal] = useState(false)
    const [levelsSolved, setLevelsSolved] = useState(0)

    const handleEnteredPortal = () => {
        setEnteredPortal(!enteredPortal)
        console.log(enteredPortal)
    } 

    const handleActivePortal = (name) => {
		setActive(active === name ? null : name)
	}	

    const handleLevelSolved = () => {
        setLevelsSolved((prevState) => prevState + 1)
    }

    return (
        <>
        <Loader />
        {enteredPortal && <AdventureGame name='BUGTONG' handleActivePortal={handleActivePortal} handleEnteredPortal={handleEnteredPortal} handleLevelSolved={handleLevelSolved} style={{ position: 'fixed' }} />}
        <Canvas style={{position: 'fixed', width:'100vw', height:'100vh', top:'0', left:'0', zIndex:'0'}} shadows camera={{ position: [0, 0, 10], fov: 30 }}>
            <Suspense fallback={null}>
                <Portal className='bugtong_portal center' name='BUGTONG' texture='textures/bugtong_bg.jpg' handleEnteredPortal={handleEnteredPortal} active={active} setActive={setActive} handleActivePortal={handleActivePortal} />
            </Suspense>
            
        </Canvas>
        <div>
            <p style={{ fontSize: '1.5rem' }}>
                Solved
            </p>
            <p style={{ fontSize: '2rem' }}>
                {levelsSolved === 10 ? 10 : levelsSolved} / 10
            </p>
        </div>
        {!enteredPortal && 
        <Link className='link_href bugtong_return_button' to='../'>
            <FoldedButton text='HOME' fontsize='150%' scale={true} />
        </Link>}
        </>
        
    )
}

export default Bugtong