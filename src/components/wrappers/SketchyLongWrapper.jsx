import Close from '../../assets/images/icons/close.png'

import './SketchyLongWrapper.css'

const SketchyLongWrapper = ({ children, onCloseHandler }) => {
    return (
        <div className='sketchy_long-container modal'>
            <div className='sketchy_long center'>
                <img className='close_button_sketchy_long icon' src={Close} onClick={onCloseHandler} />
                {children}
            </div>
            <div className='sketchy_long-back'></div>
        </div>
    )
}

export default SketchyLongWrapper