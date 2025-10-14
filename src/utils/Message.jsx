import SketchySmallWrapper from '../components/wrappers/SketchySmallWrapper'

import './Message.css'

const Message = ({ closeMessage }) => {
    return (
        <SketchySmallWrapper showCloseButton={true} onCloseHandler={closeMessage}>
            <div className='message_header center'>
                MAINTENANCE
            </div>
            <div>
                Wala munang maglalaro. Salamat sa pag-intindi.
            </div>
        </SketchySmallWrapper>
    )
}

export default Message