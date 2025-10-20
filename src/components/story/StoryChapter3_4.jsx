import Dialogue from '../../utils/Dialogue'

const StoryChapter3_4 = () => {

    const onDialogueFinish = () => {
        
    }

    const dialogue = [
        {
            text: `The clouds glow brighter… I think I’m almost done.`,
            character: 'maku-atag',
            emotion: 'smiling'
        },
        {
            text: `You are close. Let your heart complete the final lessons, and the last light shall rise.`,
            textShadow: '0 0 0.2em #87F, 0 0 0.2em #87F,0 0 0.2em #87F'
        },
    ]

    return (
        <Dialogue dialogue={dialogue} onDialogueFinish={onDialogueFinish} />
    )
}

export default StoryChapter3_4