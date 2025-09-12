import { useState, useEffect, Suspense } from 'react'
import UtilityDisplay from '../components/game/UtilityDisplay'
import AnswerDisplay from '../components/game/AnswerDisplay'
import BookDisplay from '../components/game/BookDisplay'
import QuestionDisplay from '../components/game/QuestionDisplay'
import ItemsDisplay from '../components/game/ItemsDisplay'
import LettersDisplay from '../components/game/LettersDisplay'
import PostGameMenu from '../components/game/PostGameMenu'

import BugtongWordBank from '../utils/BugtongWordBank'

import './AdventureGame.css'

const AdventureGame = ({ levelEnded, levelSolved, levelIsSolved, levelIsNotSolved, handleLevelSolved }) => {
    const [timeIsPlaying, setTimeIsPlaying] = useState(true)
    const [lives, setLives] = useState(3)
    const [answer, setAnswer] = useState('')
    const [question, setQuestion] = useState('')
    const [pictures, setPictures] = useState([])
    const [cover, setCover] = useState('')
    const [back, setBack] = useState('')
    const [displayBook, setDisplayBook] = useState(false)
    const [item1, setItem1] = useState()
    const [item2, setItem2] = useState()
    const [item3, setItem3] = useState()
    const [correctLetters, setCorrectLetters] = useState([])
    const [wrongLetters, setWrongLetters] = useState([])
    const [puzzleEnded, setPuzzleEnded] = useState(false)

    useEffect(() => {
        const itemsData = localStorage.getItem('items')
        setItem1(JSON.parse(itemsData)['item1'])
        setItem2(JSON.parse(itemsData)['item2'])
        setItem3(JSON.parse(itemsData)['item3'])
    }, [])

    useEffect

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
        const x = answer.split('')
    }

    const generateBugtong = () => {
        let bugtong = BugtongWordBank.easy[Math.floor(Math.random() * BugtongWordBank.easy.length)]        
        setAnswer(bugtong.answer)
        setQuestion(bugtong.question)
        setPictures(bugtong.pictures)
        setCover(BugtongWordBank.cover)
        setBack(BugtongWordBank.back)
        //console.log(bugtong)
    }

    const openDisplayBook = () => {
        setDisplayBook(true)
    }

    const closeDisplayBook = () => {
        setDisplayBook(false)
    }

    const useItem1 = () => {
        // Health Plus
        if (item1 >= 1) {
            addLife()
            let updatedItemQuantity = item1 - 1
            setItem1(prevItemQuantity => prevItemQuantity - 1 )
            let items = JSON.parse(localStorage.getItem('items'))
            let updatedItems = {...items, item1: updatedItemQuantity}
            localStorage.setItem('items', JSON.stringify(updatedItems))
        }
    }

    const useItem2 = () => {
        // Time Shield
        if (item2 >= 1 && timeIsPlaying === true) {
            stopTime()
            let updatedItemQuantity = item2 - 1
            setItem2(prevItemQuantity => prevItemQuantity - 1 )
            let items = JSON.parse(localStorage.getItem('items'))
            let updatedItems = {...items, item2: updatedItemQuantity}
            localStorage.setItem('items', JSON.stringify(updatedItems))
        }
    }

    const useItem3 = () => {
        // Magnifying Glass
        if (item3 >= 1) {
            
            let updatedItemQuantity = item3 - 1
            setItem3(prevItemQuantity => prevItemQuantity - 1 )
            let items = JSON.parse(localStorage.getItem('items'))
            let updatedItems = {...items, item3: updatedItemQuantity}
            localStorage.setItem('items', JSON.stringify(updatedItems))
        }
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
        <Suspense fallback={<div className='modal'></div>}>
            <div className='adventure_game center'>
            <UtilityDisplay timeIsPlaying={timeIsPlaying} lives={lives} exitLevel={exitLevel} levelIsNotSolved={levelIsNotSolved} handlePuzzleEnded={handlePuzzleEnded}/>
            <AnswerDisplay answer={answer} correctLetters={correctLetters} />
            <BookDisplay pictures={pictures} cover={cover} back={back} displayBook={displayBook} openDisplayBook={openDisplayBook} closeDisplayBook={closeDisplayBook} />
            <QuestionDisplay question={question} />
            <ItemsDisplay item1={item1} item2={item2} item3={item3} useItem1={useItem1} useItem2={useItem2} useItem3={useItem3} />
            <LettersDisplay subtractLife={subtractLife} answer={answer} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} wrongLetters={wrongLetters} setWrongLetters={setWrongLetters} levelIsSolved={levelIsSolved} levelIsNotSolved={levelIsNotSolved} /> 
            {puzzleEnded && <PostGameMenu  answer={answer} levelSolved={levelSolved} exitLevel={exitLevel} handlePuzzleEnded={handlePuzzleEnded} levelEnded={levelEnded}/>}
        </ div>
        </Suspense>
        
    )
}

export default AdventureGame