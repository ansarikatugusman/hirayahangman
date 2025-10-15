import { useNavigate } from 'react-router'
import SketchedButton from '../../components/buttons/SketchedButton'
import Credits from '../../assets/images/icons/credits.png'
import ContactUs from '../../assets/images/icons/contact_us.png'

import './BottomMenuIcons.css'

const BottomMenuIcons = ({ openContactUsMenu, openMessage }) => {
    const navigate = useNavigate()

    const onClickPlayHandler = () => navigate('/play')

    return (
        <div className='bottom_menu_icons-container ohpw center scale_after'>
            <div className='bottom_menu_play_button-wrapper center'>
                <SketchedButton text='PLAY' width='225px' fontsize='200%' onClickHandler={onClickPlayHandler} />
            </div>
            
            <div className='bottom_menu_icons-wrapper center'>
                <div className='menu_icon-wrapper center'>
                    <img className='menu_icon' src={Credits} />
                    <p>CREDITS</p>
                </div>
                <div className='menu_icon-wrapper center' onClick={openContactUsMenu}>
                    <img className='menu_icon' src={ContactUs} />
                    <p>CONTACT US</p>
                </div>
            </div>
        </div>
    )
}

export default BottomMenuIcons