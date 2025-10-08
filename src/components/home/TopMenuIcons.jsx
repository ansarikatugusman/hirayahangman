import Profile from '../../assets/images/icons/profile.png'
import Store from '../../assets/images/icons/store.png'
import Achievements from '../../assets/images/icons/achievements.png'
import Leaderboards from '../../assets/images/icons/leaderboards.png'

import './TopMenuIcons.css'

const MenuIcons = ({ openStoreMenu }) => {
    return (
        <div className='top_menu_icons-container ohpw center scale_after'>
            <div className='menu_icons-wrapper center'>
                <div className='menu_icon-wrapper center'>
                    <img className='menu_icon' src={Profile} />
                    <p>PROFILE</p>
                </div>
                <div className='menu_icon-wrapper center' onClick={openStoreMenu}>
                    <img className='menu_icon' src={Store} />
                    <p>STORE</p>
                </div>
                <div className='menu_icon-wrapper center'>
                    <img className='menu_icon' src={Achievements} />
                    <p>ACHIEVEMENTS</p>
                </div>
                <div className='menu_icon-wrapper center'>
                    <img className='menu_icon' src={Leaderboards} />
                    <p>LEADERBOARDS</p>
                </div>
            </div>
        </div>
    )
} 

export default MenuIcons