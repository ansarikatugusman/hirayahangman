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
import SawikainBooks from '../components/portal/SawikainBooks'
import SalawikainBooks from '../components/portal/SalawikainBooks'

import './Play.css'

const Play = () => {
    const [bugtongPortalActive, setBugtongPortalActive] = useState(true)
    const [sawikainPortalActive, setSawikainPortalActive] = useState(false)
    const [salawikainPortalActive, setSalawikainPortalActive] = useState(false)
    const [active, setActive] = useState(null)
    const [levelStart, setLevelStart] = useState(false)   
    const [crowns, setCrowns] = useState()
    const [gold, setGold] = useState()
    const [bugtongBooks, setBugtongBooks] = useState()
    const [bugtongBooksSolved, setBugtongBooksSolved] = useState()
    const [sawikainBooks, setSawikainBooks] = useState()
    const [sawikainBooksSolved, setSawikainBooksSolved] = useState()
    const [salawikainBooks, setSalawikainBooks] = useState()
    const [salawikainBooksSolved, setSalawikainBooksSolved] = useState()
    const [currentBook, setCurrentBook] = useState('')
    const [levelSolved, setLevelSolved] = useState(false)
    const [showError, setShowError] = useState(false)
    const {loading, error, fetchRequest} = useHttpRequest()

    const auth = useContext(AuthContext)

    useEffect(() => {
        const getBooks = async () => {
            try {
                const data = await fetchRequest(`${import.meta.env.VITE_BACKEND_URL}/user/books`, 
                    'GET', 
                    {Authorization: 'Bearer ' + auth.token}
                )
                setCrowns(data.user.crowns)
                setGold(data.user.gold)
                setBugtongBooks(data.user.bugtongBooks)
                setBugtongBooksSolved(data.user.bugtongBooksSolved)
                setSawikainBooks(data.user.sawikainBooks)
                setSawikainBooksSolved(data.user.sawikainBooksSolved)
                setSalawikainBooks(data.user.salawikainBooks)
                setSalawikainBooksSolved(data.user.salawikainBooksSolved)
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
    
    const handleCurrentBook = (e) => {
        setCurrentBook(e.target.id)
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
                currentBook: currentBook
            }))
        } catch (err) {
            setShowError(true)
        }
    }

    return (
        <>
        {loading && <Loading />}
        {showError && <ErrorMessage error={error} setShowError={setShowError} />}
        {!active && <PlayTopNavigation bugtongPortalActive={bugtongPortalActive} handleBugtongPortalActive={handleBugtongPortalActive} sawikainPortalActive={sawikainPortalActive} handleSawikainPortalActive={handleSawikainPortalActive} salawikainPortalActive={salawikainPortalActive} handleSalawikainPortalActive={handleSalawikainPortalActive} />}

        <Canvas style={{position: 'fixed', width:'100vw', height:'100vh', top:'0', left:'0', zIndex:'0'}} shadows camera={{ position: [0, 0, 10], fov: 30 }}>
            <Suspense fallback={null}>
                {bugtongPortalActive && <Portal className='center' name='BUGTONG' texture='textures/bugtong_bg.jpg' active={active} handleActivePortal={handleActivePortal} handleCurrentBook={handleCurrentBook} levelStart={levelStart} levelStarted={levelStarted} BooksDisplay={BugtongBooks} books={bugtongBooks} booksSolved={bugtongBooksSolved} />}

                {sawikainPortalActive && <Portal className='center' name='SAWIKAIN' texture='textures/sawikain_bg.jpg' active={active} handleActivePortal={handleActivePortal} handleCurrentBook={handleCurrentBook} levelStart={levelStart} levelStarted={levelStarted} BooksDisplay={SawikainBooks} books={sawikainBooks} booksSolved={sawikainBooksSolved} />}

                {salawikainPortalActive && <Portal className='center' name='SALAWIKAIN' texture='textures/salawikain_bg.jpg' active={active} handleActivePortal={handleActivePortal} handleCurrentBook={handleCurrentBook} levelStart={levelStart} levelStarted={levelStarted} BooksDisplay={SalawikainBooks} books={salawikainBooks} booksSolved={salawikainBooksSolved} />}
            </Suspense>
        </Canvas>

        {levelStart && <Game crowns={crowns} gold={gold} bugtongPortalActive={bugtongPortalActive} bugtongBooksSolved={bugtongBooksSolved} sawikainPortalActive={sawikainPortalActive} sawikainBooksSolved={sawikainBooksSolved} salawikainPortalActive={salawikainPortalActive} salawikainBooksSolved={salawikainBooksSolved} levelStart={levelStart} levelEnded={levelEnded} levelSolved={levelSolved} levelIsSolved={levelIsSolved} levelIsNotSolved={levelIsNotSolved} handleLevelSolved={handleLevelSolved} />}
        </> 
    )
}

export default Play