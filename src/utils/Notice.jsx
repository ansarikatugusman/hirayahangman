import { useState, useEffect } from 'react'
import Dialogue from './Dialogue'


import './Notice.css'

const Notice = ({ setNoticeRead }) => {
    const [visible, setVisible] = useState(false)
    const message = [
        {
            text: `Thank you for visiting Hiyas ng Salita. We're currently testing our web app, and we're excited to have you try things out.`,
            emotion: 'excited'
        },
        {
            text: `More contents will be implemented in the following weeks. Your feedback helps us make this website better, so feel free to look around and let us know what you think!`,
            emotion: 'smiling'
        }
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
        <Dialogue minimized={true} dialogue={message} />  
    )
}

export default Notice