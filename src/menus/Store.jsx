import { useState, useEffect, useContext } from 'react'
import AuthContext from '../context/AuthContext'
import useHttpRequest from '../hooks/useHttpRequest'
import Loading from '../utils/Loading'
import ErrorMessage from '../utils/ErrorMessage'
import FoldedButton from '../components/buttons/FoldedButton'
import StoreItems from '../components/store/StoreItems'
import StoreUpgrades from '../components/store/StoreUpgrades'
import StoreAvatars from '../components/store/StoreAvatars'
import Close from '../assets/images/icons/close.png'
import Gold from '../assets/images/gold.png'


import './Store.css'

const Store = ({ closeStoreMenu }) => {
    const [gold, setGold] = useState(0)
    const [playerUpgrade1, setPlayerUpgrade1] = useState(1)
    const [playerUpgrade2, setPlayerUpgrade2] = useState(1)
    const [playerUpgrade3, setPlayerUpgrade3] = useState(1)
    const [playerAvatars, setPlayeAvatars] = useState([])
    const [itemsActive, setItemsActive] = useState(true)
    const [upgradesActive, setUpgradesActive] = useState(false)
    const [avatarsActive, setAvatarsActive] = useState(false)
    const [showError, setShowError] = useState(false)
    const {loading, error, fetchRequest} = useHttpRequest()

    const auth = useContext(AuthContext)

    const storeItemsActive = () => {
        setItemsActive(true)
        setUpgradesActive(false)
        setAvatarsActive(false)
    }

    const storeUpgradesActive = () => {
        setItemsActive(false)
        setUpgradesActive(true)
        setAvatarsActive(false)
    }

    const storeAvatarsActive = () => {
        setItemsActive(false)
        setUpgradesActive(false)
        setAvatarsActive(true)
    }

    useEffect(() => {
        const getUserShopInfo = async () => {
            try {
                const data = await fetchRequest(`${import.meta.env.VITE_BACKEND_URL}/user/shop`, 
                'GET', 
                {Authorization: 'Bearer ' + auth.token}
                )
                setGold(data.user.gold)
                setPlayerUpgrade1(data.user.upgrade1)
                setPlayerUpgrade2(data.user.upgrade2)
                setPlayerUpgrade3(data.user.upgrade3)
                setPlayeAvatars(data.user.avatars)
            } catch (err) {
                setShowError(true)
            }
        }
        getUserShopInfo()
    }, [auth.id, auth.token, fetchRequest, gold])

    return (
        <div className='store-container center modal'>
            {loading && <Loading />}
            {showError && <ErrorMessage error={error} setShowError={setShowError} />}
            <div className='store-wrapper menu scale center'>
                <img className='close_button_menu icon' src={Close} onClick={closeStoreMenu} />
                <div className='store menu_content center'>
                    <div className='store_navigation ohpw center'>
                        <div className='store_navigation_gold-container ohpw center'>
                            <div className='player_gold-container center'>
                                <div className='top-tape'></div>
                                <div className='player_gold-wrapper ohp center'>
                                    <img className='player_gold_icon' src={Gold} />
                                    <div className='player_gold ohph center'>
                                        <p>{gold}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='store_navigation_buttons-container ohpw center'>
                            <FoldedButton text='ITEMS' width='80px' height='60px' fontsize='0.75rem' active={itemsActive} onClickHandler={storeItemsActive} />
                            <FoldedButton text='UPGRADES' width='80px' height='60px' fontsize='0.75rem' active={upgradesActive} onClickHandler={storeUpgradesActive} />
                            <FoldedButton text='AVATARS' width='80px' height='60px' fontsize='0.75rem' active={avatarsActive} onClickHandler={storeAvatarsActive} />
                        </div>
                    </div>
                    <div className='store_content ohpw center'>
                        {itemsActive &&<StoreItems setGold={setGold} />}
                        {upgradesActive && <StoreUpgrades setGold={setGold} playerUpgrade1={playerUpgrade1} playerUpgrade2={playerUpgrade2} playerUpgrade3={playerUpgrade3} />}
                        {avatarsActive && <StoreAvatars setGold={setGold} playerAvatars={playerAvatars} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Store