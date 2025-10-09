import Close from '../assets/images/icons/close.png'

import './Achievements.css'

const Achievements = () => {
    return (
        <div className='achievements-container center modal'>
            <div className='achievements-wrapper menu scale center'>
                <img className='close_button_menu icon' src={Close} />
                <div className='achievements menu_content center'>
                </div>
            </div>
        </div>
    )
}

export default Achievements