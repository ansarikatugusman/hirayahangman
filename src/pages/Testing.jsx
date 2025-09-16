import './Testing.css'
import '../components/buttons/SketchedButton.css'
import Hiraya from '../assets/images/hiraya.png'

const Testing = () => {
    return (
        <div className='dialogue-container modal'>
            <div className='dialouge_character-wrapper ohph'>
                <img className='dialouge_character' src={Hiraya} />
            </div>
            <div className='dialouge_text-wrapper' style={{ display: 'none' }}>
                <div className='dialouge_text'>
                    <p>
                        Thank you for visiting Hiraya Hangman. We're currently in pilot testing, and we're excited to have you try things out. More feautures will be implemented in the following month. Your feedback helps us make this website better, so feel free to look around and let us know what you think!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Testing