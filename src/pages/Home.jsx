import { Link } from 'react-router'
import logo from '/hirayahangman-white_outline.svg'
import SketchedButton from '../components/buttons/SketchedButton'

import './Home.css'

const Home = () => {
    return (
        <>
            <div className='logo-container ohpw'>
                <img className='image_logo scale' src={logo} alt='logo' />
            </div>
            <div className='home_buttons-container center ohpw'>
                <Link className='link_href' to='/play'>
                    <SketchedButton text='PLAY' width='250px' fontsize='200%' scale_after={true} />
                </Link>
            </div>
        </>
    )
}

export default Home