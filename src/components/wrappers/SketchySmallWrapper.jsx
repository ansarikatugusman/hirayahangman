import Close from '../../assets/images/icons/close.png'

import './SketchySmallWrapper.css'

const SketchySmallWrapper = ({ children, showCloseButton, onCloseHandler }) => {
    return (
        <div className='sketchy_small-container modal'>
            <div className='sketchy_small center'>
                {showCloseButton && <img className='close_button_sketchy_short icon' src={Close} onClick={onCloseHandler} />}
                {children}
            </div>
            <div className='sketchy_small-back'></div>
        </div>
    )
}

export default SketchySmallWrapper