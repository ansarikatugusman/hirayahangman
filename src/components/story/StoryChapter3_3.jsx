import Dialogue from '../../utils/Dialogue'

const StoryChapter3_3 = () => {

    const onDialogueFinish = () => {
        
    }

    const dialogue = [
        {
            text: `I can feel the meaning behind each line—it’s more than just translation.`,
            character: 'maku-atag',
        },
        {
            text: `Yes. Understanding comes from reflection, not hints. You are learning as the wise once did.`,
            textShadow: '0 0 0.2em #87F, 0 0 0.2em #87F,0 0 0.2em #87F'
        },
    ]

    return (
        <Dialogue dialogue={dialogue} onDialogueFinish={onDialogueFinish} />
    )
}

export default StoryChapter3_3