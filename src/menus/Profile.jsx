import { useState, useEffect, useContext } from 'react'
import AuthContext from '../context/AuthContext'
import useHttpRequest from '../hooks/useHttpRequest'
import Loading from '../utils/Loading'
import ErrorMessage from '../utils/ErrorMessage'
import PlayerInfo from '../components/profile/PlayerInfo'
import PlayerId from '../components/profile/PlayerId'
import PlayerRecord from '../components/profile/PlayerRecord'
import EditProfile from '../components/profile/EditProfile'
import Logout from '../components/profile/Logout'
import Close from '../assets/images/icons/close.png'

import './Profile.css'

const Profile = ({ closeProfileMenu }) => {
    const [name, setName] = useState('Player')
    const [avatar, setAvatar] = useState('character')
    const [crowns, setCrowns] = useState(100)
    const [showEditProfileDialog, setShowEditProfileDialog] = useState(false)
    const [showLogoutDialog, setShowLogoutDialog] = useState(false)
    const [showError, setShowError] = useState(false)
    const {loading, error, fetchRequest} = useHttpRequest()

    const auth = useContext(AuthContext)

    const openEditProfileDialog = () => setShowEditProfileDialog(true)

    const closeEditProfileDialog = () => setShowEditProfileDialog(false)

    const openLogoutDialog = () => setShowLogoutDialog(true)

    const closeLogoutDialog = () => setShowLogoutDialog(false)

    useEffect(() => {
        const getUserHomeInfo = async () => {
            try {
                const data = await fetchRequest(`${import.meta.env.VITE_BACKEND_URL}/user/profile`, 
                    'GET', 
                    {Authorization: 'Bearer ' + auth.token}
                )
                setName(data.user.name)
                setAvatar(data.user.avatar)
                setCrowns(data.user.crowns)
            } catch (err) {
                setShowError(true)
            }
        }
        getUserHomeInfo()
    }, [auth.id, auth.token, fetchRequest])

    return (
        <div className='profile-container center modal'>
            {loading && <Loading />}
            {showError && <ErrorMessage error={error} setShowError={setShowError} />}
            <div className='profile-wrapper menu scale center'>
                <img className='close_button_menu icon' src={Close} onClick={closeProfileMenu} />
                <div className='profile menu_content center'>
                    <div className='player_information ohpw center'>
                        <PlayerInfo name={name} avatar={avatar} crowns={crowns} openLogoutDialog={openLogoutDialog} openEditProfileDialog={openEditProfileDialog} />
                        <PlayerId />
                    </div>
                    <div className='player_stats ohpw center'>
                        <PlayerRecord />
                    </div>
                </div>
            </div>
            {showLogoutDialog && <Logout closeLogoutDialog={closeLogoutDialog} />}
            {showEditProfileDialog && <EditProfile name={name} avatar={avatar} setName={setName} setAvatar={setAvatar} closeEditProfileDialog={closeEditProfileDialog} />}
        </div>
    )
}

export default Profile