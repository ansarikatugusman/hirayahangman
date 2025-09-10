import './Testing.css'
import '../components/buttons/SketchedButton.css'

const Testing = () => {
    return (
        <button
                className={`sketch_button`}
                style={{width: '200px'}}

            >
                <span className='sketch_button_span' id='1456' onClick={(e) => {
                    console.log(e.target.id)
                }}>HELLO WORLD</span>
            </button>
    )
}

export default Testing