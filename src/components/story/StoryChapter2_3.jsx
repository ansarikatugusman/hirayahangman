import Dialogue from '../../utils/Dialogue'

const StoryChapter2_3 = () => {

    const onDialogueFinish = () => {
        
    }

    const dialogue = [
        {
            text: `I think I’m beginning to see how each idiom reflects life and character.`,
            character: 'maku-atag',
        },
        {
            text: `Good! Wit is wisdom wrapped in laughter—unravel it and the truth will shine.`,
            textShadow: '0 0 0.2em #8F7'
        },
    ]

    return (
        <Dialogue dialogue={dialogue} onDialogueFinish={onDialogueFinish} />
    )
}

export default StoryChapter2_3