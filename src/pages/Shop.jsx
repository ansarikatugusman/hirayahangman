import { Link } from 'react-router'
import SketchedButton from '../components/buttons/SketchedButton'
import Items from '../utils/Items'
import Gold from '../assets/images/gold.png'
import HealthPlus from '../assets/images/health_plus-shop.svg'
import TimeShield from '../assets/images/time_shield-shop.svg'
import MagnifyingGlass from '../assets/images/magnifying_glass-shop.svg'

import './Shop.css'
import { useEffect } from 'react'

const Shop = ({ setPlayerGold }) => {

    const buyItem1 = () => {
        let player_gold = localStorage.getItem('gold')
        if(player_gold > Items.item01.price) {
            localStorage.setItem('gold', player_gold - 75)
            const data = localStorage.getItem('items')
            const itemsData = JSON.parse(data)
            let updatedItemQuantity = itemsData['item1'] + 1
            let items = JSON.parse(localStorage.getItem('items'))
            let updatedItems = {...items, item1: updatedItemQuantity}
            localStorage.setItem('items', JSON.stringify(updatedItems))
            setPlayerGold(prevGold => prevGold - 75)
        }
    }

    const buyItem2 = () => {
        let player_gold = localStorage.getItem('gold')
        if(player_gold > Items.item02.price) {
            localStorage.setItem('gold', player_gold - 125)
            const data = localStorage.getItem('items')
            const itemsData = JSON.parse(data)
            let updatedItemQuantity = itemsData['item2'] + 1
            let items = JSON.parse(localStorage.getItem('items'))
            let updatedItems = {...items, item2: updatedItemQuantity}
            localStorage.setItem('items', JSON.stringify(updatedItems))
            setPlayerGold(prevGold => prevGold - 125)
        }
    }

    const buyItem3 = () => {
        let player_gold = localStorage.getItem('gold')
        if(player_gold > Items.item03.price) {
            localStorage.setItem('gold', player_gold - 100)
            const data = localStorage.getItem('items')
            const itemsData = JSON.parse(data)
            let updatedItemQuantity = itemsData['item3'] + 1
            let items = JSON.parse(localStorage.getItem('items'))
            let updatedItems = {...items, item3: updatedItemQuantity}
            localStorage.setItem('items', JSON.stringify(updatedItems))
            setPlayerGold(prevGold => prevGold - 100)
        }
    }

    const buyItem4 = () => {
        
    }

    const buyItem5 = () => {
        
    }

    return (
        <div className='shop-container center'>
            <div className='items-container center'>
                <div className='item1-container shop_item'>
                <div className='item1_image-wrapper item_image-wrapper'>
                    <img className='item1_image item_image' src={HealthPlus} />
                </div>
                <div className='item1_name-wrapper item_name-wrapper center'>
                    <div className='item1_name item_name'>
                        {Items.item01.name}
                    </div>
                </div>
                <div className='item1_description-wrapper item_description-wrapper center'>
                    <div className='item1_description item_description'>
                        {Items.item01.description}
                    </div>
                </div>
                <hr className='item_divider' ></hr>
                <div className='item1_price-container item_price-container center'>
                    <div className='item1_price-wrapper item_price-wrapper center'>
                        <img className='gold_icon' src={Gold}  />
                        <div className='item1_price item_price'>
                            {Items.item01.price}
                        </div>
                    </div>
                    <button className='item1_button item_button' onClick={buyItem1}>
                        BUY
                    </button>
                </div>
            </div>

            <div className='item2-container shop_item'>
                <div className='item2_image-wrapper item_image-wrapper'>
                    <img className='item2_image item_image' src={TimeShield} />
                </div>
                <div className='item2_name-wrapper item_name-wrapper center'>
                    <div className='item2_name item_name'>
                        {Items.item02.name}
                    </div>
                </div>
                <div className='item2_description-wrapper item_description-wrapper center'>
                    <div className='item2_description item_description'>
                        {Items.item02.description}
                    </div>
                </div>
                <hr className='item_divider' ></hr>
                <div className='item2_price-container item_price-container center'>
                    <div className='item2_price-wrapper item_price-wrapper center'>
                        <img className='gold_icon' src={Gold}  />
                        <div className='item2_price item_price'>
                            {Items.item02.price}
                        </div>
                    </div>
                    <button className='item2_button item_button' onClick={buyItem2}>
                        BUY
                    </button>
                </div>
            </div>

            <div className='item3-container shop_item'>
                <div className='item3_image-wrapper item_image-wrapper'>
                    <img className='item3_image item_image' src={MagnifyingGlass} />
                </div>
                <div className='item3_name-wrapper item_name-wrapper center'>
                    <div className='item3_name item_name'>
                        {Items.item03.name}
                    </div>
                </div>
                <div className='item3_description-wrapper item_description-wrapper center'>
                    <div className='item3_description item_description'>
                        {Items.item03.description}
                    </div>
                </div>
                <hr className='item_divider' ></hr>
                <div className='item3_price-container item_price-container center'>
                    <div className='item3_price-wrapper item_price-wrapper center'>
                        <img className='gold_icon' src={Gold}  />
                        <div className='item3_price item_price'>
                            {Items.item03.price}
                        </div>
                    </div>
                    <button className='item3_button item_button' onClick={buyItem3}>
                        BUY
                    </button>
                </div>
            </div>

            <div className='item1-container shop_item' style={{ display: 'none' }}>
                <div className='item1_image-wrapper item_image-wrapper'>
                    <img className='item1_image item_image' src={HealthPlus} />
                </div>
                <div className='item1_name-wrapper item_name-wrapper center'>
                    <div className='item1_name item_name'>
                        {Items.item01.name}
                    </div>
                </div>
                <div className='item1_description-wrapper item_description-wrapper center'>
                    <div className='item1_description item_description'>
                        {Items.item01.description}
                    </div>
                </div>
                <hr className='item_divider' ></hr>
                <div className='item1_price-container item_price-container center'>
                    <div className='item1_price-wrapper item_price-wrapper center'>
                        <img className='gold_icon' src={Gold}  />
                        <div className='item1_price item_price'>
                            {Items.item01.price}
                        </div>
                    </div>
                    <button className='item1_button item_button' onClick={buyItem1}>
                        BUY
                    </button>
                </div>
            </div>

            <div className='item1-container shop_item' style={{ display: 'none' }}>
                <div className='item1_image-wrapper item_image-wrapper'>
                    <img className='item1_image item_image' src={HealthPlus} />
                </div>
                <div className='item1_name-wrapper item_name-wrapper center'>
                    <div className='item1_name item_name'>
                        {Items.item01.name}
                    </div>
                </div>
                <div className='item1_description-wrapper item_description-wrapper center'>
                    <div className='item1_description item_description'>
                        {Items.item01.description}
                    </div>
                </div>
                <hr className='item_divider' ></hr>
                <div className='item1_price-container item_price-container center'>
                    <div className='item1_price-wrapper item_price-wrapper center'>
                        <img className='gold_icon' src={Gold}  />
                        <div className='item1_price item_price'>
                            {Items.item01.price}
                        </div>
                    </div>
                    <button className='item1_button item_button' onClick={buyItem1}>
                        BUY
                    </button>
                </div>
            </div>

            </div>
            
            <div className='navigational_button-container center'>
                <Link className='link_href' to='/'>
                    <div className='return_button-container'>
                        <SketchedButton text='RETURN' width='175px' fontsize='125%' />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Shop