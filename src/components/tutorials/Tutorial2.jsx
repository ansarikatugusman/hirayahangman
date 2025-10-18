import Dialogue from "../../utils/Dialogue";

const Tutorial2 = ({ setTutorial2Active, setCompletedTutorial }) => {

    const onDialogueFinish = () => {
        setTutorial2Active(false)
        setCompletedTutorial('tutorial2')
    }

    const dialogue = [
        {
            text: `You start with 3 lives every game so you have multiple chances to guess. You can see how many of your lives have left at the top display.`,
        },
        {
            text: `You cannot just guess a letter carelessly as your lives will be reduced by 1 for each wrong letter guessed.`,
        },
        {
            text: `The game ends when your lives reach zero. The number of lives you start with can be increased through upgrades in the shop.`,
        },
    ]

    return (
        <Dialogue minimized={true} dialogue={dialogue} onDialogueFinish={onDialogueFinish} />
    )
}

export default Tutorial2