import { useState, useEffect, use } from 'react'
import UtilityDisplay from '../components/game/UtilityDisplay'
import AnswerDisplay from '../components/game/AnswerDisplay'
import BookDisplay from '../components/game/BookDisplay'
import QuestionDisplay from '../components/game/QuestionDisplay'
import LettersDisplay from '../components/game/LettersDisplay'
import PostGameMenu from '../components/game/PostGameMenu'

import BugtongWordBank from '../utils/BugtongWordBank'

import './AdventureGame.css'

const AdventureGame = ({ levelEnded, levelSolved, levelIsSolved, levelIsNotSolved, handleLevelSolved }) => {
    const [lives, setLives] = useState(3)
    const [answer, setAnswer] = useState('')
    const [question, setQuestion] = useState('')
    const [pictures, setPictures] = useState([])
    const [cover, setCover] = useState('')
    const [back, setBack] = useState('')
    const [displayBook, setDisplayBook] = useState(false)
    const [correctLetters, setCorrectLetters] = useState([])
    const [wrongLetters, setWrongLetters] = useState([])
    const [puzzleEnded, setPuzzleEnded] = useState(false)

    const addLife = () => {
        setLives(prevLives => prevLives + 1)
    }

    const subtractLife = () => {
        setLives(prevLives => prevLives - 1)
    }

    const generateBugtong = () => {
        let bugtong = BugtongWordBank.easy[Math.floor(Math.random() * BugtongWordBank.easy.length)]        
        setAnswer(bugtong.answer)
        setQuestion(bugtong.question)
        setPictures(bugtong.pictures)
        setCover(BugtongWordBank.cover)
        setBack(BugtongWordBank.back)
        console.log(bugtong)
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

    useEffect(generateBugtong, [])

    useEffect(() => {
        if (correctLetters.length && answer.split('').every(letter => correctLetters.includes(letter))) {
            levelIsSolved()
            handleLevelSolved()
            handlePuzzleEnded(true)
        }
        if (wrongLetters.length === 3) { 
            handlePuzzleEnded(true)
        }
    }, [correctLetters, wrongLetters])

    useEffect(() => {
        const handleKeydown = event => {
            const { key, keyCode } = event;
            if (keyCode >= 65 && keyCode <= 90) {
                const letter = key.toUpperCase()
                if (answer.includes(letter)) {
                    setCorrectLetters(correctLetters => [...correctLetters, letter]);
                } else {
                    setWrongLetters(wrongLetters => [...wrongLetters, letter]); 
                }
                console.log(letter)
            }
        }
        window.addEventListener('keydown', handleKeydown);

        return () => window.removeEventListener('keydown', handleKeydown);
    }, [answer, correctLetters, wrongLetters]);

    return (
        <div className='adventure_game center'>
            <UtilityDisplay lives={lives} exitLevel={exitLevel} levelIsNotSolved={levelIsNotSolved} handlePuzzleEnded={handlePuzzleEnded}/>
            <AnswerDisplay answer={answer} correctLetters={correctLetters} />
            <BookDisplay pictures={pictures} cover={cover} back={back} displayBook={displayBook} openDisplayBook={openDisplayBook} closeDisplayBook={closeDisplayBook} />
            <QuestionDisplay question={question} />
            <LettersDisplay subtractLife={subtractLife} answer={answer} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} wrongLetters={wrongLetters} setWrongLetters={setWrongLetters} levelIsSolved={levelIsSolved} levelIsNotSolved={levelIsNotSolved} /> 
            {puzzleEnded && <PostGameMenu  answer={answer} levelSolved={levelSolved} exitLevel={exitLevel} handlePuzzleEnded={handlePuzzleEnded} levelEnded={levelEnded}/>}
        </ div>
    )
}

export default AdventureGame