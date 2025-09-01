import './LetterButton.css'

const alphabets = 'ABKDEGHILMNOPRSTUWY'

// Make a button for each letter.
const LetterButton = ({ answer, correctLetters, setCorrectLetters, wrongLetters, setWrongLetters }) => {

    const handleGuessSpan = (e) => {
        if (answer.includes(e.target.id) && !correctLetters.includes(e.target.id)) {
            setCorrectLetters( correctLetters => [...correctLetters, e.target.id] )
        } else if (!answer.includes(e.target.id) && !wrongLetters.includes(e.target.id)) {
            setWrongLetters( wrongLetters => [...wrongLetters, e.target.id] )
        }
    }

    const handleGuessButton = (e) => {
        if (answer.includes(e.target.value) && !correctLetters.includes(e.target.value)) {
            setCorrectLetters( correctLetters => [...correctLetters, e.target.value] )
            console.log(e.target.value)
            console.log(correctLetters)
        } else if (!answer.includes(e.target.value) && !wrongLetters.includes(e.target.value)) {
            setWrongLetters( wrongLetters => [...wrongLetters, e.target.value] )
        }
    }

    const handleGuess = (e) => {
        if (e.target.id) {
            handleGuessSpan(e)
        } else if (e.target.value) {
            handleGuessButton(e)
        }
    }
    
    return (
        <div className='letter_button-container center'>
            {alphabets.split('').map( letter => (
                <div className='letter_button-wrapper center' key={letter} onClick={handleGuess}>
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
        </div>
    )
}

export default LetterButton