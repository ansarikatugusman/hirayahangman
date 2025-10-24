import { useNavigate } from 'react-router'
import SketchedButton from '../../components/buttons/SketchedButton'
import Credits from '../../assets/images/icons/credits.png'
import ContactUs from '../../assets/images/icons/contact_us.png'
import MusicOn from '../../assets/images/icons/music_on.png'
import MusicOff from '../../assets/images/icons/music_off.png'

import './BottomMenuIcons.css'

const BottomMenuIcons = ({ openContactUsMenu, musicMuted, muteMusic, unmuteMusic }) => {
    const navigate = useNavigate()

    const onClickPlayHandler = () => navigate('/play')

    return (
        <div className='bottom_menu_icons-container ohpw center scale_after'>
            <div className='bottom_menu_play_button-container center' >
                <div className='bottom_menu_play_button-wrapper center' onClickHandler={onClickPlayHandler}>
                    <SketchedButton text='PLAY' width='225px' fontsize='200%' onClickHandler={onClickPlayHandler} />
                </div>
            </div>
            
            <div className='bottom_menu_icons-wrapper center'>
                <div className='menu_icon-wrapper center' style={{ display: 'none' }}>
                    <img className='menu_icon' src={Credits} alt='credits' />
                    <p>CREDITS</p>
                </div>
                <div className='menu_icon-wrapper center' onClick={openContactUsMenu}>
                    <img className='menu_icon' src={ContactUs} alt='contact_us' />
                    <p>CONTACT US</p>
                </div>
                <div 
                    className='menu_icon-wrapper center' 
                    onClick={() => {
                        if (musicMuted) unmuteMusic()
                        else muteMusic()
                    }}
                >
                    <img className='menu_icon' src={musicMuted ? MusicOff : MusicOn} alt='music' />
                    <p>{musicMuted ? 'Music OFF' : 'Music ON'}</p>
                </div>
            </div>
        </div>
    )
}

export default BottomMenuIcons