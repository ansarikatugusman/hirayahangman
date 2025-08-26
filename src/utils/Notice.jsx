import { useState, useEffect } from 'react'
import './Notice.css'

const Notice = () => {
    const [visible, setVisible] = useState(false)

    useEffect(()=>{
          let pop_status = localStorage.getItem('pop_status');
          if(!pop_status){
            setVisible(true);
            localStorage.setItem('pop_status', 1);
          }
        },[])
        if(!visible) return null;

    return (
        <div className='notice-container' style={{ display: open ? 'block' : 'none'}}>
            <div className="notice">
            <   h2>Hiraya Hangman Pilot Testing</h2>
                <br/><br/>
                <p>Thanks for visiting Hiraya Hangman. We're currently in pilot testing, and we're excited to have you try things out. Features like in-game items, in-game currency, achievements, leaderboards, shops, and more will be implemented in the following months.</p>
                <br/><br/>
                <p>Your feedback helps us make this better, so feel free to look around and let us know what you think!</p>
                <br/><br/>
                <p>Kindly submit your feedback through our <a href="https://docs.google.com/forms/d/e/1FAIpQLSdqlaKw-gRxicIyZRMBu7acImsQlLP4xNj3phyBm5Sgadbs4w/viewform">Google Form</a> </p>

                <button onClick={() => {
                    setVisible(false)
                }}>
                    CLOSE
                </button>
            </div>
        </div>
        
    )
}

export default Notice