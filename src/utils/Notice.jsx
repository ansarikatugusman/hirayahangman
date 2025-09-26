import { useState, useEffect } from 'react'
import Dialogue from '../components/Dialogue'


import './Notice.css'

const Notice = ({ setNoticeRead }) => {
    const [visible, setVisible] = useState(false)
    const message = [
        `Thank you for visiting Hiraya Hangman. We're currently in pilot testing, and we're excited to have you try things out.`,
        `More features will be implemented in the following month. Your feedback helps us make this website better, so feel free to look around and let us know what you think!`
    ]

    useEffect(()=>{
            let pop2_status = localStorage.getItem('pop2_status');
            if(!pop2_status){
                setVisible(true);
                localStorage.setItem('pop2_status', 2);
            }
            localStorage.removeItem('pop_status')
            localStorage.removeItem('pop1_status')
        },[])

        if(!visible) return null;

    return (
        <Dialogue dialogue={message} />  
    )
}

export default Notice