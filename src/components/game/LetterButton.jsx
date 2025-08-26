import './LetterButton.css'

const alphabets = 'ABKDEGHILMNÑOPRSTUWY'

// Make a button for each letter.
const LetterButton = ({ answer, correctLetters, setCorrectLetters, wrongLetters, setWrongLetters }) => {

    const handleGuess = (e) => {
        if (answer.includes(e.target.value)) {
            setCorrectLetters( correctLetters => [...correctLetters, e.target.value] )
            console.log(e.target.value)
        } else {
            setWrongLetters( wrongLetters => [...wrongLetters, e.target.value] )
            console.log(e.target.value)
        }
    }
    
    return (
        <div className='letter_button-container center'>
            {alphabets.split('').map( letter => (
                <button 
                    className='letter_button'
                    key={letter}
                    value={letter}
                    onClick={handleGuess}
                    disabled={correctLetters.includes(letter) || wrongLetters.includes(letter)}
                >
                    {letter}
                </button>
            ))}
        </div>
    )
}

export default LetterButton