import { useState, useEffect, useContext, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import AuthContext from '../context/AuthContext'
import useHttpRequest from '../hooks/useHttpRequest'
import Loading from '../utils/Loading'
import ErrorMessage from '../utils/ErrorMessage'
import PlayTopNavigation from '../components/play/PlayTopNavigation'
import Game from './Game'
import Portal from '../components/Portal'
import BugtongBooks from '../components/portal/BugtongBooks'

import './Play.css'

const Play = ({ setPlayerGold }) => {
    const [bugtongPortalActive, setBugtongPortalActive] = useState(true)
    const [sawikainPortalActive, setSawikainPortalActive] = useState(false)
    const [salawikainPortalActive, setSalawikainPortalActive] = useState(false)
    const [active, setActive] = useState(null)
    const [levelStart, setLevelStart] = useState(false)   
    const [bugtongBooks, setBugtongBooks] = useState()
    const [sawikainBooks, setSawikainBooks] = useState()
    const [salawikainBooks, setSalawikainBooks] = useState()
    const [currentItem, setCurrentItem] = useState('')
    const [levelSolved, setLevelSolved] = useState(false)
    const [showError, setShowError] = useState(false)
    const {loading, error, fetchRequest} = useHttpRequest()

    const auth = useContext(AuthContext)

    let getBooks

    useEffect(() => {
        getBooks = async () => {
            try {
                const data = await fetchRequest(`${import.meta.env.VITE_BACKEND_URL}/user/books`, 
                    'GET', 
                    {Authorization: 'Bearer ' + auth.token}
                )
                setBugtongBooks(data.user.bugtongBooks)
                setSalawikainBooks(data.user.sawikainBooks)
                setSalawikainBooks(data.user.salawikainBooks)
            } catch (err) {
                setShowError(true)
            }
        }
        getBooks()
    }, [levelStart])

    const handleBugtongPortalActive = () => {
        setBugtongPortalActive(true)
        setSawikainPortalActive(false)
        setSalawikainPortalActive(false)
    }

    const handleSawikainPortalActive = () => {
        setBugtongPortalActive(false)
        setSawikainPortalActive(true)
        setSalawikainPortalActive(false)
    }

    const handleSalawikainPortalActive = () => {
        setBugtongPortalActive(false)
        setSawikainPortalActive(false)
        setSalawikainPortalActive(true)
    }

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

    const handleLevelSolved = async () => {
        let book
        if (bugtongPortalActive) book = 'bugtongBooks'
        if (sawikainPortalActive) book = 'sawikainBooks'
        if (salawikainPortalActive) book = 'salawikainBooks'

        try {
            await fetchRequest(`${import.meta.env.VITE_BACKEND_URL}/book/complete/${book}`,
            'PATCH',
            {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + auth.token 
            },
            JSON.stringify({
                currentItem: currentItem
            }))
        } catch (err) {
            setShowError(true)
        }
    }

    /* const handleLevelSolved = () => {
        let bugtongBooks = JSON.parse(localStorage.getItem('bugtongBooks'))
        console.log(bugtongBooks) 
        let newBugtongBooks = {...bugtongBooks, [currentItem]: true}
        console.log(newBugtongBooks)
        localStorage.setItem('bugtongBooks', JSON.stringify(newBugtongBooks))
    } */

    return (
        <>
        {loading && <Loading />}
        {showError && <ErrorMessage error={error} setShowError={setShowError} />}
        {!active && <PlayTopNavigation bugtongPortalActive={bugtongPortalActive} handleBugtongPortalActive={handleBugtongPortalActive} sawikainPortalActive={sawikainPortalActive} handleSawikainPortalActive={handleSawikainPortalActive} salawikainPortalActive={salawikainPortalActive} handleSalawikainPortalActive={handleSalawikainPortalActive} />}

        <Canvas style={{position: 'fixed', width:'100vw', height:'100vh', top:'0', left:'0', zIndex:'0'}} shadows camera={{ position: [0, 0, 10], fov: 30 }}>
            <Suspense fallback={null}>
                {bugtongPortalActive && <Portal className='bugtong_portal center' name='BUGTONG' texture='textures/bugtong_bg.jpg' active={active}  handleActivePortal={handleActivePortal} handleCurrentItem={handleCurrentItem} currentItem={currentItem} levelStart={levelStart} levelStarted={levelStarted} BooksDisplay={BugtongBooks} books={bugtongBooks} />}

                
            </Suspense>
        </Canvas>

        {levelStart && <Game setPlayerGold={setPlayerGold} levelEnded={levelEnded} levelSolved={levelSolved} levelIsSolved={levelIsSolved} levelIsNotSolved={levelIsNotSolved} handleLevelSolved={handleLevelSolved} />}
        </> 
    )
}

export default Play