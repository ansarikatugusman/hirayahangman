import { useState, useContext } from 'react'
import Tutorial5 from '../tutorials/Tutorial5'
import AuthContext from '../../context/AuthContext'
import useHttpRequest from '../../hooks/useHttpRequest'
import ErrorMessage from '../../utils/ErrorMessage'
import PointUp from '../../assets/images/icons/point_up.svg'
import HealtPlus from '../../assets/images/items/health_plus-game.svg'
import TimeShield from '../../assets/images/items/time_shield-game.svg'
import MagnifyingGlass from '../../assets/images/items/magnifying_glass-game.svg'
import Randomizer from '../../assets/images/items/randomizer-game.svg'
import CrossMark from '../../assets/images/items/cross_mark-game.svg'

import './ItemsDisplay.css'

const ItemsDisplay = ({ tutorial4, tutorial5Active, setTutorial5Active, setCompletedTutorial, item1, item2, item3, item4, item5, setItem1, setItem2, setItem3, setItem4, setItem5, addLife, stopTime, timeIsPlaying, hint, generateGame, remove, openWrongLetters, onItemUse }) => {
    const [showError, setShowError] = useState(false)
    const {loading, error, fetchRequest} = useHttpRequest()

    const auth = useContext(AuthContext)

    const useItem1 = async () => {
        // Health Plus
        addLife()
        setItem1(prevItemQuantity => prevItemQuantity - 1 )

        if (item1 >= 1) {   
            try {
                await fetchRequest(`${import.meta.env.VITE_BACKEND_URL}/useItem/item1`,
                'PATCH',
                {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + auth.token 
                })
            } catch (err) {
                setShowError(true)
            }

            onItemUse()
        }
    }

    const useItem2 = async () => {
        // Time Shield
        stopTime()
        setItem2(prevItemQuantity => prevItemQuantity - 1 )

        if (item2 >= 1 && timeIsPlaying === true) {
            try {
                await fetchRequest(`${import.meta.env.VITE_BACKEND_URL}/useItem/item2`,
                'PATCH',
                {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + auth.token 
                })
            } catch (err) {
                setShowError(true)
            }
            
            onItemUse()
        }
    }

    const useItem3 = async () => {
        // Magnifying Glass
        hint()
        setItem3(prevItemQuantity => prevItemQuantity - 1 )

        if (item3 >= 1) {
            try {
                await fetchRequest(`${import.meta.env.VITE_BACKEND_URL}/useItem/item3`,
                'PATCH',
                {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + auth.token 
                })
            } catch (err) {
                setShowError(true)
            }
            
            onItemUse()
        }
    }

    const useItem4 = async () => {
        // Randomizer
        generateGame()
        setItem4(prevItemQuantity => prevItemQuantity - 1 )

        if (item4 >= 1) {
            try {
                await fetchRequest(`${import.meta.env.VITE_BACKEND_URL}/useItem/item4`,
                'PATCH',
                {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + auth.token 
                })
            } catch (err) {
                setShowError(true)
            }
            
            onItemUse()
        }
    }

    const useItem5 = async () => {
        // Cross Mark
        remove()
        setItem5(prevItemQuantity => prevItemQuantity - 1 )

        if (item5 >= 1 && openWrongLetters.length >= 2) {
            try {
                await fetchRequest(`${import.meta.env.VITE_BACKEND_URL}/useItem/item5`,
                'PATCH',
                {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + auth.token 
                })
            } catch (err) {
                setShowError(true)
            }
            
            onItemUse()
        }
    }

    return (
        <div className='items_display-container center' style={{ overflow: tutorial5Active ? 'visible' : 'auto' }}> 
            {tutorial5Active && <Tutorial5 setTutorial5Active={setTutorial5Active} setCompletedTutorial={setCompletedTutorial} />}

			{tutorial5Active && <div className='items_display_cover ohp'></div>}

            {tutorial5Active && 
                <div className='tutorial5_hand'>
                    <img className='tutorial5_hand_icon' src={PointUp} />
                </div>
            }

            {showError && <ErrorMessage error={error} setShowError={setShowError} />}

            {tutorial4 &&
                <div className='items_display-wrapper' onClick={useItem1} style={{ display: item1 ? 'block' : 'none', zIndex: tutorial5Active && '20' }} >
                    <img className='item' src={HealtPlus} />
                    <div className='item_quantity-wrapper center'>
                        <p className='item_quantity'> {item1} </p>
                    </div>
                </div>
            }

            {tutorial4 &&
                <div className='items_display-wrapper' onClick={useItem2} style={{ display: item2 ? 'block' : 'none', zIndex: tutorial5Active && '20' }} >
                    <img className='item' src={TimeShield} />
                    <div className='item_quantity-wrapper center'>
                        <p className='item_quantity'> {item2} </p>
                    </div>
                </div>
            }

            {tutorial4 &&
                <div className='items_display-wrapper' onClick={useItem3} style={{ display: item3 ? 'block' : 'none', zIndex: tutorial5Active && '20' }}  >
                    <img className='item' src={MagnifyingGlass} />
                    <div className='item_quantity-wrapper center'>
                        <p className='item_quantity'> {item3} </p>
                    </div>
                </div>
            }

            {tutorial4 &&
                <div className='items_display-wrapper' onClick={useItem4} style={{ display: item4 ? 'block' : 'none', zIndex: tutorial5Active && '20' }}  >
                    <img className='item' src={Randomizer} />
                    <div className='item_quantity-wrapper center'>
                        <p className='item_quantity'> {item4} </p>
                    </div>
                </div>
            }

            {tutorial4 &&
                <div className='items_display-wrapper' onClick={useItem5} style={{ display: item5 ? 'block' : 'none', zIndex: tutorial5Active && '20' }}  >
                    <img className='item' src={CrossMark} />
                    <div className='item_quantity-wrapper center'>
                        <p className='item_quantity'> {item5} </p>
                    </div>
                </div>
            }
        </div>
    )
}

export default ItemsDisplay