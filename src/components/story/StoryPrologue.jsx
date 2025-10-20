import Dialogue from '../../utils/Dialogue'

const StoryPrologue = ({ handleBugtongUnlocked }) => {

    const onDialogueFinish = () => {
        handleBugtongUnlocked()
    }

    const dialogue = [
        {
            text: `In the Aklatang Karunungan, six books preserve the wisdom of the nation. But three have lost their light—Bugtong, Sawikain, and Salawikain.`,
            fontFamily: 'italic'
        },
        {
            text: `Without them, our wisdom fades into silence...`,
            fontFamily: 'italic'
        },
        {
            text: `No… the books! They’re fading. If their light dies, the wisdom of our ancestors will vanish forever.`,
            character: 'maku-atag',
            emotion: 'sad'
        },
        {
            text: 'Guardian, the time has come. Enter each book, face their trials, and restore their glow before all knowledge fades into dust.'
        }
    ]

    return (
        <Dialogue dialogue={dialogue} onDialogueFinish={onDialogueFinish} />
    )
}

export default StoryPrologue