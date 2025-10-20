import Dialogue from '../../utils/Dialogue'

const StoryChapter2_2 = () => {

    const onDialogueFinish = () => {
        
    }

    const dialogue = [
        {
            text: `These idioms are tricky! They sound familiar but feel deeper than they appear.`,
            character: 'maku-atag',
            emotion: 'confused'
        },
        {
            text: `Exactly! Sawikain speak through humor and hidden truth. Don’t take them too literally.`,
            textShadow: '0 0 0.2em #8F7'
        },
    ]

    return (
        <Dialogue dialogue={dialogue} onDialogueFinish={onDialogueFinish} />
    )
}

export default StoryChapter2_2