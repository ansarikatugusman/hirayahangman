import Dialogue from '../../utils/Dialogue'

const Tutorial3 = ({ setTutorial3Active, setCompletedTutorial }) => {

    const onDialogueFinish = () => {
        setTutorial3Active(false)
        setCompletedTutorial('tutorial3')
    }

    const dialogue = [
        {
            text: `You are given enough time each game to have time to think about your answer. You can see how much time is left at the top display.`,
        },
        {
            text: `The game ends when the timer reaches zero. The timer you start with can be increased to last longer through upgrades in the shop.`,
        },
    ]

    return (
        <Dialogue minimized={true} dialogue={dialogue} onDialogueFinish={onDialogueFinish} />
    )
}

export default Tutorial3