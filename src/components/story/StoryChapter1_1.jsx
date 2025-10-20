import Dialogue from '../../utils/Dialogue'

const StoryChapter1_1 = () => {

    const onDialogueFinish = () => {
        
    }

    const dialogue = [
        {
            text: `Traveler, this forest whispers in riddles. Each puzzle holds a spark of wisdom. Solve them, and the Book of Bugtong will shine again.`,
            textShadow: '0 0 0.2rem #F87, 0 0 0.2rem #F87'
        },
    ]

    return (
        <Dialogue dialogue={dialogue} onDialogueFinish={onDialogueFinish} />
    )
}

export default StoryChapter1_1