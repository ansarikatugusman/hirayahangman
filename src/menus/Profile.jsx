import Close from '../assets/images/icons/close.png'

import './Profile.css'

const Profile = () => {
    return (
        <div className='profile-container center modal'>
            <div className='profile-wrapper menu scale center'>
                <img className='close_button_menu icon' src={Close} />
                <div className='profile menu_content center'>
                </div>
            </div>
        </div>
    )
}

export default Profile