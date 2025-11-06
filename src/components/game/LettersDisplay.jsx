import { useState } from 'react'
import Tutorial1 from '../tutorials/Tutorial1'
import PointDown from '../../assets/images/icons/point_down.svg'
import Microphone from '../../assets/images/icons/microphone.svg'

import './LettersDisplay.css'

const alphabets = 'ABKDEGHILMNOPRSTUWY'

const LettersDisplay = ({ tutorial1, setCompletedTutorial, tutorial1Active, setTutorial1Active, subtractLife, answer, correctLetters, setCorrectLetters, wrongLetters, setWrongLetters, levelIsSolved, levelIsNotSolved }) => {
    const [microphoneActive, setMicrophoneActive] = useState (false)

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()

    const handleGuessLetter = (letter) => {
        if (answer.includes(letter) && !correctLetters.includes(letter)) {
            setCorrectLetters( correctLetters => [...correctLetters, letter] )
            levelIsSolved()
        } else if (!answer.includes(letter) && !wrongLetters.includes(letter)) {
            setWrongLetters( wrongLetters => [...wrongLetters, letter] )
            levelIsNotSolved()
            if (tutorial1) {
                subtractLife()
            }
        }
    }

    const handleGuessSpan = (e) => {
        if (answer.includes(e.target.id) && !correctLetters.includes(e.target.id)) {
            setCorrectLetters( correctLetters => [...correctLetters, e.target.id] )
            levelIsSolved()
        } else if (!answer.includes(e.target.id) && !wrongLetters.includes(e.target.id)) {
            setWrongLetters( wrongLetters => [...wrongLetters, e.target.id] )
            levelIsNotSolved()
            if (tutorial1) {
                subtractLife()
            }
        }
    }

    const handleGuessButton = (e) => {
        if (answer.includes(e.target.value) && !correctLetters.includes(e.target.value)) {
            setCorrectLetters( correctLetters => [...correctLetters, e.target.value] )
            levelIsSolved()
        } else if (!answer.includes(e.target.value) && !wrongLetters.includes(e.target.value)) {
            setWrongLetters( wrongLetters => [...wrongLetters, e.target.value] )
            levelIsNotSolved()
            if (tutorial1) {
                subtractLife()
            }
        }
    }

    const handleGuessVoiceSpeech = (transcript) => {
        const trancriptLetters = transcript.toUpperCase().split('')

        trancriptLetters.forEach(letter => {
            handleGuessLetter(letter)
        })
    }

    const handleGuess = (e) => {
        if (e.target.id) {
            handleGuessSpan(e)
        } else if (e.target.value) {
            handleGuessButton(e)
        }
    }

    const handleOnRecord = () => {
        setMicrophoneActive(!microphoneActive)

        if (microphoneActive) {
            recognition.abort()
        } else {
            recognition.start()
        }

        recognition.onresult = async(e) => {
            handleGuessVoiceSpeech(e.results[0][0].transcript)
            setMicrophoneActive(false)
            recognition.abort()
        }

        setTimeout(() => {
            setMicrophoneActive(false)
        }, 5000)
    }
    
    return (
        <div className='letters_display-container center' style={{ zIndex: tutorial1Active && '21' }}>
            {tutorial1Active && <Tutorial1 setTutorial1Active={setTutorial1Active} setCompletedTutorial={setCompletedTutorial} />}
            
            {alphabets.split('').map( letter => (
                <div 
                    className='letters_display-wrapper center' 
                    key={letter} 
                    onClick={handleGuess} 
                    style={{ zIndex: tutorial1Active && '20' }}
                >
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

            <div 
                className='microphone_button center' 
                onClick={handleOnRecord} 
                style={{ zIndex: tutorial1Active && '20' }}
            >
                <button className='microphone-wrapper center'>
                    <span className='center' style={{ background: microphoneActive ? '#00c763' : '#ff3636' }}>
                        <div className='microphone_icon-wrapper center'>
                            <img className='microphone_icon' src={Microphone} />
                        </div>
                        
                        <p className='microphone_indicator'>{microphoneActive ? 'ON' : 'OFF'}</p>
                    </span>
                </button>
            </div>

            {tutorial1Active && 
                <div className='tutorial1_hand'>
                    <img className='tutorial1_hand_icon' src={PointDown} />
                </div>
            }

            {tutorial1Active && <div className='letters_display_cover ohp'></div>}
        </div>
    )
}

export default LettersDisplay