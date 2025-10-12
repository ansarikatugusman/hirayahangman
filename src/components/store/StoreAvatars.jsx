import { useState, useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import useHttpRequest from '../../hooks/useHttpRequest'
import Loading from '../../utils/Loading'
import ErrorMessage from '../../utils/ErrorMessage'
import StoreAvatarsList from '../../utils/StoreAvatarsList'
import Gold from '../../assets/images/gold.png'

import './StoreAvatars.css'

const StoreAvatars = ({ setGold, playerAvatars }) => {
    const [showError, setShowError] = useState(false)
    const {loading, error, fetchRequest} = useHttpRequest()

    const auth = useContext(AuthContext)

    const storeAvatars = StoreAvatarsList.map((avatar, index) => {
        return (
            <div className={`avatar${index + 6}-container store_avatar`} key={avatar.name}>
                <div className={`avatar${index + 6}_image-wrapper avatar_image-wrapper`}>
                    <img className={`avatar${index + 6}_image avatar_image`} src={`./avatars/${avatar.icon}.svg`} alt='avatar' />
                </div>
                <div className={`avatar${index + 6}_name-wrapper avatar_name-wrapper center`}>
                    <div className={`avatar${index + 6}_name avatar_name`}>
                        {avatar.name}
                    </div>
                </div>
                <hr className='avatar_divider' ></hr>
                <div className={`avatar${index + 6}_price-container avatar_price-container center`}>
                    {playerAvatars.includes(avatar.icon) && <div className='avatar_owned ohpw center'>OWNED</div>}
                    {!playerAvatars.includes(avatar.icon) && 
                        <div className={`avatar${index + 6}_price-wrapper avatar_price-wrapper center`}>
                            <img className='gold_icon' src={Gold}/>
                            <div className={`avatar${index + 6}_price avatar_price`}>
                                {avatar.price}
                            </div>
                        </div>
                    }
                    {!playerAvatars.includes(avatar.icon) &&  
                        <button
                            className={`avatar${index + 6}_button avatar_button`}
                            onClick={async () => {
                                try {
                                    await fetchRequest(`${import.meta.env.VITE_BACKEND_URL}/buyAvatar/${avatar.icon}`,
                                    'PATCH',
                                    {
                                        'Content-Type': 'application/json',
                                        Authorization: 'Bearer ' + auth.token 
                                    },
                                    JSON.stringify({
                                        price: avatar.price
                                    }))
                                    setGold(prevGold => prevGold - avatar.price)
                                } catch (err) {
                                    setShowError(true)
                                }
                            }}
                        >
                            BUY
                        </button>
                    }
                </div>
            </div>
        )
    })

    return (
        <div className='store_avatars-container center'>
            {loading && <Loading />}
            {showError && <ErrorMessage error={error} setShowError={setShowError} />}
            {storeAvatars}
        </div>
    )
}

export default StoreAvatars