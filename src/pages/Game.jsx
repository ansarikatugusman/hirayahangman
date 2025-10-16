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

import BugtongWordBank from '../utils/BugtongWordBank'
import SawikainWordBank from '../utils/SawikainWordBank'
import SalawikainWordBank from '../utils/SalawikainWordBank'

import './Game.css'

const Game = ({ crowns, gold, bugtongPortalActive, bugtongBooksSolved, sawikainPortalActive, sawikainBooksSolved, salawikainPortalActive, salawikainBooksSolved, levelEnded, levelSolved, levelIsSolved, levelIsNotSolved, handleLevelSolved }) => {
    const [item1, setItem1] = useState()
    const [item2, setItem2] = useState()
    const [item3, setItem3] = useState()
    const [item4, setItem4] = useState()
    const [item5, setItem5] = useState()
    const [upgrade1, setUpgrade1] = useState()
    const [upgrade2, setUpgrade2] = useState()
    const [upgrade3, setUpgrade3] = useState()
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

    const onClickExit = () => {
        exitLevel()
    }

    const stopTime = () => {
        setTimeIsPlaying(false)
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
        const availableEasyBugtong = easyBugtong.filter(bugtong => !bugtongBooksSolved.includes(bugtong.item_code))
        const availableMediumBugtong = mediumBugtong.filter(bugtong => !bugtongBooksSolved.includes(bugtong.item_code))
        const availableHardBugtong = hardBugtong.filter(bugtong => !bugtongBooksSolved.includes(bugtong.item_code))
        if (crowns < 149) {
            if (availableEasyBugtong.length === 0) {
                bugtong = BugtongWordBank.easy[Math.floor(Math.random() * BugtongWordBank.easy.length)]
            } else {
                bugtong = availableEasyBugtong[Math.floor(Math.random() * availableEasyBugtong.length)]
            }
        } else if (crowns < 349) {
            if (availableMediumBugtong.length === 0) {
                bugtong = BugtongWordBank.medium[Math.floor(Math.random() * BugtongWordBank.medium.length)]
            } else {
                bugtong = availableMediumBugtong[Math.floor(Math.random() * availableMediumBugtong.length)]
            }
        } else {
            if (availableHardBugtong.length === 0) {
                bugtong = BugtongWordBank.hard[Math.floor(Math.random() * BugtongWordBank.hard.length)]
            } else {
                bugtong = availableHardBugtong[Math.floor(Math.random() * availableHardBugtong.length)]
            }
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
        const availableEasySawikain = easySawikain.filter(sawikain => !sawikainBooksSolved.includes(sawikain.item_code))
        const availableMediumSawikain = mediumSawikain.filter(sawikain => !sawikainBooksSolved.includes(sawikain.item_code))
        const availableHardSawikain = hardSawikain.filter(sawikain => !sawikainBooksSolved.includes(sawikain.item_code))
        if (crowns < 149) {
            if (availableEasySawikain.length === 0) {
                sawikain = SawikainWordBank.easy[Math.floor(Math.random() * SawikainWordBank.easy.length)]
            } else {
                sawikain = availableEasySawikain[Math.floor(Math.random() * availableEasySawikain.length)]
            }
        } else if (crowns < 349) {
            if (availableMediumSawikain.length === 0) {
                sawikain = SawikainWordBank.medium[Math.floor(Math.random() * SawikainWordBank.medium.length)]
            } else {
                sawikain = availableMediumSawikain[Math.floor(Math.random() * availableMediumSawikain.length)]
            }
        } else {
            if (availableHardSawikain.length === 0) {
                sawikain = SawikainWordBank.hard[Math.floor(Math.random() * SawikainWordBank.hard.length)]
            } else {
                sawikain = availableHardSawikain[Math.floor(Math.random() * availableHardSawikain.length)]
            }
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
        const availableEasySalawikain = easySalawikain.filter(salawikain => !salawikainBooksSolved.includes(salawikain.item_code))
        const availableMediumSalawikain = mediumSalawikain.filter(salawikain => !salawikainBooksSolved.includes(salawikain.item_code))
        const availableHardSalawikain = hardSalawikain.filter(salawikain => !salawikainBooksSolved.includes(salawikain.item_code))
        if (crowns < 149) {
            if (availableEasySalawikain.length === 0) {
                salawikain = SalawikainWordBank.easy[Math.floor(Math.random() * SalawikainWordBank.easy.length)]
            } else {
                salawikain = availableEasySalawikain[Math.floor(Math.random() * availableEasySalawikain.length)]
            }
        } else if (crowns < 349) {
            if (availableMediumSalawikain.length === 0) {
                salawikain = SalawikainWordBank.medium[Math.floor(Math.random() * SalawikainWordBank.medium.length)]
            } else {
                salawikain = availableMediumSalawikain[Math.floor(Math.random() * availableMediumSalawikain.length)]
            }
        } else {
            if (availableHardSalawikain.length === 0) {
                salawikain = SalawikainWordBank.hard[Math.floor(Math.random() * SalawikainWordBank.hard.length)]
            } else {
                salawikain = availableHardSalawikain[Math.floor(Math.random() * availableHardSalawikain.length)]
            }
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

    const crownsPenalty = () => {
        let crownsPenalty

        if (crowns < 149) crownsPenalty = -9
        else if (crowns < 249) crownsPenalty = -12
        else if (crowns < 349) crownsPenalty = -15
        else if (crowns < 449) crownsPenalty = -21
        else if (crowns < 549) crownsPenalty = -26
        else crownsPenalty = -30

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

    const onItemUse = () => {
        setItemsUsed((prevItemsUsed) => prevItemsUsed + 1)
    }

    const goldReward = () => {
        return Math.round(40 + (remainingTimeLeft / 6))
    }

    const crownsReward = () => {
        let baseReward
        let timeUsed = (55 + (upgrade2 * 5)) - remainingTimeLeft
        if (crowns < 149) baseReward = 30
        else if (crowns < 249) baseReward = 26
        else if (crowns < 349) baseReward = 21
        else if (crowns < 449) baseReward = 15
        else if (crowns < 549) baseReward = 12
        else baseReward = 9

        return Math.round(baseReward - (timeUsed / 3) - itemsUsed)
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
        const handleKeydown = event => {
            const { key, keyCode } = event;
            if (keyCode >= 65 && keyCode <= 90) {
                const letter = key.toUpperCase()
                if (answer.includes(letter)) {
                    setCorrectLetters(correctLetters => [...correctLetters, letter])
                    levelIsSolved()
                } else {
                    setWrongLetters(wrongLetters => [...wrongLetters, letter])
                    levelIsNotSolved()
                    subtractLife()
                }
            }
        }
        window.addEventListener('keydown', handleKeydown);

        return () => window.removeEventListener('keydown', handleKeydown);
    }, [answer, correctLetters, wrongLetters]);

    return (
        <div className='game center'>
            {loading && <Loading />}
            {showError && <ErrorMessage error={error} setShowError={setShowError} />}
            {!startGame && <StartGame onClickStart={onClickStart} onClickExit={onClickExit} />}

            {startGame && <UtilityDisplay timeIsPlaying={timeIsPlaying} timeDuration={timeDuration} lives={lives} exitLevel={exitLevel} setRemainingTimeLeft={setRemainingTimeLeft} levelIsNotSolved={levelIsNotSolved} closeDisplayBook={closeDisplayBook} handlePuzzleEnded={handlePuzzleEnded} onClickExitGame={onClickExitGame}/>}

            {startGame && <AnswerDisplay answer={answer} correctLetters={correctLetters} />}

            {startGame && <BookDisplay pictures={pictures} cover={cover} back={back} displayBook={displayBook} openDisplayBook={openDisplayBook} closeDisplayBook={closeDisplayBook} salawikainPortalActive={salawikainPortalActive} />}

            {startGame && <QuestionDisplay question={question} />} 

            {startGame && <ItemsDisplay item1={item1} item2={item2} item3={item3} item4={item4} item5={item5} setItem1={setItem1} setItem2={setItem2} setItem3={setItem3} setItem4={setItem4} setItem5={setItem5} addLife={addLife} stopTime={stopTime} timeIsPlaying={timeIsPlaying} hint={hint} generateGame={generateGame} remove={remove} openWrongLetters={openWrongLetters} onItemUse={onItemUse} />}

            {startGame && <LettersDisplay subtractLife={subtractLife} answer={answer} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} wrongLetters={wrongLetters} setWrongLetters={setWrongLetters} levelIsSolved={levelIsSolved} levelIsNotSolved={levelIsNotSolved} /> }

            {puzzleEnded && <EndGame answer={answer} currentItem={currentItem} gameCompleted={gameCompleted} onFailGame={onFailGame} crownsPenalty={crownsPenalty} goldReward={goldReward} crownsReward={crownsReward} levelSolved={levelSolved} exitLevel={exitLevel} handlePuzzleEnded={handlePuzzleEnded} levelEnded={levelEnded} />}

            {exitGame && <ExitPrompt onFailGame={onFailGame} onCancelExitGame={onCancelExitGame} />}
        </ div>
    )
}

export default Game