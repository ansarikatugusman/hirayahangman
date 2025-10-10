import { useState, useEffect, useContext } from 'react'
import AuthContext from '../context/AuthContext'
import useHttpRequest from '../hooks/useHttpRequest'
import Loading from '../utils/Loading'
import ErrorMessage from '../utils/ErrorMessage'
import PlayerInfo from '../components/profile/PlayerInfo'
import PlayerId from '../components/profile/PlayerId'
import PlayerRecord from '../components/profile/PlayerRecord'
import PlayerInventory from '../components/profile/PlayerInventory'
import EditProfile from '../components/profile/EditProfile'
import Logout from '../components/profile/Logout'
import Close from '../assets/images/icons/close.png'

import './Profile.css'

const Profile = ({ closeProfileMenu }) => {
    const [name, setName] = useState('Player')
    const [avatar, setAvatar] = useState('character')
    const [avatars, setAvatars] = useState([])
    const [crowns, setCrowns] = useState(100)
    const [item1, setItem1] = useState(0)
    const [item2, setItem2] = useState(0)
    const [item3, setItem3] = useState(0)
    const [item4, setItem4] = useState(0)
    const [item5, setItem5] = useState(0)
    const [totalGoldSpent, setTotalGoldSpent] = useState(0)
    const [totalItemsUsed, setTotalItemsUsed] = useState(0)
    const [highestCrown, setHighestCrown] = useState(0)
    const [leaderboardRank, setLeaderboardRank] = useState('Unranked')
    const [averageTime, setAverageTime] = useState([])
    const [bugtongBooksSolved, setBugtongBooksSolved] = useState([])
    const [sawikainBooksSolved, setSawikainBooksSolved] = useState([])
    const [salawikainBooksSolved, setSalawikainBooksSolved] = useState([])
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
        const getProfile = async () => {
            try {
                const data = await fetchRequest(`${import.meta.env.VITE_BACKEND_URL}/user/profile`, 
                    'GET', 
                    {Authorization: 'Bearer ' + auth.token}
                )
                setName(data.user.name)
                setAvatar(data.user.avatar)
                setAvatars(data.user.avatars)
                setCrowns(data.user.crowns)
                setItem1(data.user.item1)
                setItem2(data.user.item2)
                setItem3(data.user.item3)
                setItem4(data.user.item4)
                setItem5(data.user.item5)
                setTotalGoldSpent(data.user.totalGoldSpent)
                setTotalItemsUsed(data.user.totalItemsUsed)
                setHighestCrown(data.user.highestCrown)
                //setLeaderboardRank(data.user.leaderboardRank)
                setAverageTime(data.user.averageTime)
                setBugtongBooksSolved(data.user.bugtongBooksSolved)
                setSawikainBooksSolved(data.user.sawikainBooksSolved)
                setSalawikainBooksSolved(data.user.salawikainBooksSolved)
            } catch (err) {
                setShowError(true)
            }
        }
        getProfile()
    }, [auth.id, auth.token, fetchRequest])

    useEffect(() => {
        const getLeaderboardRank = async () => {
            try {
                const data = await fetchRequest(`${import.meta.env.VITE_BACKEND_URL}/leaderboards/crowns/${auth.id}`, 
                    'GET'
                )
                setLeaderboardRank(data.leaderboardRank)
            } catch (err) {
                setShowError(true)
            }
        }
        getLeaderboardRank()
    }, [])

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
                        <PlayerRecord crowns={crowns} totalGoldSpent={totalGoldSpent} totalItemsUsed={totalItemsUsed} highestCrown={highestCrown} leaderboardRank={leaderboardRank} averageTime={averageTime} bugtongBooksSolved={bugtongBooksSolved} sawikainBooksSolved={sawikainBooksSolved} salawikainBooksSolved={salawikainBooksSolved} />
                        <PlayerInventory item1={item1} item2={item2} item3={item3} item4={item4} item5={item5} />
                    </div>
                </div>
            </div>
            {showLogoutDialog && <Logout closeLogoutDialog={closeLogoutDialog} />}
            {showEditProfileDialog && <EditProfile name={name} avatar={avatar} avatars={avatars} setName={setName} setAvatar={setAvatar} closeEditProfileDialog={closeEditProfileDialog} />}
        </div>
    )
}

export default Profile