import './QuestionDisplay.css'

const QuestionDisplay = ({ question }) => {
    return (
        <div className='question_display-container center'>
            <p className='question_display'>{question}</p>
        </div>
    )
}

export default QuestionDisplay