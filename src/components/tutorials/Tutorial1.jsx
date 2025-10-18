import Dialogue from "../../utils/Dialogue";

const Tutorial1 = ({ setTutorial1Active, setCompletedTutorial }) => {

    const onDialogueFinish = () => {
        setTutorial1Active(false)
        setCompletedTutorial('tutorial1')
    }

    const dialogue = [
        {
            text: `The objective is to guess the word or phrase by guessing one letter at a time. You can guess by clicking a letter below or typing a letter using a keyboard.`,
        },
        {
            text: `You can also guess the answer by speaking through your device's microphone. Click the microphone icon to turn it on or off.`,
        },
        {
            text: `There will be a clue in a form of a sentence or phrase to help you in guessing. Good luck!`,
        },
    ]

    return (
        <Dialogue minimized={true} top={true} dialogue={dialogue} onDialogueFinish={onDialogueFinish} />
    )
}

export default Tutorial1