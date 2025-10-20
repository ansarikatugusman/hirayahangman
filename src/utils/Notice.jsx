import { useState, useEffect } from 'react'
import Dialogue from './Dialogue'


import './Notice.css'

const Notice = ({ setNoticeRead }) => {
    const [visible, setVisible] = useState(false)
    const message = [
        {
            text: `Thank you for visiting Hiyas ng Salita. We're currently testing our web app, and we're excited to have you try things out.`,
            emotion: 'excited',
            character: 'maku-atag',
        },
        {
            text: `More contents will be implemented in the following weeks. Your feedback helps us make this website better, so feel free to look around and let us know what you think!`,
            emotion: 'smiling',
            character: 'maku-atag',
        }
    ]

    useEffect(()=>{
            let pop1_status = localStorage.getItem('pop1_status');
            if(!pop1_status){
                setVisible(true);
                localStorage.setItem('pop1_status', 2);
            }
            localStorage.removeItem('pop2_status')
        },[])

        if(!visible) return null;

    return (
        <Dialogue dialogue={message} />  
    )
}

export default Notice