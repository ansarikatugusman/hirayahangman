import { useState, useEffect } from 'react'
import { Outlet } from 'react-router'
import Notice from './utils/Notice'
import Gold from './assets/images/gold.png'
import Dialogue from './components/Dialogue'

import './Dashboard.css'

const Dashboard = ({ playerGold, setPlayerGold }) => {
    const [message, setMessage] = useState([' '])

    useEffect(() => {
        setPlayerGold(localStorage.getItem('gold'))
        chooseMessage()
    }, [])

    const messages = [
        ` Your feedback is very much appreciated.`,
        ` Thank you for trying out the game.`,
        ` I hope you liked our little game.`,
        ` Have you tried purchasing items in the shop?`,
        ` My favorite item from the shop is Time Shield.`,
        ` Solving one puzzle gives you 100 gold.`,
        ` Utilizing the hint book helps you solve the puzzle.`,
        ` You can enter letters by using a keyboard.`,
    ]

    const chooseMessage = () => {
        let chosenMessage = []
        chosenMessage.push(messages[Math.floor(Math.random() * messages.length)])
        setMessage(chosenMessage)
    }

    return (
        <div className="dashboard center ohp">
            <Dialogue dialogue={message} />
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