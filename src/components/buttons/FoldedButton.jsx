import './FoldedButton.css'

const FoldedButton = ({ text, width, height, fontsize, scale, scale_after }) => {
    return (
        <button className={`folded_button ${scale ? 'scale' : '' } ${scale_after ? 'scale_after' : '' }`}
                style={{width: width ? width : '250px', height: height ? height : '100px', fontSize: fontsize ? fontsize : '200%'}}
        >
            {text}
        </button>
    )
}

export default FoldedButton