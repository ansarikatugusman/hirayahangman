import { useState, useEffect, useContext } from 'react'
import AuthContext from '../context/AuthContext'
import useHttpRequest from '../hooks/useHttpRequest'
import Loading from '../utils/Loading'
import ErrorMessage from '../utils/ErrorMessage'
import UtilityDisplay from '../components/game/UtilityDisplay'
import AnswerDisplay from '../components/game/AnswerDisplay'
import BookDisplay from '../components/game/BookDisplay'
import QuestionDisplay from '../components/game/QuestionDisplay'
import ItemsDisplay from '../components/game/ItemsDisplay'
import LettersDisplay from '../components/game/LettersDisplay'
import EndGame from '../components/game/EndGame'

import BugtongWordBank from '../utils/BugtongWordBank'

import './Game.css'

const Game = ({ setPlayerGold, levelEnded, levelSolved, levelIsSolved, levelIsNotSolved, handleLevelSolved }) => {
    const [crowns, setCrowns] = useState()
    const [item1, setItem1] = useState()
    const [item2, setItem2] = useState()
    const [item3, setItem3] = useState()
    const [item4, setItem4] = useState()
    const [item5, setItem5] = useState()
    const [upgrade1, setUpgrade1] = useState()
    const [upgrade2, setUpgrade2] = useState()
    const [upgrade3, setUpgrade3] = useState()
    const [timeIsPlaying, setTimeIsPlaying] = useState(true)
    const [lives, setLives] = useState(3)
    const [answer, setAnswer] = useState('')
    const [question, setQuestion] = useState('')
    const [pictures, setPictures] = useState([])
    const [cover, setCover] = useState('')
    const [back, setBack] = useState('')
    const [displayBook, setDisplayBook] = useState(false)
    const [correctLetters, setCorrectLetters] = useState([])
    const [wrongLetters, setWrongLetters] = useState([])
    const [openWrongLetters, setOpenWrongLetters] = useState([])
    const [puzzleEnded, setPuzzleEnded] = useState(false)
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
                setCrowns(data.user.crowns)
                setItem1(data.user.item1)
                setItem2(data.user.item2)
                setItem3(data.user.item3)
                setItem4(data.user.item4)
                setItem5(data.user.item5)
                setUpgrade1(data.user.upgrade1)
                setUpgrade2(data.user.upgrade2)
                setUpgrade3(data.user.upgrade3)
                setLives(prevLives => prevLives + data.user.upgrade1 - 1)
            } catch (err) {
                setShowError(true)
            }
        }
        getGame()
    }, [])

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

    const generateGame = () => {
        let bugtong = BugtongWordBank.easy[Math.floor(Math.random() * BugtongWordBank.easy.length)]        
        setAnswer(bugtong.answer)
        setQuestion(bugtong.question)
        setPictures(bugtong.pictures)
        setCover(BugtongWordBank.cover)
        setBack(BugtongWordBank.back)
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

        setCorrectLetters([])
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
                }
                console.log(letter)
            }
        }
        window.addEventListener('keydown', handleKeydown);

        return () => window.removeEventListener('keydown', handleKeydown);
    }, [answer, correctLetters, wrongLetters]);

    return (
        <div className='game center'>
            {loading && <Loading />}
            {showError && <ErrorMessage error={error} setShowError={setShowError} />}   
            <UtilityDisplay timeIsPlaying={timeIsPlaying} lives={lives} exitLevel={exitLevel} levelIsNotSolved={levelIsNotSolved} closeDisplayBook={closeDisplayBook} handlePuzzleEnded={handlePuzzleEnded}/>
            <AnswerDisplay answer={answer} correctLetters={correctLetters} />
            <BookDisplay pictures={pictures} cover={cover} back={back} displayBook={displayBook} openDisplayBook={openDisplayBook} closeDisplayBook={closeDisplayBook} />
            <QuestionDisplay question={question} />
            <ItemsDisplay item1={item1} item2={item2} item3={item3} item4={item4} item5={item5} setItem1={setItem1} setItem2={setItem2} setItem3={setItem3} setItem4={setItem4} setItem5={setItem5} addLife={addLife} stopTime={stopTime} timeIsPlaying={timeIsPlaying} hint={hint} generateGame={generateGame} remove={remove} openWrongLetters={openWrongLetters} />
            <LettersDisplay subtractLife={subtractLife} answer={answer} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} wrongLetters={wrongLetters} setWrongLetters={setWrongLetters} levelIsSolved={levelIsSolved} levelIsNotSolved={levelIsNotSolved} /> 
            {puzzleEnded && <EndGame  answer={answer} levelSolved={levelSolved} exitLevel={exitLevel} handlePuzzleEnded={handlePuzzleEnded} levelEnded={levelEnded} setPlayerGold={setPlayerGold} />}
        </ div>
    )
}

export default Game