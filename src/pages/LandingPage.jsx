import SignIn from '../components/landingpage/SignIn'
import AboutGame from '../components/landingpage/AboutGame'
import LandingPageBook from '../components/landingpage/LandingPageBook'
import LandingPageLeaderboards from '../components/landingpage/LandingPageLeaderboards'
import ScrollToTop from '../components/landingpage/ScrollToTop'
import logo from '../assets/images/hiyasngsalita_tagline-white-outline.png'

import './LandingPage.css'

const LandingPage = () => {

    return (
        <div className='landing_page-container ohp center' id='lpc'>
            <div className='landing_page_content-container ohpw center'>
                <div className='landing_page_image-wrapper ohpw center'>
                    <img className='image_logo scale' src={logo} alt='logo' />
                </div> 
                <SignIn />
                <AboutGame />
                <LandingPageBook />
                <LandingPageLeaderboards />
            </div>
        </div>
    )
}

export default LandingPage