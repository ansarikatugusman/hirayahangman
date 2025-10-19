import Profile from '../../assets/images/icons/profile.png'
import Store from '../../assets/images/icons/store.png'
import Achievements from '../../assets/images/icons/achievements.png'
import Leaderboard from '../../assets/images/icons/leaderboard.png'

import './TopMenuIcons.css'

const MenuIcons = ({ openProfileMenu, openStoreMenu, openAchievementsMenu, openLeaderboardMenu }) => {
    return (
        <div className='top_menu_icons-container ohpw center scale_after'>
            <div className='menu_icons-wrapper center'>
                <div className='menu_icon-wrapper center' onClick={openProfileMenu}>
                    <img className='menu_icon' src={Profile} />
                    <p>PROFILE</p>
                </div>
                <div className='menu_icon-wrapper center' onClick={openStoreMenu}>
                    <img className='menu_icon' src={Store} />
                    <p className='xxx'>STORE</p>
                </div>
                <div className='menu_icon-wrapper center' onClick={openAchievementsMenu}>
                    <img className='menu_icon' src={Achievements} />
                    <p>ACHIEVEMENTS</p>
                </div>
                <div className='menu_icon-wrapper center' onClick={openLeaderboardMenu}>
                    <img className='menu_icon' src={Leaderboard} />
                    <p>LEADERBOARD</p>
                </div>
            </div>
        </div>
    )
} 

export default MenuIcons