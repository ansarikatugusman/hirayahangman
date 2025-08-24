import { Link } from 'react-router'
import FoldedButton from '../components/buttons/FoldedButton'

import './Play.css'

const Play = () => {
    return (
        <div className='play_buttons-container center ohpw'>
            <div className='adventure_button-container'>
                <Link className='link_href' to='../game'>
                     <FoldedButton text='PLAYTEST' fontsize='150%' scale={true} />
                </Link>
            </div>
            <div className='return_button-container'>
                <Link className='link_href' to='/'>
                    <FoldedButton text='RETURN' fontsize='150%' scale={true} />
                </Link>
            </div>
        </div>
    )
}

export default Play