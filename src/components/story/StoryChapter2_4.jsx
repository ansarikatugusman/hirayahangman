import Dialogue from '../../utils/Dialogue'

const StoryChapter2_4 = () => {

    const onDialogueFinish = () => {
        
    }

    const dialogue = [
        {
            text: `The more I solve, the clearer the words become. These phrases are more than clever words.`,
            character: 'maku-atag',
            emotion: 'smiling'
        },
        {
            text: `They are lessons disguised in jest. One more push, Guardian, and this library will glow again.`,
            textShadow: '0 0 0.2em #8F7'
        },
    ]

    return (
        <Dialogue dialogue={dialogue} onDialogueFinish={onDialogueFinish} />
    )
}

export default StoryChapter2_4