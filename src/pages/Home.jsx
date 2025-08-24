import { Link } from 'react-router'
import logo from '/hirayahangman-white_outline.svg'
import FoldedButton from '../components/buttons/FoldedButton'

import './Home.css'

const Home = () => {
    return (
        <>
            <div className='logo-container ohpw'>
                <img className='image_logo scale' src={logo} alt='logo' />
            </div>
            <div className='home_buttons-container center ohpw'>
                <Link className='link_href' to='/play'>
                    <FoldedButton text='PLAY' scale_after={true} />
                </Link>
            </div>
        </>
    )
}

export default Home