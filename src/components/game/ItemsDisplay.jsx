import { useEffect } from 'react'
import Items from '../../utils/Items'
import HealtPlus from '../../assets/images/health_plus-game.svg'
import TimeShield from '../../assets/images/time_shield-game.svg'
import MagnifyingGlass from '../../assets/images/magnifying_glass-game.svg'

import './ItemsDisplay.css'

const ItemsDisplay = ({ item1, item2, item3, useItem1, useItem2, useItem3 }) => {

    return (
        <div className='items_display-container center'>
            <div className='items_display-wrapper' onClick={useItem1} style={{ display: item1 ? 'block' : 'none' }} >
                <img className='item' src={HealtPlus} />
                <div className='item_quantity-wrapper center'>
                    <p className='item_quantity'> {item1} </p>
                </div>
            </div>
            <div className='items_display-wrapper' onClick={useItem2} style={{ display: item2 ? 'block' : 'none' }} >
                <img className='item' src={TimeShield} />
                <div className='item_quantity-wrapper center'>
                    <p className='item_quantity'> {item2} </p>
                </div>
            </div>
            <div className='items_display-wrapper' onClick={useItem3} style={{ display: item3 ? 'block' : 'none' }}  >
                <img className='item' src={MagnifyingGlass} />
                <div className='item_quantity-wrapper center'>
                    <p className='item_quantity'> {item3} </p>
                </div>
            </div>
        </div>
    )
}

export default ItemsDisplay