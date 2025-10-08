import './FoldedButton.css'

const FoldedButton = ({ text, width, height, fontsize, scale, scale_after, active, onClickHandler }) => {
    return (
        <button
            className={`folded_button center ${scale ? 'scale' : '' } ${scale_after ? 'scale_after' : '' } ${active ? 'folded_button_active' : ''} `}
            style={{width: width ? width : '125px', height: height ? height : '75px', fontSize: fontsize ? fontsize : '1rem'}}
            onClick={() => onClickHandler && onClickHandler()}
        >
            {text}
        </button>
    )
}

export default FoldedButton