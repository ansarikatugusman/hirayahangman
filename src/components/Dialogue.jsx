import { useState, useEffect } from 'react'
import Hiraya from '../assets/images/hiraya.png'

import './Dialogue.css'

const Dialogue = ({ dialogue }) => {
    const [visible, setVisible] = useState(true)
    const [dialoguePage, setDialoguePage] = useState(0)
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < dialogue[dialoguePage].length) {
            const timeout = setTimeout(() => {
            setCurrentText(prevText => prevText + dialogue[dialoguePage][currentIndex]);
            setCurrentIndex(prevIndex => prevIndex + 1);
        }, 20);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, dialoguePage]);

    const onClickHandler = () => {
        if (dialogue.length - 1 === dialoguePage) {
            setVisible(false)
        } else {
            setDialoguePage((prevPage) => prevPage + 1)
            setCurrentText('')
            setCurrentIndex(0)
        }
    }

    return (
        <div className='dialogue-container modal center' style={{ display: visible ? 'flex' : 'none' }} onClick={onClickHandler} >
            <div className='dialogue_character-wrapper ohph'>
                <img className='dialogue_character' src={Hiraya} />
            </div>
            <div className='dialogue_text-wrapper ohpw center' >
                <div className='dialogue_text ohpw center'>
                    <p className='dialogue_text-p'>
                        {currentText}
                    </p>
                </div>
                <div className='dialogue_continue ohpw center'>
                    <p>
                        Click anywhere to continue
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Dialogue