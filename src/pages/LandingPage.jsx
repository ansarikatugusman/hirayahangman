import { useNavigate } from 'react-router'
import SignIn from '../components/landingpage/SignIn'
import logo from '/hirayahangman-white_outline.svg'
import SketchedButton from '../components/buttons/SketchedButton'

import './LandingPage.css'

const LandingPage = () => {
    const navigate = useNavigate()

    const onRegisterClick = () => {
        navigate('/register')
    }

    const onLoginClick = () => {
        navigate('/login')
    }

    return (
        <div className='landing_page-container ohpv center'>
            <div className='landing_page_content-container ohpw center'>
                <div className='landing_page_image-wrapper ohpw center'>
                    <img className='image_logo scale' src={logo} alt='logo' />
                </div>  
                <SignIn />
            </div>
        </div>
    )
}

export default LandingPage