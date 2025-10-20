import Dialogue from '../../utils/Dialogue'

const StoryChapter1_4 = ({ handleSawikainUnlocked, handleSawikainPortalActive, setActive }) => {

    const onDialogueFinish = () => {
        setActive('SAWIKAIN')
        handleSawikainPortalActive()
        handleSawikainUnlocked()
    }

    const dialogue = [
        {
            text: `The Book of Bugtong shines once more. Its forest breathes with new life.`,
            fontFamily: 'italic'
        },
        {
            text: `One light restored… two more to go."`,
            character: 'maku-atag',
            emotion: 'excited'
        },
    ]

    return (
        <Dialogue dialogue={dialogue} onDialogueFinish={onDialogueFinish} />
    )
}

export default StoryChapter1_4