import Dialogue from '../../utils/Dialogue'

const Tutorial4 = ({ setTutorial4Active, setCompletedTutorial }) => {

    const onDialogueFinish = () => {
        setTutorial4Active(false)
        setCompletedTutorial('tutorial4')
    }

    const dialogue = [
        {
            text: `You can use the hint book for more clues. The hint book can be useful in finding out the answer.`,
        },
        {
            text: `Click the 'Hint Book' button to use the book. Click a page in order to flip it. The book can be moved and rotated to any direction.`,
        },
    ]

    return (
        <Dialogue minimized={true} dialogue={dialogue} onDialogueFinish={onDialogueFinish} />
    )
}

export default Tutorial4