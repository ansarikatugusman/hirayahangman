import './AnswerDisplay.css'

// Display the letter if the guess is correct.
const AnswerDisplay = ({ answer, correctLetters }) => {
    
    return (
        <div className='answer_display-container center'>
            {answer.split('').map( ( letter, index ) => {
                return (
                    <span className="answer_display" key={index}>
                        {correctLetters.includes(letter) ? letter : ''}
                    </span>
                )
            })}
        </div>
    )
}

export default AnswerDisplay