import { useState, useEffect, useContext } from 'react'
import AuthContext from '../context/AuthContext'
import useHttpRequest from '../hooks/useHttpRequest'
import Loading from '../utils/Loading'
import ErrorMessage from '../utils/ErrorMessage'
import StartGame from '../components/game/StartGame'
import UtilityDisplay from '../components/game/UtilityDisplay'
import AnswerDisplay from '../components/game/AnswerDisplay'
import BookDisplay from '../components/game/BookDisplay'
import QuestionDisplay from '../components/game/QuestionDisplay'
import ItemsDisplay from '../components/game/ItemsDisplay'
import LettersDisplay from '../components/game/LettersDisplay'
import EndGame from '../components/game/EndGame'
import ExitPrompt from '../components/game/ExitPrompt'

import GameMusic from '../assets/audios/game_music.ogg'

import BugtongWordBank from '../utils/BugtongWordBank'
import SawikainWordBank from '../utils/SawikainWordBank'
import SalawikainWordBank from '../utils/SalawikainWordBank'

import './Game.css'

const Game = ({ musicMuted, crowns, bugtongPortalActive, bugtongBooksSolved, sawikainPortalActive, sawikainBooksSolved, salawikainPortalActive, salawikainBooksSolved, levelEnded, levelSolved, levelIsSolved, levelIsNotSolved, handleLevelSolved}) => {
    const [item1, setItem1] = useState()
    const [item2, setItem2] = useState()
    const [item3, setItem3] = useState()
    const [item4, setItem4] = useState()
    const [item5, setItem5] = useState()
    const [upgrade1, setUpgrade1] = useState()
    const [upgrade2, setUpgrade2] = useState()
    const [upgrade3, setUpgrade3] = useState()
    const [tutorial1, setTutorial1] = useState()
    const [tutorial2, setTutorial2] = useState()
    const [tutorial3, setTutorial3] = useState()
    const [tutorial4, setTutorial4] = useState()
    const [tutorial5, setTutorial5] = useState()
    const [tutorialFinished, setTutorialFinished] = useState()
    const [tutorial1Active, setTutorial1Active] = useState()
    const [tutorial2Active, setTutorial2Active] = useState()
    const [tutorial3Active, setTutorial3Active] = useState()
    const [tutorial4Active, setTutorial4Active] = useState()
    const [tutorial5Active, setTutorial5Active] = useState()
    const [completedTutorial, setCompletedTutorial] = useState('')
    const [startGame, setStartGame] = useState(false)
    const [timeIsPlaying, setTimeIsPlaying] = useState(true)
    const [timeDuration, setTimeDuration] = useState()
    const [lives, setLives] = useState(3)
    const [currentItem, setCurrentItem] = useState('')
    const [answer, setAnswer] = useState('')
    const [question, setQuestion] = useState('')
    const [pictures, setPictures] = useState([])
    const [cover, setCover] = useState('')
    const [back, setBack] = useState('')
    const [displayBook, setDisplayBook] = useState(false)
    const [correctLetters, setCorrectLetters] = useState([])
    const [wrongLetters, setWrongLetters] = useState([])
    const [openWrongLetters, setOpenWrongLetters] = useState([])
    const [remainingTimeLeft, setRemainingTimeLeft] = useState()
    const [itemsUsed, setItemsUsed] = useState(0)
    const [timeStopUsed, setTimeStopUsed] = useState(false)
    const [puzzleEnded, setPuzzleEnded] = useState(false)
    const [exitGame, setExitGame] = useState(false)
    const [showError, setShowError] = useState(false)
    const {loading, error, fetchRequest} = useHttpRequest()

    const auth = useContext(AuthContext)

    useEffect(() => {
        const getGame = async () => {
            try {
                const data = await fetchRequest(`${import.meta.env.VITE_BACKEND_URL}/user/game`, 
                    'GET', 
                    {Authorization: 'Bearer ' + auth.token}
                )   
                setItem1(data.user.item1)
                setItem2(data.user.item2)
                setItem3(data.user.item3)
                setItem4(data.user.item4)
                setItem5(data.user.item5)
                setUpgrade1(data.user.upgrade1)
                setUpgrade2(data.user.upgrade2)
                setUpgrade3(data.user.upgrade3)
                setTutorial1(data.user.tutorial1)
                setTutorial2(data.user.tutorial2)
                setTutorial3(data.user.tutorial3)
                setTutorial4(data.user.tutorial4)
                setTutorial5(data.user.tutorial5)
                setTutorialFinished(data.user.tutorialFinished)
                setLives(prevLives => prevLives + data.user.upgrade1 - 1)
                setTimeDuration(55 + (data.user.upgrade2 * 5))
            } catch (err) {
                setShowError(true)
            }
        }
        getGame()
    }, [])

    const onClickStart = () => [
        setStartGame(true)
    ]

    const stopTime = () => {
        setTimeIsPlaying(false)
        setTimeStopUsed(true)
    }

    const addLife = () => {
        setLives(prevLives => prevLives + 1)
    }

    const subtractLife = () => {
        setLives(prevLives => prevLives - 1)
    }

    const hint = () => {
        let openCorrectLetters = []
        
        answer.split('').forEach(letter => {
            if (answer.includes(letter) && !correctLetters.includes(letter)) {
                openCorrectLetters.push(letter)
            }
        })
        
        setCorrectLetters(correctLetters => [...correctLetters, openCorrectLetters[Math.floor(Math.random() * openCorrectLetters.length)]])
        levelIsSolved()
    }

    const remove = () => {
        let removedWrongLetters = []
        let letters = 'ABKDEGHILMNOPRSTUWY'

        letters.split('').forEach(letter => {
            if (!answer.includes(letter) && !wrongLetters.includes(letter)) {
                removedWrongLetters.push(letter)
            }
        })

        if (removedWrongLetters.length >= 1) {
            setWrongLetters(wrongLetters => [...wrongLetters, removedWrongLetters[Math.floor(Math.random() * removedWrongLetters.length)]])
            setOpenWrongLetters(removedWrongLetters)
        } else {
            setOpenWrongLetters([])
        }
    }

    useEffect(() => {
        for (let i = 1; i < upgrade3; i++ ) remove()
    }, [answer, upgrade3])

    const generateBugtong = () => {
        let bugtong 
        let easyBugtong = BugtongWordBank.easy
        let mediumBugtong = BugtongWordBank.medium
        let hardBugtong = BugtongWordBank.hard
        let allBugtong = [...easyBugtong, ...mediumBugtong, ...hardBugtong]
        const availableEasyBugtong = easyBugtong.filter(bugtong => !bugtongBooksSolved.includes(bugtong.item_code))
        const availableMediumBugtong = mediumBugtong.filter(bugtong => !bugtongBooksSolved.includes(bugtong.item_code))
        const availableHardBugtong = hardBugtong.filter(bugtong => !bugtongBooksSolved.includes(bugtong.item_code))
        
        if (crowns < 149) {
            if (availableEasyBugtong.length >= 1) {
                bugtong = availableEasyBugtong[Math.floor(Math.random() * availableEasyBugtong.length)]
            } else if (availableEasyBugtong.length <= 0 && availableMediumBugtong.length >= 1) {
                bugtong = availableMediumBugtong[Math.floor(Math.random() * availableMediumBugtong.length)]
            } else if (availableEasyBugtong.length <= 0 && availableMediumBugtong.length <= 0) {
                bugtong = availableHardBugtong[Math.floor(Math.random() * availableHardBugtong.length)]
            }
        } else if (crowns < 349) {
            if (availableMediumBugtong.length >= 1) {
                bugtong = availableMediumBugtong[Math.floor(Math.random() * availableMediumBugtong.length)]
            } else if (availableMediumBugtong.length <= 0 && availableEasyBugtong.length >= 1) {
                bugtong = availableEasyBugtong[Math.floor(Math.random() * availableEasyBugtong.length)]
            } else if (availableMediumBugtong.length <= 0 && availableEasyBugtong.length <= 0) {
                bugtong = availableHardBugtong[Math.floor(Math.random() * availableHardBugtong.length)]
            }
        } else {
            if (availableHardBugtong.length >= 1) {
                bugtong = availableHardBugtong[Math.floor(Math.random() * availableHardBugtong.length)]
            } else if (availableHardBugtong.length <= 0 && availableEasyBugtong.length >= 1) {
                bugtong = availableEasyBugtong[Math.floor(Math.random() * availableEasyBugtong.length)]
            } else if (availableHardBugtong.length <= 0 && availableEasyBugtong.length <= 0) {
                bugtong = availableMediumBugtong[Math.floor(Math.random() * availableMediumBugtong.length)]
            } 
        }

        if (availableHardBugtong.length <= 0 && availableEasyBugtong.length <= 0 && availableMediumBugtong.length <= 0) {
            bugtong = allBugtong[Math.floor(Math.random() * allBugtong.length)]
        }

        setCover(BugtongWordBank.cover)
        setBack(BugtongWordBank.back)
        return bugtong
    }

    const generateSawikain = () => {
        let sawikain
        let easySawikain = SawikainWordBank.easy
        let mediumSawikain = SawikainWordBank.medium
        let hardSawikain = SawikainWordBank.hard
        let allSawikain = [...easySawikain, ...mediumSawikain, ...hardSawikain]
        const availableEasySawikain = easySawikain.filter(sawikain => !sawikainBooksSolved.includes(sawikain.item_code))
        const availableMediumSawikain = mediumSawikain.filter(sawikain => !sawikainBooksSolved.includes(sawikain.item_code))
        const availableHardSawikain = hardSawikain.filter(sawikain => !sawikainBooksSolved.includes(sawikain.item_code))

        if (crowns < 149) {
            if (availableEasySawikain.length >= 1) {
                sawikain = availableEasySawikain[Math.floor(Math.random() * availableEasySawikain.length)]
            } else if (availableEasySawikain.length <= 0 && availableMediumSawikain.length >= 1) {
                sawikain = availableMediumSawikain[Math.floor(Math.random() * availableMediumSawikain.length)]
            } else if (availableEasySawikain.length <= 0 && availableMediumSawikain.length <= 0) {
                sawikain = availableHardSawikain[Math.floor(Math.random() * availableHardSawikain.length)]
            }  
            
        } else if (crowns < 349) {
            if (availableMediumSawikain.length >= 1) {
                sawikain = availableMediumSawikain[Math.floor(Math.random() * availableMediumSawikain.length)]
            } else if (availableMediumSawikain.length <= 0 && availableEasySawikain.length >= 1) {
                sawikain = availableEasySawikain[Math.floor(Math.random() * availableEasySawikain.length)]
            } else if (availableMediumSawikain.length <= 0 && availableEasySawikain.length <= 0) {
                sawikain = availableHardSawikain[Math.floor(Math.random() * availableHardSawikain.length)]
            } 
            
        } else {
            if (availableHardSawikain.length >= 1) {
                sawikain = availableHardSawikain[Math.floor(Math.random() * availableHardSawikain.length)]
            } else if (availableHardSawikain.length <= 0 && availableEasySawikain.length >= 1) {
                sawikain = availableEasySawikain[Math.floor(Math.random() * availableEasySawikain.length)]
            } else if (availableHardSawikain.length <= 0 && availableEasySawikain.length <= 0) {
                sawikain = availableMediumSawikain[Math.floor(Math.random() * availableMediumSawikain.length)]
            } 
        }

        if (availableHardSawikain.length <= 0 && availableEasySawikain.length <= 0 && availableMediumSawikain.length <= 0) {
            sawikain = allSawikain[Math.floor(Math.random() * allSawikain.length)]
        }

        setCover(SawikainWordBank.cover)
        setBack(SawikainWordBank.back)
        return sawikain
    }

    const generateSalawikain = () => {
        let salawikain 
        let easySalawikain = SalawikainWordBank.easy
        let mediumSalawikain = SalawikainWordBank.medium
        let hardSalawikain = SalawikainWordBank.hard
        let allSalawikain = [...easySalawikain, ...mediumSalawikain, ...hardSalawikain]
        const availableEasySalawikain = easySalawikain.filter(salawikain => !salawikainBooksSolved.includes(salawikain.item_code))
        const availableMediumSalawikain = mediumSalawikain.filter(salawikain => !salawikainBooksSolved.includes(salawikain.item_code))
        const availableHardSalawikain = hardSalawikain.filter(salawikain => !salawikainBooksSolved.includes(salawikain.item_code))

        if (crowns < 149) {
            if (availableEasySalawikain.length >= 1) {
                salawikain = availableEasySalawikain[Math.floor(Math.random() * availableEasySalawikain.length)]
            } else if (availableEasySalawikain.length <= 0 && availableMediumSalawikain.length >= 1) {
                salawikain = availableMediumSalawikain[Math.floor(Math.random() * availableMediumSalawikain.length)]
            } else if (availableEasySalawikain.length <= 0 && availableMediumSalawikain.length <= 0) {
                salawikain = availableHardSalawikain[Math.floor(Math.random() * availableHardSalawikain.length)]
            }
        } else if (crowns < 349) {
            if (availableMediumSalawikain.length >= 1) {
                salawikain = availableMediumSalawikain[Math.floor(Math.random() * availableMediumSalawikain.length)]
            } else if (availableMediumSalawikain.length <= 0 && availableEasySalawikain.length >= 1) {
                salawikain = availableEasySalawikain[Math.floor(Math.random() * availableEasySalawikain.length)]
            } else if (availableMediumSalawikain.length <= 0 && availableEasySalawikain.length <= 0) {
                salawikain = availableHardSalawikain[Math.floor(Math.random() * availableHardSalawikain.length)]
            }
        } else {
            if (availableHardSalawikain.length >= 1) {
                salawikain = availableHardSalawikain[Math.floor(Math.random() * availableHardSalawikain.length)]
            } else if (availableHardSalawikain.length <= 0 && availableEasySalawikain.length >= 1) {
                salawikain = availableEasySalawikain[Math.floor(Math.random() * availableEasySalawikain.length)]
            } else if (availableHardSalawikain.length <= 0 && availableEasySalawikain.length <= 0) {
                salawikain = availableMediumSalawikain[Math.floor(Math.random() * availableMediumSalawikain.length)]
            } 
        }

        if (availableHardSalawikain.length <= 0 && availableEasySalawikain.length <= 0 && availableMediumSalawikain.length <= 0) {
            salawikain = allSalawikain[Math.floor(Math.random() * allSalawikain.length)]
        }

        return salawikain
    }

    const generateGame = () => {
        let game 
        if (bugtongPortalActive) {
            game = generateBugtong()
        } else if (sawikainPortalActive) {
            game = generateSawikain()
        } else if (salawikainPortalActive) {
            game = generateSalawikain()
        }

        setCurrentItem(game.item_code)
        setAnswer(game.answer)
        setQuestion(game.question)
        setPictures(game.pictures)
        resetCorrectAndWrongLetters()
    }

    const resetCorrectAndWrongLetters = () => {
        let wrongLettersArray = []
        let letters = 'ABKDEGHILMNOPRSTUWY'

        letters.split('').forEach(letter => {
            if (!answer.includes(letter) && !wrongLetters.includes(letter)) {
                wrongLettersArray.push(letter)
            }
        })

        setCorrectLetters([' ', '-', ','])
        setWrongLetters([])
        setOpenWrongLetters(wrongLettersArray)
    }

    const openDisplayBook = () => {
        setDisplayBook(true)
    }

    const closeDisplayBook = () => {
        setDisplayBook(false)
    }

    const exitLevel = () => {
        levelIsNotSolved()
        levelEnded()
    }

    const handlePuzzleEnded = () => {
        setPuzzleEnded(true)
    }

    const onClickExitGame = () => {
        setExitGame(true)
    }

    const onCancelExitGame = () => {
        setExitGame(false)
    }

    const onTutorialExit = () => {
        exitLevel()
    }

    const onItemUse = () => {
        setItemsUsed((prevItemsUsed) => prevItemsUsed + 1)
    }

    const goldReward = () => {
        if (!tutorialFinished) return 50

        if(timeStopUsed) return 40
        else return Math.round(40 + (remainingTimeLeft / 6))
    }

    const crownsReward = () => {
        if (!tutorialFinished) return 10

        let baseReward
        let timeUsed = (55 + (upgrade2 * 5)) - remainingTimeLeft

        if (crowns < 149) baseReward = 35
        else if (crowns < 249) baseReward = 29
        else if (crowns < 349) baseReward = 24
        else if (crowns < 449) baseReward = 20
        else if (crowns < 549) baseReward = 17
        else if (crowns < 649) baseReward = 15
        else if (crowns < 749) baseReward = 13
        else if (crowns < 849) baseReward = 11
        else if (crowns < 949) baseReward = 9
        else if (crowns < 1249) baseReward = 7
        else if (crowns < 1449) baseReward = 5
        else if (crowns < 1749) baseReward = 3
        else baseReward = 2
        
        return Math.round(baseReward - (timeUsed / 3.5) - itemsUsed - wrongLetters.length)
    }

    const tutorialCompleted = async () => {
        try {
            await fetchRequest(`${import.meta.env.VITE_BACKEND_URL}/tutorial/complete/${completedTutorial}`,
            'PATCH',
            {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + auth.token 
            },
            JSON.stringify({
                currentItem: currentItem,
            }))
        } catch (err) {
            setShowError(true)
        }
    }

    const gameCompleted = async () => {
        let book
        if (bugtongPortalActive) book = 'bugtongBooksSolved'
        if (sawikainPortalActive) book = 'sawikainBooksSolved'
        if (salawikainPortalActive) book = 'salawikainBooksSolved'

        try {
            await fetchRequest(`${import.meta.env.VITE_BACKEND_URL}/game/complete/${book}`,
            'PATCH',
            {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + auth.token 
            },
            JSON.stringify({
                currentItem: currentItem,
                crownsReward: crownsReward(),
                goldReward: goldReward(),
                timeUsed: (55 + (upgrade2 * 5)) - remainingTimeLeft
            }))
        } catch (err) {
            setShowError(true)
        }
    }

    const crownsPenalty = () => {
        if (!tutorialFinished) return 0

        let crownsPenalty

        if (crowns < 149) crownsPenalty = -2
        else if (crowns < 249) crownsPenalty = -3
        else if (crowns < 349) crownsPenalty = -5
        else if (crowns < 449) crownsPenalty = -7
        else if (crowns < 549) crownsPenalty = -9
        else if (crowns < 649) crownsPenalty = -11
        else if (crowns < 749) crownsPenalty = -13
        else if (crowns < 849) crownsPenalty = -15
        else if (crowns < 949) crownsPenalty = -17
        else if (crowns < 1249) crownsPenalty = -20
        else if (crowns < 1449) crownsPenalty = -24
        else if (crowns < 1749) crownsPenalty = -29
        else crownsPenalty = -35

        return crownsPenalty
    }

    const onFailGame = async( exit ) => {
        if (exit) exitLevel()

        try {
            await fetchRequest(`${import.meta.env.VITE_BACKEND_URL}/game/incomplete`,
            'PATCH',
            {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + auth.token 
            },
            JSON.stringify({
                crownsPenalty: crownsPenalty()
            }))
        } catch (err) {
            setShowError(true)
        }
    }

    useEffect(generateGame, [])

    useEffect(() => {
        if (correctLetters.length && answer.split('').every(letter => correctLetters.includes(letter))) {
            levelIsSolved()
            handleLevelSolved()
            handlePuzzleEnded(true)
            stopTime()
        }
        if (lives <= 0) { 
            handlePuzzleEnded(true)
            stopTime()
        }
    }, [correctLetters, lives])

    useEffect(() => {
        if (!tutorialFinished && !tutorial1 ) {  
            setTutorial1Active(true)
        } else {
            setTutorial1Active(false)
        }

        if (!tutorialFinished && tutorial1 && !tutorial2 ) {  
            setTutorial2Active(true)
        } else {
            setTutorial2Active(false)
        }

        if (!tutorialFinished && tutorial2 && !tutorial3) {     
            setTutorial3Active(true)
        } else {
            setTutorial3Active(false)
        }

        if (!tutorialFinished && tutorial3 && !tutorial4) {     
            setTutorial4Active(true)
        } else {
            setTutorial4Active(false)
        }

        if (!tutorialFinished && tutorial4 && !tutorial5) {     
            setTutorial5Active(true)
        } else {
            setTutorial5Active(false)
        }

    }, [tutorialFinished, tutorial1, tutorial2, tutorial3, tutorial4, tutorial5])

    useEffect(() => {
        const handleKeydown = event => {
            const { key, keyCode } = event
            if (keyCode >= 65 && keyCode <= 89 && !puzzleEnded && startGame && 
                !tutorial1Active && !tutorial2Active && !tutorial3Active && !tutorial4Active && !tutorial5Active &&
                keyCode != 67 && keyCode != 70 && keyCode != 74 && keyCode != 81 && keyCode != 86 && keyCode != 88
            ) {
                const letter = key.toUpperCase()
                if (answer.includes(letter) && !puzzleEnded) {
                    levelIsSolved() 
                    if (!correctLetters.includes(letter)) {
                        setCorrectLetters(correctLetters => [...correctLetters, letter])    
                    }
                } else {
                    levelIsNotSolved()
                    if (!wrongLetters.includes(letter)) {
                        setWrongLetters(wrongLetters => [...wrongLetters, letter])
                        if(tutorial1) subtractLife()
                    }
                }
            }
        }
        window.addEventListener('keydown', handleKeydown)

        return () => window.removeEventListener('keydown', handleKeydown)
    }, [answer, correctLetters, wrongLetters, startGame, puzzleEnded, tutorial1Active, tutorial2Active, tutorial3Active, tutorial4Active, tutorial5Active])

    return (
        <div className='game center'>
            <audio src={GameMusic} autoPlay loop muted={musicMuted} />
            {loading && <Loading />}
            {showError && <ErrorMessage error={error} setShowError={setShowError} />}
            {!startGame && <StartGame onClickStart={onClickStart} exitLevel={exitLevel} />}

            {startGame && <UtilityDisplay tutorial1={tutorial1} tutorial2={tutorial2} tutorial3={tutorial3} tutorialFinished={tutorialFinished} tutorial1Active={tutorial1Active} tutorial2Active={tutorial2Active} tutorial3Active={tutorial3Active} tutorial4Active={tutorial4Active} tutorial5Active={tutorial5Active} setTutorial2Active={setTutorial2Active} setTutorial3Active={setTutorial3Active} setCompletedTutorial={setCompletedTutorial} timeIsPlaying={timeIsPlaying} timeDuration={timeDuration} lives={lives} setRemainingTimeLeft={setRemainingTimeLeft} levelIsNotSolved={levelIsNotSolved} closeDisplayBook={closeDisplayBook} handlePuzzleEnded={handlePuzzleEnded} onClickExitGame={onClickExitGame}/>}

            {startGame && <AnswerDisplay answer={answer} correctLetters={correctLetters} bugtongPortalActive={bugtongPortalActive} sawikainPortalActive={sawikainPortalActive} salawikainPortalActive={salawikainPortalActive} />}

            {startGame && <BookDisplay tutorial3={tutorial3} tutorial4={tutorial4} tutorialFinished={tutorialFinished} tutorial4Active={tutorial4Active} setTutorial4Active={setTutorial4Active} setCompletedTutorial={setCompletedTutorial} pictures={pictures} cover={cover} back={back} displayBook={displayBook} openDisplayBook={openDisplayBook} closeDisplayBook={closeDisplayBook} salawikainPortalActive={salawikainPortalActive} />}

            {startGame && <QuestionDisplay question={question} sawikainPortalActive={sawikainPortalActive} salawikainPortalActive={salawikainPortalActive} />} 

            {startGame && <ItemsDisplay tutorial4={tutorial4} tutorialFinished={tutorialFinished} tutorial5Active={tutorial5Active} setTutorial5Active={setTutorial5Active} setCompletedTutorial={setCompletedTutorial} item1={item1} item2={item2} item3={item3} item4={item4} item5={item5} setItem1={setItem1} setItem2={setItem2} setItem3={setItem3} setItem4={setItem4} setItem5={setItem5} addLife={addLife} stopTime={stopTime} timeIsPlaying={timeIsPlaying} hint={hint} generateGame={generateGame} remove={remove} openWrongLetters={openWrongLetters} onItemUse={onItemUse} />}

            {startGame && <LettersDisplay tutorial1={tutorial1} setCompletedTutorial={setCompletedTutorial} tutorial1Active={tutorial1Active} setTutorial1Active={setTutorial1Active} subtractLife={subtractLife} answer={answer} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} wrongLetters={wrongLetters} setWrongLetters={setWrongLetters} levelIsSolved={levelIsSolved} levelIsNotSolved={levelIsNotSolved} /> }

            {puzzleEnded && <EndGame tutorialFinished={tutorialFinished} tutorialCompleted={tutorialCompleted} answer={answer} currentItem={currentItem} gameCompleted={gameCompleted} onFailGame={onFailGame} crownsPenalty={crownsPenalty} goldReward={goldReward} crownsReward={crownsReward} levelSolved={levelSolved} exitLevel={exitLevel} handlePuzzleEnded={handlePuzzleEnded} levelEnded={levelEnded} />}

            {exitGame && <ExitPrompt tutorialFinished={tutorialFinished} onTutorialExit={onTutorialExit} onFailGame={onFailGame} onCancelExitGame={onCancelExitGame} />}
        </ div>
    )
}

export default Game