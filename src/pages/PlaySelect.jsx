import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import SketchedButton from '../components/buttons/SketchedButton'
import Dialogue from '../components/Dialogue'

import './PlaySelect.css'

const Play = () => {
    const [message, setMessage] = useState([' '])
    const [startedPlaying, setStartedplaying] = useState(false)
 
    useEffect(() => {
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
        <div className='play_select_buttons-container center ohpw'>
            <Dialogue dialogue={message} />
            <Link className='link_href' to='../game'>
                <div className='adventure_button-container'>
                    <SketchedButton text='PLAYTEST' width='250px' fontsize='200%' scale={true} />
                </div> 
            </Link>
            <Link className='link_href' to='/shop'>
                <div className='adventure_button-container'>
                    <SketchedButton text='SHOP' width='250px' fontsize='200%' scale={true} />
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