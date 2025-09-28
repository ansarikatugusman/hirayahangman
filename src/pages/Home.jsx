import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import PlayerInfo from '../components/home/PlayerInfo'
import SketchedButton from '../components/buttons/SketchedButton'
import logo from '/hirayahangman-white_outline.svg'
import Dialogue from '../components/Dialogue'

import './Home.css'

const Home = () => {
    return (
        <div className='home-container ohp'>
            <PlayerInfo />
            <div className='logo-container ohpw center'>
                <img className='image_logo scale' src={logo} alt='logo' />
            </div>
            <div className='home_buttons-container center ohpw'>
                <Link className='link_href' to='/play'>
                    <SketchedButton text='PLAY' width='250px' fontsize='200%' scale_after={true} />
                </Link>
            </div>
        </div>
    )
}

export default Home