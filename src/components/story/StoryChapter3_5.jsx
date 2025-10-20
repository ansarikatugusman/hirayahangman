import Dialogue from '../../utils/Dialogue'

const StoryChapter3_5 = ({ setActive }) => {

    const onDialogueFinish = () => {
        setActive(null)
    }

    const dialogue = [
        {
            text: `The Book of Salawikain radiates with golden light. The clouds part, revealing the brilliance of eternal wisdom.`,
            fontFamily: 'italic'
        },
        {
            text: `The final light… it’s restored. The library will live on!`,
            character: 'maku-atag',
            emotion: 'excited'
        },
    ]

    return (
        <Dialogue dialogue={dialogue} onDialogueFinish={onDialogueFinish} />
    )
}

export default StoryChapter3_5