import './AnswerDisplay.css'

// Display the letter if the guess is correct.
const AnswerDisplay = ({ answer, correctLetters }) => {
    
    return (

            <div className='answer_display-container center'>
                <div id="parchment"></div>
                <div id="contain"></div>
                <div className='answer_display-wrapper center'>
                    {answer.split('').map( ( letter, index ) => {
                    return (
                        <span className="answer_display" key={index}>
                            {correctLetters.includes(letter) ? letter : ''}
                        </span> 
                    )
                })}
                </div>
                <svg>
                <filter id="wavy2">
                <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="1" />
                <feDisplacementMap in="SourceGraphic" scale="20" />
                </filter>
            </svg>
            </div>

    )
}

export default AnswerDisplay