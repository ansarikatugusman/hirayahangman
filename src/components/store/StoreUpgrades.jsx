import { useState, useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import useHttpRequest from '../../hooks/useHttpRequest'
import Loading from '../../utils/Loading'
import ErrorMessage from '../../utils/ErrorMessage'
import StoreUpgradesList from '../../utils/StoreUpgradesList'
import Gold from '../../assets/images/gold.png'
import HeartCherish from '../../assets/images/upgrades/heart_cherish.svg'
import Stopwatch from '../../assets/images/upgrades/stopwatch.svg'
import SplitCross from '../../assets/images/upgrades/split_cross.svg'

import './StoreUpgrades.css'

const StoreUpgrades = ({ setGold, playerUpgrade1, playerUpgrade2, playerUpgrade3 }) => {
    const [showError, setShowError] = useState(false)
    const {loading, error, fetchRequest} = useHttpRequest()

    const auth = useContext(AuthContext)

    const buyUpgrade1 = async ( price ) => {
        try {
            await fetchRequest(`${import.meta.env.VITE_BACKEND_URL}/buyUpgrade/upgrade1`,
            'PATCH',
            {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + auth.token 
            },
            JSON.stringify({
                price: price
            }))
            setGold(prevGold => prevGold - price)
        } catch (err) {
            setShowError(true)
        }
    }

    const buyUpgrade2 = async ( price ) => {
        try {
            await fetchRequest(`${import.meta.env.VITE_BACKEND_URL}/buyUpgrade/upgrade2`,
            'PATCH',
            {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + auth.token 
            },
            JSON.stringify({
                price: price
            }))
            setGold(prevGold => prevGold - price)
        } catch (err) {
            setShowError(true)
        }
    }

    const buyUpgrade3 = async ( price ) => {
        try {
            await fetchRequest(`${import.meta.env.VITE_BACKEND_URL}/buyUpgrade/upgrade3`,
            'PATCH',
            {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + auth.token 
            },
            JSON.stringify({
                price: price
            }))
            setGold(prevGold => prevGold - price)
        } catch (err) {
            setShowError(true)
        }
    }

    return (
        <div className='store_upgrades-container center'>
            {loading && <Loading />}
            {showError && <ErrorMessage error={error} setShowError={setShowError} />}

            <div className='upgrade1-container store_upgrade'>
                <div className='upgrade1_image-wrapper upgrade_image-wrapper'>
                    <img className='upgrade1_image upgrade_image' src={HeartCherish} draggable='false' />
                </div>
                <div className='upgrade1_description-wrapper upgrade_description-wrapper center'>
                    <div className='upgrade1_description upgrade_description'>
                        Start with <span className='upgrade_description_highlight'>{StoreUpgradesList.upgrade1[playerUpgrade1].upgrade}</span> lives.
                    </div>
                </div>
                <div className='upgrade1_next-wrapper upgrade_next-wrapper center'>
                    <div className='upgrade1_next upgrade_next'>
                        {StoreUpgradesList.upgrade1[playerUpgrade1].price === 'Maxed' 
                            ? <span>NO UPGRADES AVAILABLE</span> 
                            : <span>NEXT UPGRADE: Start with <span className='upgrade_description_highlight'>{StoreUpgradesList.upgrade1[playerUpgrade1 + 1].upgrade}</span> lives.</span>
                        }
                    </div>
                </div>
                <hr className='upgrade_divider' ></hr>
                <div className='upgrade1_price-container upgrade_price-container center'>
                    {StoreUpgradesList.upgrade1[playerUpgrade1].price === 'Maxed' && 
                        <div className='upgrade1_maxed upgrade_maxed ohpw center'>MAXED</div>
                    }
                    {StoreUpgradesList.upgrade1[playerUpgrade1].price !== 'Maxed' && 
                        <div className='upgrade1_price-wrapper upgrade_price-wrapper center'>
                            <img className='gold_icon' src={Gold} draggable='false' />
                            <div className='upgrade1_price upgrade_price'>
                                {StoreUpgradesList.upgrade1[playerUpgrade1].price}
                            </div>
                        </div>
                    }
                    {StoreUpgradesList.upgrade1[playerUpgrade1].price !== 'Maxed' && 
                        <button 
                            className='upgrade1_button upgrade_button' 
                            onClick={() => {
                                buyUpgrade1(StoreUpgradesList.upgrade1[playerUpgrade1].price)
                            }}
                        >
                            UPGRADE
                        </button>
                    }
                </div>
            </div>

            <div className='upgrade2-container store_upgrade'>
                <div className='upgrade2_image-wrapper upgrade_image-wrapper'>
                    <img className='upgrade2_image upgrade_image' src={Stopwatch} draggable='false' />
                </div>
                <div className='upgrade2_description-wrapper upgrade_description-wrapper center'>
                    <div className='upgrade2_description upgrade_description'>
                        Add <span className='upgrade_description_highlight'>{StoreUpgradesList.upgrade2[playerUpgrade2].upgrade}</span> {`second${playerUpgrade2 >= 2 ? 's' : ''}`} to the timer.
                    </div>
                </div>
                <div className='upgrade2_next-wrapper upgrade_next-wrapper center'>
                    <div className='upgrade2_next upgrade_next'>
                        {StoreUpgradesList.upgrade2[playerUpgrade2].price === 'Maxed' 
                            ? <span>NO UPGRADES AVAILABLE</span> 
                            : <span>NEXT UPGRADE: Add <span className='upgrade_description_highlight'>{StoreUpgradesList.upgrade2[playerUpgrade2 + 1].upgrade}</span> seconds to the timer.</span>
                        }
                    </div>
                </div>
                <hr className='upgrade_divider' ></hr>
                <div className='upgrade2_price-container upgrade_price-container center'>
                    {StoreUpgradesList.upgrade2[playerUpgrade2].price === 'Maxed' && 
                        <div className='upgrade2_maxed upgrade_maxed ohpw center'>MAXED</div>
                    }
                    {StoreUpgradesList.upgrade2[playerUpgrade2].price !== 'Maxed' && 
                        <div className='upgrade2_price-wrapper upgrade_price-wrapper center'>
                            <img className='gold_icon' src={Gold} draggable='false' />
                            <div className='upgrade2_price upgrade_price'>
                                {StoreUpgradesList.upgrade2[playerUpgrade2].price}
                            </div>
                        </div>
                    }
                    {StoreUpgradesList.upgrade2[playerUpgrade2].price !== 'Maxed' && 
                        <button 
                            className='upgrade2_button upgrade_button' 
                            onClick={() => {
                                buyUpgrade2(StoreUpgradesList.upgrade2[playerUpgrade2].price)
                            }}
                        >
                            UPGRADE
                        </button>
                    }
                </div>
            </div>

            <div className='upgrade3-container store_upgrade'>
                <div className='upgrade3_image-wrapper upgrade_image-wrapper'>
                    <img className='upgrade3_image upgrade_image' src={SplitCross} draggable='false' />
                </div>
                <div className='upgrade3_description-wrapper upgrade_description-wrapper center'>
                    <div className='upgrade3_description upgrade_description'>
                        Start with <span className='upgrade_description_highlight'>{StoreUpgradesList.upgrade3[playerUpgrade3].upgrade}</span> wrong {`letter${playerUpgrade3 >= 3 ? 's' : ''}`} disabled.
                    </div>
                </div>
                <div className='upgrade3_next-wrapper upgrade_next-wrapper center'>
                    <div className='upgrade3_next upgrade_next'>
                        {StoreUpgradesList.upgrade3[playerUpgrade3].price === 'Maxed' 
                            ? <span>NO UPGRADES AVAILABLE</span> 
                            : <span>NEXT UPGRADE: Start with <span className='upgrade_description_highlight'>{StoreUpgradesList.upgrade3[playerUpgrade3 + 1].upgrade}</span> wrong {`letter${playerUpgrade3 + 1 >= 3 ? 's' : ''}`} disabled.</span>
                        }
                    </div>
                </div>
                <hr className='upgrade_divider' ></hr>
                <div className='upgrade3_price-container upgrade_price-container center'>
                    {StoreUpgradesList.upgrade3[playerUpgrade3].price === 'Maxed' && 
                        <div className='upgrade3_maxed upgrade_maxed ohpw center'>MAXED</div>
                    }
                    {StoreUpgradesList.upgrade3[playerUpgrade3].price !== 'Maxed' && 
                        <div className='upgrade3_price-wrapper upgrade_price-wrapper center'>
                            <img className='gold_icon' src={Gold} draggable='false' />
                            <div className='upgrade3_price upgrade_price'>
                                {StoreUpgradesList.upgrade3[playerUpgrade3].price}
                            </div>
                        </div>
                    }
                    {StoreUpgradesList.upgrade3[playerUpgrade3].price !== 'Maxed' && 
                        <button 
                            className='upgrade3_button upgrade_button' 
                            onClick={() => {
                                buyUpgrade3(StoreUpgradesList.upgrade3[playerUpgrade3].price)
                            }}
                        >
                            UPGRADE
                        </button>
                    }
                </div>
            </div>

        </div>
    )
}

export default StoreUpgrades