import Dialogue from '../../utils/Dialogue'

const StoryChapter2_1 = ({ setStoryChapter2_1 }) => {

    const onDialogueFinish = () => {
    }

    const dialogue = [
        {
            text: `Welcome to the realm of wit and wisdom! Here, idioms live and twist meaning in playful ways. To restore this book, you must read beyond what’s written.`,
            textShadow: '0 0 0.2em #8F7'
        },
    ]

    return (
        <Dialogue dialogue={dialogue} onDialogueFinish={onDialogueFinish} />
    )
}

export default StoryChapter2_1