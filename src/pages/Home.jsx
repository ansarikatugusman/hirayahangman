import { useState, useContext } from 'react'
import TopMenuIcons from '../components/home/TopMenuIcons'
import BottomMenuIcons from '../components/home/BottomMenuIcons'
import Profile from '../menus/Profile'
import Store from '../menus/Store'
import Leaderboard from '../menus/Leaderboard'
import ContactUs from '../menus/ContactUs'
import AuthContext from '../context/AuthContext'
import useHttpRequest from '../hooks/useHttpRequest'
import Loading from '../utils/Loading'
import ErrorMessage from '../utils/ErrorMessage'
import logo from '/hirayahangman-white_outline.svg'

import './Home.css'

const Home = () => {
    const [profileMenuOpen, setProfileMenuOpen] = useState(false)
    const [storeMenuOpen, setStoreMenuOpen] = useState(false)
    const [leaderboardMenuOpen, setLeaderboardMenuOpen] = useState(false)
    const [contactUsMenuOpen, setContactUsMenuOpen] = useState(false)
    const [showError, setShowError] = useState(false)
    const {loading, error, fetchRequest} = useHttpRequest()

    const openProfileMenu = () => setProfileMenuOpen(true)

    const closeProfileMenu = () => setProfileMenuOpen(false)

    const openStoreMenu = () => setStoreMenuOpen(true)

    const closeStoreMenu = () => setStoreMenuOpen(false)

    const openLeaderboardMenu = () => setLeaderboardMenuOpen(true)

    const closeLeaderboardMenu = () => setLeaderboardMenuOpen(false)

    const openContactUsMenu = () => setContactUsMenuOpen(true)

    const closeContactUsMenu = () => setContactUsMenuOpen(false)

    return (
        <div className='home-container ohp'>
            {loading && <Loading />}
            {showError && <ErrorMessage error={error} setShowError={setShowError} />}
            <TopMenuIcons 
                openProfileMenu={openProfileMenu}
                openStoreMenu={openStoreMenu}
                openLeaderboardMenu={openLeaderboardMenu}
            />
            <div className='logo-container ohpw center'>
                <img className='image_logo scale' src={logo} alt='logo' />
            </div>
            <BottomMenuIcons
                openContactUsMenu={openContactUsMenu}
            />
            {profileMenuOpen && <Profile closeProfileMenu={closeProfileMenu} />}
            {storeMenuOpen && <Store closeStoreMenu={closeStoreMenu} />}
            {leaderboardMenuOpen && <Leaderboard closeLeaderboardMenu={closeLeaderboardMenu} />}
            {contactUsMenuOpen && <ContactUs closeContactUsMenu={closeContactUsMenu} />}
        </div>
    )
}

export default Home