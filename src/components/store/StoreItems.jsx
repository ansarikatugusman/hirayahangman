import { useState, useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import useHttpRequest from '../../hooks/useHttpRequest'
import Loading from '../../utils/Loading'
import ErrorMessage from '../../utils/ErrorMessage'
import Items from '../../utils/Items'
import Gold from '../../assets/images/gold.png'
import HealthPlus from '../../assets/images/items/health_plus-store.svg'
import TimeShield from '../../assets/images/items/time_shield-store.svg'
import MagnifyingGlass from '../../assets/images/items/magnifying_glass-store.svg'
import Randomizer from '../../assets/images/items/randomizer-store.svg'
import CrossMark from '../../assets/images/items/cross_mark-store.svg'

import './StoreItems.css'

const StoreItems = ({ setGold }) => {
    const [showError, setShowError] = useState(false)
    const {loading, error, fetchRequest} = useHttpRequest()

    const auth = useContext(AuthContext)

    const buyItem1 = async () => {
        try {
            await fetchRequest(`${import.meta.env.VITE_BACKEND_URL}/buyItem/item1`,
            'PATCH',
            {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + auth.token 
            },
            JSON.stringify({
                price: 125
            }))
            setGold(prevGold => prevGold - 125)
        } catch (err) {
            setShowError(true)
        }
    }

    const buyItem2 = async () => {
        try {
            await fetchRequest(`${import.meta.env.VITE_BACKEND_URL}/buyItem/item2`,
            'PATCH',
            {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + auth.token 
            },
            JSON.stringify({
                price: 250
            }))
            setGold(prevGold => prevGold - 250)
        } catch (err) {
            setShowError(true)
        }
    }

    const buyItem3 = async () => {
        try {
            await fetchRequest(`${import.meta.env.VITE_BACKEND_URL}/buyItem/item3`,
            'PATCH',
            {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + auth.token 
            },
            JSON.stringify({
                price: 125
            }))
            setGold(prevGold => prevGold - 125)
        } catch (err) {
            setShowError(true)
        }
    }

    const buyItem4 = async () => {
        try {
            await fetchRequest(`${import.meta.env.VITE_BACKEND_URL}/buyItem/item4`,
            'PATCH',
            {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + auth.token 
            },
            JSON.stringify({
                price: 100
            }))
            setGold(prevGold => prevGold - 100)
        } catch (err) {
            setShowError(true)
        }
    }

    const buyItem5 = async () => {
        try {
            await fetchRequest(`${import.meta.env.VITE_BACKEND_URL}/buyItem/item5`,
            'PATCH',
            {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + auth.token 
            },
            JSON.stringify({
                price: 100
            }))
            setGold(prevGold => prevGold - 100)
        } catch (err) {
            setShowError(true)
        }
    }

    return (
        <div className='store_items-container center'>
            {loading && <Loading />}
            {showError && <ErrorMessage error={error} setShowError={setShowError} />}
            <div className='item1-container store_item'>
                <div className='item1_image-wrapper item_image-wrapper'>
                    <img className='item1_image item_image' src={HealthPlus} draggable='false' />
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
                        <img className='gold_icon' src={Gold} draggable='false' />
                        <div className='item1_price item_price'>
                            {Items.item01.price}
                        </div>
                    </div>
                    <button className='item1_button item_button' onClick={buyItem1}>
                        BUY
                    </button>
                </div>
            </div>

            <div className='item2-container store_item'>
                <div className='item2_image-wrapper item_image-wrapper'>
                    <img className='item2_image item_image' src={TimeShield} draggable='false' />
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
                        <img className='gold_icon' src={Gold} draggable='false' />
                        <div className='item2_price item_price'>
                            {Items.item02.price}
                        </div>
                    </div>
                    <button className='item2_button item_button' onClick={buyItem2}>
                        BUY
                    </button>
                </div>
            </div>

            <div className='item3-container store_item'>
                <div className='item3_image-wrapper item_image-wrapper'>
                    <img className='item3_image item_image' src={MagnifyingGlass} draggable='false' />
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
                        <img className='gold_icon' src={Gold} draggable='false' />
                        <div className='item3_price item_price'>
                            {Items.item03.price}
                        </div>
                    </div>
                    <button className='item3_button item_button' onClick={buyItem3}>
                        BUY
                    </button>
                </div>
            </div>

            <div className='item4-container store_item'>
                <div className='item4_image-wrapper item_image-wrapper'>
                    <img className='item4_image item_image' src={Randomizer} draggable='false' />
                </div>
                <div className='item4_name-wrapper item_name-wrapper center'>
                    <div className='item4_name item_name'>
                        {Items.item04.name}
                    </div>
                </div>
                <div className='item4_description-wrapper item_description-wrapper center'>
                    <div className='item4_description item_description'>
                        {Items.item04.description}
                    </div>
                </div>
                <hr className='item_divider' ></hr>
                <div className='item4_price-container item_price-container center'>
                    <div className='item4_price-wrapper item_price-wrapper center'>
                        <img className='gold_icon' src={Gold} draggable='false' />
                        <div className='item4_price item_price'>
                            {Items.item04.price}
                        </div>
                    </div>
                    <button className='item4_button item_button' onClick={buyItem4}>
                        BUY
                    </button>
                </div>
            </div>

            <div className='item5-container store_item'>
                <div className='item5_image-wrapper item_image-wrapper'>
                    <img className='item5_image item_image' src={CrossMark} draggable='false' />
                </div>
                <div className='item5_name-wrapper item_name-wrapper center'>
                    <div className='item5_name item_name'>
                        {Items.item05.name}
                    </div>
                </div>
                <div className='item5_description-wrapper item_description-wrapper center'>
                    <div className='item5_description item_description'>
                        {Items.item05.description}
                    </div>
                </div>
                <hr className='item_divider' ></hr>
                <div className='item5_price-container item_price-container center'>
                    <div className='item5_price-wrapper item_price-wrapper center'>
                        <img className='gold_icon' src={Gold} draggable='false' />
                        <div className='item5_price item_price'>
                            {Items.item05.price}
                        </div>
                    </div>
                    <button className='item5_button item_button' onClick={buyItem5}>
                        BUY
                    </button>
                </div>
            </div>
        </div>
    )
}

export default StoreItems