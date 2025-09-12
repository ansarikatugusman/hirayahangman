import './LettersDisplay.css'

const alphabets = 'ABKDEGHILMNOPRSTUWY'

const LettersDisplay = ({ subtractLife, answer, correctLetters, setCorrectLetters, wrongLetters, setWrongLetters, levelIsSolved, levelIsNotSolved }) => {

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
        </div>
    )
}

export default LettersDisplay