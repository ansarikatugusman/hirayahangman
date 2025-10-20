import Dialogue from '../../utils/Dialogue'

const StoryChapter2_5 = ({ handleSalawikainUnlocked, handleSalawikainPortalActive, setActive }) => {

    const onDialogueFinish = () => {
        setActive('SALAWIKAIN')
        handleSalawikainPortalActive()
        handleSalawikainUnlocked()
    }

    const dialogue = [
        {
            text: `The Book of Sawikain glows with golden brilliance. The once-silent library hums with laughter and wisdom once again.`,
            fontFamily: 'italic'
        },
        {
            text: `Two lights restored… one last challenge remains."`,
            character: 'maku-atag',
            emotion: 'pointing'
        },
    ]

    return (
        <Dialogue dialogue={dialogue} onDialogueFinish={onDialogueFinish} />
    )
}

export default StoryChapter2_5