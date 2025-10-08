import { useState, useContext } from 'react'
import TopMenuIcons from '../components/home/TopMenuIcons'
import BottomMenuIcons from '../components/home/BottomMenuIcons'
import Store from '../menus/Store'
import AuthContext from '../context/AuthContext'
import useHttpRequest from '../hooks/useHttpRequest'
import Loading from '../utils/Loading'
import ErrorMessage from '../utils/ErrorMessage'
import logo from '/hirayahangman-white_outline.svg'

import './Home.css'

const Home = () => {
    const [storeMenuOpen, setStoreMenuOpen] = useState(false)
    const [name, setName] = useState('Player')
    const [avatar, setAvatar] = useState('character')
    const [crowns, setCrowns] = useState(100)
    const [showError, setShowError] = useState(false)
    const {loading, error, fetchRequest} = useHttpRequest()

    const auth = useContext(AuthContext)

    const openStoreMenu = () => setStoreMenuOpen(true)

    const closeStoreMenu = () => setStoreMenuOpen(false)
    

    /*
    useEffect(() => {
        const getUserHomeInfo = async () => {
            try {
                const data = await fetchRequest(`${import.meta.env.VITE_BACKEND_URL}/user/homeInfo`, 
                    'GET', 
                    {Authorization: 'Bearer ' + auth.token}
                )
                setName(data.user.name)
                setAvatar(data.user.avatar)
                setCrowns(data.user.crowns)
            } catch (err) {
                setShowError(true)
            }
        }
        getUserHomeInfo()
    }, [auth.id, auth.token, fetchRequest])
    */

    return (
        <div className='home-container ohp'>
            {loading && <Loading />}
            {showError && <ErrorMessage error={error} setShowError={setShowError} />}
            <TopMenuIcons 
                openStoreMenu={openStoreMenu}
            />
            <div className='logo-container ohpw center'>
                <img className='image_logo scale' src={logo} alt='logo' />
            </div>
            <BottomMenuIcons />
            {storeMenuOpen && <Store closeStoreMenu={closeStoreMenu} />}
        </div>
    )
}

export default Home