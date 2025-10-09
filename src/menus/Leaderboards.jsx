import Close from '../assets/images/icons/close.png'

import './Leaderboards.css'

const Leaderboards = () => {
    return (
        <div className='leaderboards-container center modal'>
            <div className='leaderboards-wrapper menu scale center'>
                <img className='close_button_menu icon' src={Close} />
                <div className='leaderboards menu_content center'>
                </div>
            </div>
        </div>
    )
}

export default Leaderboards