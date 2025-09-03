import { Link } from 'react-router'
import SketchedButton from '../components/buttons/SketchedButton'

import './Play.css'

const Play = () => {
    return (
        <div className='play_buttons-container center ohpw'>
            <Link className='link_href' to='../game'>
                <div className='adventure_button-container'>
                    <SketchedButton text='PLAYTEST' width='250px' fontsize='200%' scale={true} />
                </div> 
            </Link>
            <Link className='link_href' to='/'>
                <div className='return_button-container'>
                    <SketchedButton text='RETURN' width='250px' fontsize='200%' scale={true} />
                </div>
            </Link>
        </div>
    )
}

export default Play