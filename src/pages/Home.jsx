import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router'
import PlayerInfo from '../components/home/PlayerInfo'
import SketchedButton from '../components/buttons/SketchedButton'
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

    return (
        <div className='home-container ohp'>
            {loading && <Loading />}
            {showError && <ErrorMessage error={error} setShowError={setShowError} />}
            <PlayerInfo name={name} avatar={avatar} crowns={crowns} />
            <div className='logo-container ohpw center'>
                <img className='image_logo scale' src={logo} alt='logo' />
            </div>
            <div className='home_buttons-container center ohpw'>
                <Link className='link_href' to='/game'>
                    <SketchedButton text='PLAY' width='250px' fontsize='200%' scale_after={true} />
                </Link>
                <Link className='link_href' to='/shop'>
                    <SketchedButton text='SHOP' width='250px' fontsize='200%' scale_after={true} />
                </Link>
            </div>
        </div>
    )
}

export default Home