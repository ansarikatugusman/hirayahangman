import Dialogue from '../../utils/Dialogue'

const StoryChapter3_1 = () => {

    const onDialogueFinish = () => {
        
    }

    const dialogue = [
        {
            text: `The Hint Books… they’re gone!`,
            character: 'maku-atag',
            emotion: 'sad'
        },
        {
            text: `The wisdom here is fading. The Hint Books once guided seekers, but time has taken their strength. Now, you must rely on understanding, not guidance.`,
            textShadow: '0 0 0.2em #87F, 0 0 0.2em #87F,0 0 0.2em #87F'
        },
    ]

    return (
        <Dialogue dialogue={dialogue} onDialogueFinish={onDialogueFinish} />
    )
}

export default StoryChapter3_1