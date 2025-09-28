import { useState, useEffect } from 'react'
import Hiraya from '../assets/images/hiraya.png'

import './Testing.css'

const Testing = ({ dialouge }) => {
    const [visible, setVisible] = useState(true)
    const [dialougePage, setDialougePage] = useState(0)
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    const x = [
        `Thank you for visiting Hiraya Hangman. We're currently in pilot testing, and we're excited to have you try things out.`,
        `More feautures will be implemented in the following month. Your feedback helps us make this website better, so feel free to look around and let us know what you think!`
    ]

    useEffect(() => {
        if (currentIndex < x[dialougePage].length) {
            const timeout = setTimeout(() => {
            setCurrentText(prevText => prevText + x[dialougePage][currentIndex]);
            setCurrentIndex(prevIndex => prevIndex + 1);
        }, 20);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, dialougePage]);

    const onClickHandler = () => {
        if (x.length - 1 === dialougePage) {
            setVisible(false)
        } else {
            setDialougePage((prevPage) => prevPage + 1)
            setCurrentText('')
            setCurrentIndex(0)
        }
    }

    return (
        <div className='dialogue-container modal center' style={{ display: visible ? 'flex' : 'none' }} onClick={onClickHandler} >
            
        </div>
    )
}

export default Testing