import SignIn from '../components/landingpage/SignIn'
import LandingPageBook from '../components/landingpage/LandingPageBook'
import logo from '../assets/images/hiyasngsalita_tagline-white-outline.png'

import './LandingPage.css'

const LandingPage = () => {
    return (
        <div className='landing_page-container ohp center'>
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