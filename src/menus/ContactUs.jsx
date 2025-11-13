import SketchySmallWrapper from '../components/wrappers/SketchySmallWrapper'
import Mail from '../assets/images/icons/mail.svg'

import './ContactUs.css'

const ContactUs = ({ closeContactUsMenu }) => {
    return (
        <SketchySmallWrapper showCloseButton={true} onCloseHandler={closeContactUsMenu}>
            <div className='contact_us_header-wrapper ohpw center'>
                <div className='contact_us_header'>
                    We'd love to hear from you.
                </div>
                <div className='contact_us_email-wrapper ohpw center'>
                    <img className='contact_us_email_icon' src={Mail} draggable='false' />
                    <p className='contact_us_email'>hiyasngsalita@gmail.com</p>
                </div>
            </div>
            <div className='contact_us_emails center'>
                <p>mercuriojhonlirry1@gmail.com</p>
                <p>shanrecana16@gmail.com</p>
                <p>jesunrodrigo70@gmail.com</p>
                <p>ansarikatugusman@gmail.com</p>
            </div>
        </SketchySmallWrapper>
    )
}

export default ContactUs