import { useState } from 'react'
import SketchedButton from '../buttons/SketchedButton'
import Microphone from '../../assets/images/icons/microphone.svg'

import './LettersDisplay.css'

const alphabets = 'ABKDEGHILMNOPRSTUWY'

const LettersDisplay = ({ subtractLife, answer, correctLetters, setCorrectLetters, wrongLetters, setWrongLetters, levelIsSolved, levelIsNotSolved }) => {

    const [microphoneActive, setMicrophoneActive] = useState (false)

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()

    const handleGuessSpan = (e) => {
        if (answer.includes(e.target.id) && !correctLetters.includes(e.target.id)) {
            setCorrectLetters( correctLetters => [...correctLetters, e.target.id] )
            levelIsSolved()
        } else if (!answer.includes(e.target.id) && !wrongLetters.includes(e.target.id)) {
            setWrongLetters( wrongLetters => [...wrongLetters, e.target.id] )
            levelIsNotSolved()
            subtractLife()
        }
    }

    const handleGuessButton = (e) => {
        if (answer.includes(e.target.value) && !correctLetters.includes(e.target.value)) {
            setCorrectLetters( correctLetters => [...correctLetters, e.target.value] )
            levelIsSolved()
        } else if (!answer.includes(e.target.value) && !wrongLetters.includes(e.target.value)) {
            setWrongLetters( wrongLetters => [...wrongLetters, e.target.value] )
            levelIsNotSolved()
            subtractLife()
        }
    }

    const handleGuess = (e) => {
        if (e.target.id) {
            handleGuessSpan(e)
        } else if (e.target.value) {
            handleGuessButton(e)
        }
        console.log(e.target.id)
        console.log(e.target.value)
        console.log(correctLetters)
        console.log(wrongLetters)
    }

    const handleOnRecord = () => {
        setMicrophoneActive(!microphoneActive)

        if (microphoneActive) {
            recognition.abort()
        } else {
            recognition.start()
        }

        recognition.onresult = async(e) => {
            const transcript = e.results[0][0].transcript
            console.log(transcript)
            recognition.abort()
            setMicrophoneActive(false)
        }
    }
    
    return (
        <div className='letters_display-container center'>
            {alphabets.split('').map( letter => (
                <div className='letters_display-wrapper center' key={letter} onClick={handleGuess}>
                    <button 
                        className='letter_button'
                        value={letter}
                        disabled={correctLetters.includes(letter) || wrongLetters.includes(letter)}
                    >
                        <span 
                            className={wrongLetters.includes(letter) ? 'span_disabled' : ''}
                            id={letter}
                        >
                            {letter}
                        </span>
                    </button>
                </div>    
            ))}

            <div className='microphone_button center' onClick={handleOnRecord}>
                <button className='microphone-wrapper center'>
                    <span className='center'>
                        <div className='microphone_icon-wrapper center'>
                            <img className='microphone_icon' src={Microphone} />
                        </div>
                        
                        <p className='microphone_indicator'>{microphoneActive ? 'ON' : 'OFF'}</p>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default LettersDisplay