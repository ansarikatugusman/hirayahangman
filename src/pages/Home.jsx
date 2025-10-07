import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router'
import TopMenuIcons from '../components/home/TopMenuIcons'
import BottomMenuIcons from '../components/home/BottomMenuIcons'
import AuthContext from '../context/AuthContext'
import useHttpRequest from '../hooks/useHttpRequest'
import Loading from '../utils/Loading'
import ErrorMessage from '../utils/ErrorMessage'
import logo from '/hirayahangman-white_outline.svg'

import './Home.css'

const Home = () => {
    const [name, setName] = useState('Player')
    const [avatar, setAvatar] = useState('character')
    const [crowns, setCrowns] = useState(100)
    const [showError, setShowError] = useState(false)
    const {loading, error, fetchRequest} = useHttpRequest()

    const auth = useContext(AuthContext)

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
            <TopMenuIcons />
            <div className='logo-container ohpw center'>
                <img className='image_logo scale' src={logo} alt='logo' />
            </div>
            <BottomMenuIcons />
        </div>
    )
}

export default Home