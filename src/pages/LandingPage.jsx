import { useNavigate } from 'react-router'
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
            <div className='sign_in-container ohpw center'>
                <div className='register_wrapper center' onClick={onRegisterClick} >
                    <SketchedButton text='Register' width='115px' scale_after={true} />
                </div>
                <div className='login_wrapper center' onClick={onLoginClick}>
                    <SketchedButton text='Login' width='115px' scale_after={true} />
                </div>
            </div>
            <div className='landing_page_content-container ohpw center'>
                <div className='landing_page_image-wrapper ohpw center'>
                    <img className='image_logo scale' src={logo} alt='logo' />
                </div>  
            </div>
        </div>
    )
}

export default LandingPage