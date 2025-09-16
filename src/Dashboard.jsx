import { useState, useEffect } from 'react'
import { Outlet } from 'react-router'
import Notice from './utils/Notice'
import Gold from './assets/images/gold.png'

import './Dashboard.css'

const Dashboard = ({ playerGold, setPlayerGold }) => {
 
    useEffect(() => {
        setPlayerGold(localStorage.getItem('gold'))
    }, [])

    return (
        <div className="dashboard center ohp">
            <Notice />
            
            <div className='player_info-container ohpw'>
                <div className='player_name-container center ohph'>
                    <div className='player_name-wrapper'>
                        <div className="player_name-pin">
                            <div className="shadow"></div>
                            <div className="metal"></div>
                            <div className="bottom-circle"></div>
                        </div>
                        <p className='player_name'>Player</p>
                    </div>
                </div>

                <div className='player_gold-container center ohph' >
                    <div className='player_gold-wrapper'>
                        <div className="player_gold-pin">
                            <div className="shadow"></div>
                            <div className="metal"></div>
                            <div className="bottom-circle"></div>
                        </div>
                        <img className='player_gold_icon' src={Gold} />
                        <p className='player_gold'>{playerGold}</p>
                    </div>
                </div>
            </div>
            
            <Outlet />
        </div>
    )
}

export default Dashboard