import { useState, useEffect } from 'react'
import Hiraya from '../assets/images/hiraya.png'

import './Dialogue.css'

const Dialogue = ({ dialouge }) => {
    const [visible, setVisible] = useState(true)
    const [dialougePage, setDialougePage] = useState(0)
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < dialouge[dialougePage].length) {
            const timeout = setTimeout(() => {
            setCurrentText(prevText => prevText + dialouge[dialougePage][currentIndex]);
            setCurrentIndex(prevIndex => prevIndex + 1);
        }, 20);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, dialougePage]);

    const onClickHandler = () => {
        if (dialouge.length - 1 === dialougePage) {
            setVisible(false)
        } else {
            setDialougePage((prevPage) => prevPage + 1)
            setCurrentText('')
            setCurrentIndex(0)
        }
    }

    return (
        <div className='dialogue-container modal center' style={{ display: visible ? 'flex' : 'none' }} onClick={onClickHandler} >
            <div className='dialouge_character-wrapper ohph'>
                <img className='dialouge_character' src={Hiraya} />
            </div>
            <div className='dialouge_text-wrapper ohpw center' >
                <div className='dialouge_text ohpw center'>
                    <p className='dialouge_text-p'>
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