import Crown from '../../assets/images/crown.png'
import Edit from '../../assets/images/icons/edit.svg'
import Logout from '../../assets/images/icons/logout.svg'

import './PlayerInfo.css'

const PlayerInfo = ({ name, avatar, crowns, openEditProfileDialog, openLogoutDialog }) => {

    return (
        <div className='player_info-container center' > 
            <div className='player-container'>
                <div className='tape-section'></div>
                <div className='player-wrapper ohp center'>
                    <div className='player_avatar-wrapper ohph center'>
                        <img className='player_avatar' src={`./avatars/${avatar}.svg`} alt='avatar' />
                    </div>
                    <div className='player_name_and_crowns-container ohph'>
                        <div className='player_name-wrapper'>
                            <p>{name}</p>
                        </div>
                        <div className='player_crowns-wrapper center'>
                            <img className='player_crowns' src={Crown} />
                            <p>{crowns}</p>
                        </div>
                    </div>
                </div>
                <div className='tape-section'></div>
            </div>
            <div className='player_info_options center'>
                <div title='Edit Profile' className='player_info_option center' onClick={openEditProfileDialog}>
                    <img className='edit_icon' src={Edit} />
                    <p>EDIT</p>
                </div>
                <div title='Logout' className='player_info_option center' onClick={openLogoutDialog}>
                    <img className='logout_icon' src={Logout} />
                    <p>LOGOUT</p>
                </div>
            </div>
            
        </div>
    )
}

export default PlayerInfo