import HealthPlus from '../../assets/images/items/health_plus-game.svg'
import TimeShield from '../../assets/images/items/time_shield-game.svg'
import MagnifyingGlass from '../../assets/images/items/magnifying_glass-game.svg'
import Randomizer from '../../assets/images/items/randomizer-game.svg'
import CrossMark from '../../assets/images/items/cross_mark-game.svg'

import './PlayerInventory.css'

const PlayerInventory = ({ item1, item2, item3, item4, item5 }) => {
    return (
        <div className='player_inventory-container center'>
            <div className='player_inventory_title ohpw center'>
                INVENTORY
            </div>
            <div className='player_inventory ohpw center'>
                <div className='inventory_item center'>
                    <img className='inventory_item_icon' src={HealthPlus} draggable='false' />
                    <div className='inventory_item_quantity-wrapper center'>
                        <p className='inventory_item_quantity'>{item1}</p>
                    </div>
                </div>
                <div className='inventory_item center'>
                    <img className='inventory_item_icon' src={TimeShield} draggable='false' />
                    <div className='inventory_item_quantity-wrapper center'>
                        <p className='inventory_item_quantity'>{item2}</p>
                    </div>
                </div>
                <div className='inventory_item center'>
                    <img className='inventory_item_icon' src={MagnifyingGlass} draggable='false' />
                    <div className='inventory_item_quantity-wrapper center'>
                        <p className='inventory_item_quantity'>{item3}</p>
                    </div>
                </div>
                <div className='inventory_item center'>
                    <img className='inventory_item_icon' src={Randomizer} draggable='false' />
                    <div className='inventory_item_quantity-wrapper center'>
                        <p className='inventory_item_quantity'>{item4}</p>
                    </div>
                </div>
                <div className='inventory_item center'>
                    <img className='inventory_item_icon' src={CrossMark} draggable='false' />
                    <div className='inventory_item_quantity-wrapper center'>
                        <p className='inventory_item_quantity'>{item5}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerInventory