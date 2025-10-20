import { useState, useEffect, useContext, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import AuthContext from '../context/AuthContext'
import useHttpRequest from '../hooks/useHttpRequest'
import Loading from '../utils/Loading'
import ErrorMessage from '../utils/ErrorMessage'
import PlayTopNavigation from '../components/play/PlayTopNavigation'
import Game from './Game'
import Portal from '../components/Portal'
import BugtongPortal from '../components/BugtongPortal'
import SawikainPortal from '../components/SawikainPortal'
import BugtongBooks from '../components/portal/BugtongBooks'
import SawikainBooks from '../components/portal/SawikainBooks'
import SalawikainBooks from '../components/portal/SalawikainBooks'

import StoryPrologue from '../components/story/StoryPrologue'
import StoryChapter1_1 from '../components/story/StoryChapter1_1'
import StoryChapter1_2 from '../components/story/StoryChapter1_2'
import StoryChapter1_3 from '../components/story/StoryChapter1_3'
import StoryChapter1_4 from '../components/story/StoryChapter1_4'
import StoryChapter2_1 from '../components/story/StoryChapter2_1'
import StoryChapter2_2 from '../components/story/StoryChapter2_2'
import StoryChapter2_3 from '../components/story/StoryChapter2_3'
import StoryChapter2_4 from '../components/story/StoryChapter2_4'
import StoryChapter2_5 from '../components/story/StoryChapter2_5'
import StoryChapter3_1 from '../components/story/StoryChapter3_1'
import StoryChapter3_2 from '../components/story/StoryChapter3_2'
import StoryChapter3_3 from '../components/story/StoryChapter3_3'
import StoryChapter3_4 from '../components/story/StoryChapter3_4'
import StoryChapter3_5 from '../components/story/StoryChapter3_5'
import StoryEnd from '../components/story/StoryEnd'

import './Play.css'

const Play = () => {
    const [bugtongPortalActive, setBugtongPortalActive] = useState(true)
    const [sawikainPortalActive, setSawikainPortalActive] = useState(false)
    const [salawikainPortalActive, setSalawikainPortalActive] = useState(false)
    const [active, setActive] = useState(null)
    const [levelStart, setLevelStart] = useState(false)   
    const [crowns, setCrowns] = useState()
    const [storyFinished, setStoryFinished] = useState()
    const [bugtongUnlocked, setBugtongUnlocked] = useState()
    const [bugtongBooks, setBugtongBooks] = useState()
    const [bugtongBooksSolved, setBugtongBooksSolved] = useState()
    const [sawikainUnlocked, setSawikainUnlocked] = useState()
    const [sawikainBooks, setSawikainBooks] = useState()
    const [sawikainBooksSolved, setSawikainBooksSolved] = useState([])
    const [salawikainUnlocked, setSalawikainUnlocked] = useState()
    const [salawikainBooks, setSalawikainBooks] = useState()
    const [salawikainBooksSolved, setSalawikainBooksSolved] = useState([])
    const [currentBook, setCurrentBook] = useState('')
    const [levelSolved, setLevelSolved] = useState(false)
    const [showError, setShowError] = useState(false)
    const {loading, error, fetchRequest} = useHttpRequest()

    const [storyPrologue, setStoryPrologue] = useState()
    const [storyChapter1_1, setStoryChapter1_1] = useState()
    const [storyChapter1_2, setStoryChapter1_2] = useState()
    const [storyChapter1_3, setStoryChapter1_3] = useState()
    const [storyChapter1_4, setStoryChapter1_4] = useState()
    const [storyChapter2_1, setStoryChapter2_1] = useState()
    const [storyChapter2_2, setStoryChapter2_2] = useState()
    const [storyChapter2_3, setStoryChapter2_3] = useState()
    const [storyChapter2_4, setStoryChapter2_4] = useState()
    const [storyChapter2_5, setStoryChapter2_5] = useState()
    const [storyChapter3_1, setStoryChapter3_1] = useState()
    const [storyChapter3_2, setStoryChapter3_2] = useState()
    const [storyChapter3_3, setStoryChapter3_3] = useState()
    const [storyChapter3_4, setStoryChapter3_4] = useState()
    const [storyChapter3_5, setStoryChapter3_5] = useState()
    const [storyEnd, setStoryEnd] = useState()

    const auth = useContext(AuthContext)

    useEffect(() => {
        const getBooks = async () => {
            try {
                const data = await fetchRequest(`${import.meta.env.VITE_BACKEND_URL}/user/play`, 
                    'GET', 
                    {Authorization: 'Bearer ' + auth.token}
                )
                setCrowns(data.user.crowns)
                setStoryFinished(data.user.storyFinished)
                setBugtongUnlocked(data.user.bugtongUnlocked)
                setBugtongBooks(data.user.bugtongBooks)
                setBugtongBooksSolved(data.user.bugtongBooksSolved)
                setSawikainUnlocked(data.user.sawikainUnlocked)
                setSawikainBooks(data.user.sawikainBooks)
                setSawikainBooksSolved(data.user.sawikainBooksSolved)
                setSalawikainUnlocked(data.user.salawikainUnlocked)
                setSalawikainBooks(data.user.salawikainBooks)
                setSalawikainBooksSolved(data.user.salawikainBooksSolved)

                
            } catch (err) {
                setShowError(true)
            }
        }
        getBooks()
    }, [levelStart, bugtongUnlocked, sawikainUnlocked, salawikainUnlocked])

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

    const handleBugtongUnlocked = async () => {
        try {
            await fetchRequest(`${import.meta.env.VITE_BACKEND_URL}/chapter/complete/bugtongUnlocked`,
            'PATCH',
            {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + auth.token 
            })
            setBugtongUnlocked(true)
        } catch (err) {
            setShowError(true)
        }
    }

    const handleSawikainUnlocked = async () => {
        try {
            await fetchRequest(`${import.meta.env.VITE_BACKEND_URL}/chapter/complete/sawikainUnlocked`,
            'PATCH',
            {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + auth.token 
            })
            setSawikainUnlocked(true)
        } catch (err) {
            setShowError(true)
        }
    }

    const handleSalawikainUnlocked = async () => {
        try {
            await fetchRequest(`${import.meta.env.VITE_BACKEND_URL}/chapter/complete/salawikainUnlocked`,
            'PATCH',
            {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + auth.token 
            })
            setSalawikainUnlocked(true)
        } catch (err) {
            setShowError(true)
        }
    }

    const handleStoryFinished = async () => {
        try {
            await fetchRequest(`${import.meta.env.VITE_BACKEND_URL}/story/complete`,
            'PATCH',
            {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + auth.token 
            })
            setSalawikainUnlocked(true)
        } catch (err) {
            setShowError(true)
        }
    }

    useEffect(() => {
        if (!loading && !bugtongUnlocked) setStoryPrologue(true) 
        else setStoryPrologue(false) 

        if (active && bugtongBooksSolved.length === 0) setStoryChapter1_1(true)
        else setStoryChapter1_1(false)

        if (!loading && !levelStart && levelSolved && bugtongBooksSolved.length === 5) setStoryChapter1_2(true)
        else setStoryChapter1_2(false)

        if (!loading && !levelStart && levelSolved && bugtongBooksSolved.length === 7) setStoryChapter1_3(true)
        else setStoryChapter1_3(false)

        if (!levelStart && levelSolved && bugtongBooksSolved.length === 10 &&!sawikainUnlocked) setStoryChapter1_4(true)
        else setStoryChapter1_4(false)

        if (active==='SAWIKAIN' && sawikainBooksSolved.length === 0 && sawikainUnlocked) setStoryChapter2_1(true)
        else setStoryChapter2_1(false)

        if (!loading && !levelStart && levelSolved && sawikainBooksSolved.length === 3) setStoryChapter2_2(true)
        else setStoryChapter2_2(false)

        if (!loading && !levelStart && levelSolved && sawikainBooksSolved.length === 6) setStoryChapter2_3(true)
        else setStoryChapter2_3(false)

        if (!loading && !levelStart && levelSolved && sawikainBooksSolved.length === 9) setStoryChapter2_4(true)
        else setStoryChapter2_4(false)

        if (!levelStart && levelSolved && !salawikainUnlocked && sawikainBooksSolved.length === 12) setStoryChapter2_5(true)
        else setStoryChapter2_5(false)

        if (active==='SALAWIKAIN' && salawikainBooksSolved.length === 0 && salawikainUnlocked) setStoryChapter3_1(true)
        else setStoryChapter3_1(false)

        if (!loading && !levelStart && levelSolved && salawikainBooksSolved.length === 4) setStoryChapter3_2(true)
        else setStoryChapter3_2(false)

        if (!loading && !levelStart && levelSolved && salawikainBooksSolved.length === 8) setStoryChapter3_3(true)
        else setStoryChapter3_3(false)

        if (!loading && !levelStart && levelSolved && salawikainBooksSolved.length === 12) setStoryChapter3_4(true)
        else setStoryChapter3_4(false)

        if (!levelStart && levelSolved && salawikainBooksSolved.length === 15) setStoryChapter3_5(true)
        else setStoryChapter3_5(false)

        if (active == null && salawikainBooksSolved.length === 15) setStoryEnd(true)
        else setStoryEnd(false)
    
    }, [loading, active, levelStart, levelSolved, bugtongBooksSolved, sawikainBooksSolved, salawikainBooksSolved, salawikainUnlocked])

    return (
        <>
        {loading && <Loading />}
        {showError && <ErrorMessage error={error} setShowError={setShowError} />}
        {!active && <PlayTopNavigation bugtongPortalActive={bugtongPortalActive} handleBugtongPortalActive={handleBugtongPortalActive} sawikainUnlocked={sawikainUnlocked} sawikainPortalActive={sawikainPortalActive} handleSawikainPortalActive={handleSawikainPortalActive} salawikainUnlocked={salawikainUnlocked} salawikainPortalActive={salawikainPortalActive} handleSalawikainPortalActive={handleSalawikainPortalActive} />}

        <Canvas style={{position: 'fixed', width:'100vw', height:'100vh', top:'0', left:'0', zIndex:'0'}} shadows camera={{ position: [0, 0, 10], fov: 30 }}>
            <Suspense fallback={null}>
                {bugtongPortalActive && <Portal className='center' name='BUGTONG' texture='textures/bugtong_bg.jpg' active={active} handleActivePortal={handleActivePortal} handleCurrentBook={handleCurrentBook} levelStart={levelStart} levelStarted={levelStarted} BooksDisplay={BugtongBooks} books={bugtongBooks} booksSolved={bugtongBooksSolved} />}

                {sawikainPortalActive && <Portal className='center' name='SAWIKAIN' texture='textures/sawikain_bg.jpg' active={active} handleActivePortal={handleActivePortal} handleCurrentBook={handleCurrentBook} levelStart={levelStart} levelStarted={levelStarted} BooksDisplay={SawikainBooks} books={sawikainBooks} booksSolved={sawikainBooksSolved}/>}

                {salawikainPortalActive && <Portal className='center' name='SALAWIKAIN' texture='textures/salawikain_bg.jpg' active={active} handleActivePortal={handleActivePortal} handleCurrentBook={handleCurrentBook} levelStart={levelStart} levelStarted={levelStarted} BooksDisplay={SalawikainBooks} books={salawikainBooks} booksSolved={salawikainBooksSolved} />}
            </Suspense>
        </Canvas>

        {levelStart && <Game crowns={crowns} bugtongPortalActive={bugtongPortalActive} bugtongBooksSolved={bugtongBooksSolved} sawikainPortalActive={sawikainPortalActive} sawikainBooksSolved={sawikainBooksSolved} salawikainPortalActive={salawikainPortalActive} salawikainBooksSolved={salawikainBooksSolved} levelEnded={levelEnded} levelSolved={levelSolved} levelIsSolved={levelIsSolved} levelIsNotSolved={levelIsNotSolved} handleLevelSolved={handleLevelSolved} />}

        {storyPrologue && <StoryPrologue handleBugtongUnlocked={handleBugtongUnlocked} />}
        {storyChapter1_1 && <StoryChapter1_1 />}
        {!loading && storyChapter1_2 && <StoryChapter1_2 />}
        {!loading && storyChapter1_3 && <StoryChapter1_3 />}
        {!loading && storyChapter1_4 && <StoryChapter1_4 handleSawikainUnlocked={handleSawikainUnlocked} handleSawikainPortalActive={handleSawikainPortalActive} setActive={setActive}/>}
        {storyChapter2_1 && <StoryChapter2_1 />}
        {!loading && storyChapter2_2 && <StoryChapter2_2 />}
        {!loading && storyChapter2_3 && <StoryChapter2_3 />}
        {!loading && storyChapter2_4 && <StoryChapter2_4 />}
        {!loading && storyChapter2_5 && <StoryChapter2_5 handleSalawikainUnlocked={handleSalawikainUnlocked} handleSalawikainPortalActive={handleSalawikainPortalActive} setActive={setActive} />}
        {storyChapter3_1 && <StoryChapter3_1 />}
        {!loading && storyChapter3_2 && <StoryChapter3_2 />}
        {!loading && storyChapter3_3 && <StoryChapter3_3 />}
        {!loading && storyChapter3_4 && <StoryChapter3_4 />}
        {!loading && storyChapter3_5 && <StoryChapter3_5 setActive={setActive} />}
        {!storyFinished && storyEnd && <StoryEnd handleStoryFinished={handleStoryFinished}  />}
        </> 
    )
}

export default Play