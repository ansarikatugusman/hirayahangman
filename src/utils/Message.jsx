import SketchySmallWrapper from '../components/wrappers/SketchySmallWrapper'

import './Message.css'

const Message = ({ closeMessage }) => {
    return (
        <SketchySmallWrapper showCloseButton={true} onCloseHandler={closeMessage}>
            <div className='message_header center'>
                MAINTENANCE
            </div>
            <div>
                The game is currently under maintenance until October 15, 2025.
            </div>
        </SketchySmallWrapper>
    )
}

export default Message