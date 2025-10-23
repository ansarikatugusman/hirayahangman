import './AnswerDisplay.css'

// Display the letter if the guess is correct.
const AnswerDisplay = ({ answer, correctLetters, bugtongPortalActive, sawikainPortalActive, salawikainPortalActive }) => {

    return (
        <div 
            className='answer_display-container center' 
            style={{ 
                fontSize: bugtongPortalActive ? '3rem'
                : sawikainPortalActive ? '2.25rem'
                : '1.5rem', 
            }}
        >
            <div className='answer_display-wrapper center'>
                {answer.split(' ').map( ( words, index ) => {
                    return (
                        <div className='word-container center' key={index}>
                            <div className='letter-wrapper ohph center' key={index} > 
                                {words.split('').map((letter, index) => {
                                    return (
                                        <div 
                                            className='letter_display ohph center' 
                                            key={index} 
                                            style={{
                                                width: bugtongPortalActive && letter==='I' ? '1.8rem'
                                                : bugtongPortalActive ? '1.8rem'
                                                : sawikainPortalActive && letter==='I' ? '1.35rem'
                                                : sawikainPortalActive ? '1.4rem'
                                                : salawikainPortalActive && letter==='I' ? '0.8rem'
                                                : salawikainPortalActive && '0.9rem'
                                            }}
                                        >
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