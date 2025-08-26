import { useState, useEffect, use } from 'react'
import AnswerDisplay from '../components/game/AnswerDisplay'
import QuestionDisplay from '../components/game/QuestionDisplay'
import LetterButton from '../components/game/LetterButton'
import PostGameMenu from '../components/game/PostGameMenu'
import BookDisplay from '../components/game/BookDisplay'

import BugtongWordBank from '../utils/BugtongWordBank'

import './AdventureGame.css'

const AdventureGame = ({ style, name, handleActivePortal, handleEnteredPortal, handleLevelSolved }) => {
    const [answer, setAnswer] = useState('')
    const [question, setQuestion] = useState('')
    const [pictures, setPictures] = useState([])
    const [cover, setCover] = useState('')
    const [back, setBack] = useState('')
    const [correctLetters, setCorrectLetters] = useState([])
    const [wrongLetters, setWrongLetters] = useState([])
    const [stageWon, setStageWon] = useState(false)
    const [gameFinished, setGameFinished] = useState(false)

    const generateBugtong = () => {
        let bugtong = BugtongWordBank.easy[Math.floor(Math.random() * BugtongWordBank.easy.length)]        
        setAnswer(bugtong.answer)
        setQuestion(bugtong.question)
        setPictures(bugtong.pictures)
        setCover(BugtongWordBank.cover)
        setBack(BugtongWordBank.back)
        console.log(bugtong)
    }

    const reset = () => {
        setCorrectLetters([])
        setWrongLetters([])
        setStageWon(false)
        setGameFinished(true)
    }

    useEffect(generateBugtong, [])

    useEffect(() => {
        if (correctLetters.length && answer.split('').every(letter => correctLetters.includes(letter))) {
            handleLevelSolved()
            reset()
        }
        if (wrongLetters.length === 5) reset()
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
        <div className='adventure_game center' style={style}>
            <AnswerDisplay answer={answer} correctLetters={correctLetters} />
            <BookDisplay pictures={pictures} cover={cover} back={back} />
            <QuestionDisplay question={question} />
            <LetterButton answer={answer} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} wrongLetters={wrongLetters} setWrongLetters={setWrongLetters} /> 
            {gameFinished && <PostGameMenu  answer={answer} name={name} handleActivePortal={handleActivePortal} handleEnteredPortal={handleEnteredPortal} reset={reset}/>}
        </ div>
    )
}

export default AdventureGame