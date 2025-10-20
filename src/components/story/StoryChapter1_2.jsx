import Dialogue from '../../utils/Dialogue'

const StoryChapter1_2 = () => {

    const onDialogueFinish = () => {

    }

    const dialogue = [
        {
            text: `These riddles… they remind me of Lola’s stories.`,
            character: 'maku-atag',
            emotion: 'confused'
        },
        {
            text: `Riddles are not just games—they reflect the soul of everyday life.`,
            textShadow: '0 0 0.2rem #F87, 0 0 0.2rem #F87'
        },
    ]

    return (
        <Dialogue dialogue={dialogue} onDialogueFinish={onDialogueFinish} />
    )
}

export default StoryChapter1_2