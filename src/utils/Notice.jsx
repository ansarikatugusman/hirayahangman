import { useState, useEffect } from 'react'
import Dialogue from './Dialogue'


import './Notice.css'

const Notice = () => {
    const [visible, setVisible] = useState(false)
    const message = [
        {
            text: `The pilot testing for Hiyas ng Salita ended in a success. Feedbacks from our testers helped maked this website better.`,
            emotion: 'excited',
            character: 'maku-atag',
        },
        {
            text: `More updates will be implemented in the following weeks. Feedbacks are still welcome and greatly appreciated. Thank you so much for visiting Hiyas ng Salita.`,
            emotion: 'smiling',
            character: 'maku-atag',
        },
    ]

    useEffect(()=>{
            let pop2_status = localStorage.getItem('pop2_status');
            if(!pop2_status){
                setVisible(true);
                localStorage.setItem('pop2_status', 2);
            }
            localStorage.removeItem('pop1_status')
        },[])

        if(!visible) return null;

    return (
        <Dialogue dialogue={message} />  
    )
}

export default Notice