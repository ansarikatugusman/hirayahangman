import Dialogue from '../../utils/Dialogue'

const StoryChapter3_2 = () => {

    const onDialogueFinish = () => {
        
    }

    const dialogue = [
        {
            text: `These sayings feel like echoes from my grandparents’ voices.`,
            character: 'maku-atag',
            emotion: 'confused'
        },
        {
            text: `Every salawikain carries truth. They are the compass of our lives, hidden in simple words.`,
            textShadow: '0 0 0.2em #87F, 0 0 0.2em #87F,0 0 0.2em #87F'
        },
    ]

    return (
        <Dialogue dialogue={dialogue} onDialogueFinish={onDialogueFinish} />
    )
}

export default StoryChapter3_2