import { useState, useEffect, use } from 'react'
import AnswerDisplay from '../components/game/AnswerDisplay'
import QuestionDisplay from '../components/game/QuestionDisplay'
import LetterButton from '../components/game/LetterButton'
import PostGameMenu from '../components/game/PostGameMenu'
import BookDisplay from '../components/game/BookDisplay'

import './SinglePlayerGame.css'

const SinglePlayerGame = () => {
    const [answer, setAnswer] = useState('AHAS')
    const [question, setQuestion] = useState('Bastong hindi mahawakan, sinturong walang mapaggamit-gamitan.')
    const [correctLetters, setCorrectLetters] = useState([])
    const [wrongLetters, setWrongLetters] = useState([])
    const [gameFinished, setGameFinished] = useState(false)

    const reset = () => {
        setCorrectLetters([])
        setWrongLetters([])
        setGameFinished(true)
    }

    useEffect(() => {
        if (correctLetters.length && answer.split('').every(letter => correctLetters.includes(letter))) reset()
        if (wrongLetters.length === 3) reset()
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
    }, [correctLetters, wrongLetters]);

    return (
        <div className='single_player_game center ohvp'>
            <AnswerDisplay answer={answer} correctLetters={correctLetters} />
            <BookDisplay />
            <QuestionDisplay question={question} />
            <LetterButton answer={answer} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} wrongLetters={wrongLetters} setWrongLetters={setWrongLetters} /> 
            {gameFinished && <PostGameMenu answer={answer} setGameFinished={setGameFinished} />}
        </ div>
    )
}

export default SinglePlayerGame