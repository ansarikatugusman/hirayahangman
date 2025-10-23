import './QuestionDisplay.css'

const QuestionDisplay = ({ question, sawikainPortalActive, salawikainPortalActive }) => {
    return (
        <div className='question_display-container center'>
            {sawikainPortalActive && <p className='question_guide'>Tuklasin ang sawikaing Pilipino na nangangahulugang:</p>}
            {salawikainPortalActive && <p className='question_guide'>Alamin ang salawikaing tinutukoy nitong pangungusap:</p>}
            <p className='question_display'>{question}</p>
        </div>
    )
}

export default QuestionDisplay