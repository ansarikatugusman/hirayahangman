import { useRef, useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import SketchySmallWrapper from '../wrappers/SketchySmallWrapper'
import SketchedButton from '../buttons/SketchedButton'

import './Logout.css'

const Logout = ({ closeLogoutDialog }) => {

    const auth = useContext(AuthContext)

    const confirmLogout = () => auth.logout()

    const cancelLogout = () => {
        closeLogoutDialog()
    }

    return (
        <SketchySmallWrapper>
            <div className='logout_message ohpw center'>
                Are you sure you want to log out?
            </div>
            <div className='logout_dialog_buttons center'>
                <div className='logout_dialog_button-wrapper center' onClick={confirmLogout}>
                    <SketchedButton width='71px' text='YES' />
                </div>
                <div className='logout_dialog_button-wrapper center' onClick={cancelLogout}>
                    <SketchedButton width='71px' text='NO' />
                </div>
            </div>
        </SketchySmallWrapper>
    )
}

export default Logout