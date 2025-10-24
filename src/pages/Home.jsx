import { useState, useContext } from 'react'
import TopMenuIcons from '../components/home/TopMenuIcons'
import BottomMenuIcons from '../components/home/BottomMenuIcons'
import Profile from '../menus/Profile'
import Store from '../menus/Store'
import Achievements from '../menus/Achievements'
import Leaderboard from '../menus/Leaderboard'
import ContactUs from '../menus/ContactUs'
import Message from '../utils/Message'
import Notice from '../utils/Notice'
import useHttpRequest from '../hooks/useHttpRequest'
import Loading from '../utils/Loading'
import ErrorMessage from '../utils/ErrorMessage'
import logo from '../assets/images/hiyasngsalita_tagline-white-outline.png'
import HomeMusic from '../assets/audios/home_music.ogg'

import './Home.css'

const Home = ({ musicMuted, muteMusic, unmuteMusic }) => {
    const [profileMenuOpen, setProfileMenuOpen] = useState(false)
    const [storeMenuOpen, setStoreMenuOpen] = useState(false)
    const [achievementsMenuOpen, setAchievementsMenuOpen] = useState(false)
    const [leaderboardMenuOpen, setLeaderboardMenuOpen] = useState(false)
    const [contactUsMenuOpen, setContactUsMenuOpen] = useState(false)
    const [showMessage, setShowMessage] = useState(false)
    const [showError, setShowError] = useState(false)
    const {loading, error, fetchRequest} = useHttpRequest()

    const openProfileMenu = () => setProfileMenuOpen(true)

    const closeProfileMenu = () => setProfileMenuOpen(false)

    const openStoreMenu = () => setStoreMenuOpen(true)

    const closeStoreMenu = () => setStoreMenuOpen(false)

    const openAchievementsMenu = () => setAchievementsMenuOpen(true)

    const closeAchievementsMenu = () => setAchievementsMenuOpen(false)

    const openLeaderboardMenu = () => setLeaderboardMenuOpen(true)

    const closeLeaderboardMenu = () => setLeaderboardMenuOpen(false)

    const openContactUsMenu = () => setContactUsMenuOpen(true)

    const closeContactUsMenu = () => setContactUsMenuOpen(false)

    const openMessage = () => setShowMessage(true)

    const closeMessage = () => setShowMessage(false)

    return (
        <div className='home-container ohp'>
            {loading && <Loading />}
            {showError && <ErrorMessage error={error} setShowError={setShowError} />}
            <audio src={HomeMusic} autoPlay loop muted={musicMuted} />
            <Notice />
            <TopMenuIcons 
                openProfileMenu={openProfileMenu}
                openStoreMenu={openStoreMenu}
                openAchievementsMenu={openAchievementsMenu}
                openLeaderboardMenu={openLeaderboardMenu}
            />
            <div className='logo-container ohpw center'>
                <img className='image_logo ' src={logo} alt='logo' />
            </div>
            <BottomMenuIcons
                openContactUsMenu={openContactUsMenu}
                musicMuted={musicMuted}
                muteMusic={muteMusic}
                unmuteMusic={unmuteMusic}
            />
            {profileMenuOpen && <Profile closeProfileMenu={closeProfileMenu} />}
            {storeMenuOpen && <Store closeStoreMenu={closeStoreMenu} />}
            {achievementsMenuOpen && <Achievements closeAchievementsMenu={closeAchievementsMenu} />}
            {leaderboardMenuOpen && <Leaderboard closeLeaderboardMenu={closeLeaderboardMenu} />}
            {contactUsMenuOpen && <ContactUs closeContactUsMenu={closeContactUsMenu} />}
            {showMessage && <Message closeMessage={closeMessage} />}
        </div>
    )
}

export default Home