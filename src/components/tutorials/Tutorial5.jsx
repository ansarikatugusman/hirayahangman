import Dialogue from "../../utils/Dialogue";

const Tutorial5 = ({ setTutorial5Active, setCompletedTutorial }) => {

    const onDialogueFinish = () => {
        setTutorial5Active(false)
        setCompletedTutorial('tutorial5')
    }

    const dialogue = [
        {
            text: `These are your items. Using them can help you greatly. There are items that adds 1 life, removes wrong letters, and many more.`,
        },
        {
            text: `Click an item to use it. You can buy and learn more about items in the shop. You can also go to your profile to see how many items are in your inventory.`,
        },
    ]

    return (
        <Dialogue minimized={true} top={true} dialogue={dialogue} onDialogueFinish={onDialogueFinish} />
    )
}

export default Tutorial5