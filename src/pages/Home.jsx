import { useState, useContext } from 'react'
import TopMenuIcons from '../components/home/TopMenuIcons'
import BottomMenuIcons from '../components/home/BottomMenuIcons'
import Profile from '../menus/Profile'
import Store from '../menus/Store'
import AuthContext from '../context/AuthContext'
import useHttpRequest from '../hooks/useHttpRequest'
import Loading from '../utils/Loading'
import ErrorMessage from '../utils/ErrorMessage'
import logo from '/hirayahangman-white_outline.svg'

import './Home.css'

const Home = () => {
    const [profileMenuOpen, setProfileMenuOpen] = useState(false)
    const [storeMenuOpen, setStoreMenuOpen] = useState(false)
    const [showError, setShowError] = useState(false)
    const {loading, error, fetchRequest} = useHttpRequest()

    const openProfileMenu = () => setProfileMenuOpen(true)

    const closeProfileMenu = () => setProfileMenuOpen(false)

    const openStoreMenu = () => setStoreMenuOpen(true)

    const closeStoreMenu = () => setStoreMenuOpen(false)

    return (
        <div className='home-container ohp'>
            {loading && <Loading />}
            {showError && <ErrorMessage error={error} setShowError={setShowError} />}
            <TopMenuIcons 
                openProfileMenu={openProfileMenu}
                openStoreMenu={openStoreMenu}
            />
            <div className='logo-container ohpw center'>
                <img className='image_logo scale' src={logo} alt='logo' />
            </div>
            <BottomMenuIcons />
            {profileMenuOpen && <Profile closeProfileMenu={closeProfileMenu} />}
            {storeMenuOpen && <Store closeStoreMenu={closeStoreMenu} />}
        </div>
    )
}

export default Home