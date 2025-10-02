import Crown from '../../assets/images/crown.png'

import './PlayerInfo.css'

const PlayerInfo = ({ name, avatar, crowns }) => {
    return (
        <div className='player_info-container ohpw center' > 
            <div className='player-container'>
                <div className='tape-section'></div>
                <div className='player-wrapper ohp center'>
                    <div className='player_avatar-wrapper ohph center'>
                        <img className='player_avatar' src={`${import.meta.env.VITE_DOMAIN}/src/assets/images/avatars/${avatar}.svg`} alt='avatar' />
                    </div>
                    <div className='player_name_and_crowns-container ohph'>
                        <div className='player_name-wrapper center'>
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
        </div>
    )
}

export default PlayerInfo