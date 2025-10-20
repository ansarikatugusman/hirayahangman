import { useNavigate } from 'react-router'
import Dialogue from '../../utils/Dialogue'

const StoryEnd = ({ handleStoryFinished }) => {

    const navigate = useNavigate()

    const onDialogueFinish = () => {
        handleStoryFinished()
        navigate('/')
    }

    const dialogue = [
        {
            text: `Bugtong, Sawikain, Salawikain—revived at last. Their light restores the heart of the library, ensuring that Filipino wisdom endures for generations.`,
            fontFamily: 'italic'
        },
        {
            text: `The knowledge of our ancestors will never fade again. Their words live within us, guiding every soul that seeks wisdom.`,
            character: 'maku-atag',
            emotion: 'book_glowing'
        },
        {
            text: 'Guardian, your journey ends, but your duty continues. Pass on what you’ve learned—for knowledge shared is heritage preserved.'
        }
    ]

    return (
        <Dialogue dialogue={dialogue} onDialogueFinish={onDialogueFinish} />
    )
}

export default StoryEnd