import Dialogue from '../../utils/Dialogue'

const StoryChapter1_3 = () => {

    const onDialogueFinish = () => {

    }

    const dialogue = [
        {
            text: `The forest grows brighter with each answer.`,
            character: 'maku-atag',
            emotion: 'smiling'
        },
        {
            text: `You are awakening the knowledge long forgotten.`,
            textShadow: '0 0 0.2rem #F87, 0 0 0.2rem #F87'
        },
    ]

    return (
        <Dialogue dialogue={dialogue} onDialogueFinish={onDialogueFinish} />
    )
}

export default StoryChapter1_3