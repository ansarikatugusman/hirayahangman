import './AnswerDisplay.css'

// Display the letter if the guess is correct.
const AnswerDisplay = ({ answer, correctLetters }) => {
    

    /*
    {answer.split('').map( ( letter, index ) => {
                    return (
                        <span className="answer_display" key={index} style={{ borderBottomWidth: letter == ' ' ? '0px' : '2.5px' }}>
                            {correctLetters.includes(letter) ? letter : ''}
                        </span> 
                    )
                })}
    */

    return (
        <div className='answer_display-container center'>
            <div className='answer_display-wrapper center'>
                {answer.split(' ').map( ( words, index ) => {
                    return (
                        <div className='center' key={index}>
                            <div className='word-container center' key={index}> 
                                {words.split('').map((letter, index) => {
                                    return (
                                        <div className="letter_display" key={index} >
                                            {correctLetters.includes(letter) ? letter : '_'}
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='word_space'>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default AnswerDisplay