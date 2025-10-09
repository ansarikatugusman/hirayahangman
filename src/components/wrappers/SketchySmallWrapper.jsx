import './SketchySmallWrapper.css'

const SketchySmallWrapper = ({ children }) => {
    return (
        <div className='sketchy_small-container modal'>
            <div className='sketchy_small center'>
                {children}
            </div>
            <div className='sketchy_small-back'></div>
        </div>
    )
}

export default SketchySmallWrapper