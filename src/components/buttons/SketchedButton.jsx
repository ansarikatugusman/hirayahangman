import './SketchedButton.css'

const SketchedButton = ({ text, width, fontsize, scale, scale_after, onClickHandler }) => {
    return (
            <button
                className={`sketch_button ${scale ? 'scale' : '' } ${scale_after ? 'scale_after' : '' }`}
                style={{width: width, fontSize: fontsize}}
                onClick={() => onClickHandler && onClickHandler()}
            >
                <span className='sketch_button_span'>{text}</span>
            </button>
    )
}

export default SketchedButton