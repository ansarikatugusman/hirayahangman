import { useState, useEffect, useContext } from 'react'
import AuthContext from '../context/AuthContext'
import useHttpRequest from '../hooks/useHttpRequest'
import Loading from '../utils/Loading'
import ErrorMessage from '../utils/ErrorMessage'
import SketchyLongWrapper from '../components/wrappers/SketchyLongWrapper'
import Manlalaro from '../assets/images/achievements/manlalaro.png'
import Marunong from '../assets/images/achievements/marunong.png'
import Tagapagsalaysay from '../assets/images/achievements/tagapagsalaysay.png'
import Mayaman from '../assets/images/achievements/mayaman.png'
import Bihasa from '../assets/images/achievements/bihasa.png'
import Maabilidad from '../assets/images/achievements/maabilidad.png'
import Tagapagtipon from '../assets/images/achievements/tagapagtipon.png'
import Napakagaling from '../assets/images/achievements/napakagaling.png'
import Pinakamahusay from  '../assets/images/achievements/pinakamahusay.png'
import Listo from '../assets/images/achievements/listo.png'
import Maalam from '../assets/images/achievements/maalam.png'
import Matalino from '../assets/images/achievements/matalino.png'
import Paham from '../assets/images/achievements/paham.png'

import './Achievements.css'

const Achievements = ({ closeAchievementsMenu }) => {
    const [playerAchievements, setPlayerAchievements] = useState({})
    const [showError, setShowError] = useState(false)
    const {loading, error, fetchRequest} = useHttpRequest()

    const auth = useContext(AuthContext)

    useEffect(() => {
        const getAchievements = async () => {
        try {
            const data = await fetchRequest(`${import.meta.env.VITE_BACKEND_URL}/user/achievements`, 
                'GET',
                {Authorization: 'Bearer ' + auth.token}
            )
            setPlayerAchievements(data.user.achievements)
            } catch (err) {
                setShowError(true)
            }
        }
        getAchievements()
    }, [])

    return (
        <SketchyLongWrapper showCloseButton={true} onCloseHandler={closeAchievementsMenu}>
            {loading && <Loading />}
            {showError && <ErrorMessage error={error} setShowError={setShowError} />}
            <div className='achievements_container ohp center'>
                <div className='achievements_title-wrapper center'>
                    ACHIEVEMENTS
                </div>
                <div className='achievements-wrapper ohpw center'>
                    <div className={`achievement1 achievement ${!playerAchievements.manlalaro && 'achievement_incomplete'} center`}>
                        <div className='achievement_icon-wrapper center'>
                            <img className='achievement_icon' src={Manlalaro} draggable='false' />
                        </div>
                        <div className='achievement_description-wrapper center'>
                            Be a player of Hiyas ng Salita.
                        </div>
                    </div>

                    <div className={`achievement1 achievement ${!playerAchievements.marunong && 'achievement_incomplete'} center`}>
                        <div className='achievement_icon-wrapper center'>
                            <img className='achievement_icon' src={Marunong} draggable='false' />
                        </div>
                        <div className='achievement_description-wrapper center'>
                            Finish the tutorial.
                        </div>
                    </div>

                    <div className={`achievement1 achievement ${!playerAchievements.tagapagsalaysay && 'achievement_incomplete'} center`}>
                        <div className='achievement_icon-wrapper center'>
                            <img className='achievement_icon' src={Tagapagsalaysay} draggable='false' />
                        </div>
                        <div className='achievement_description-wrapper center'>
                            Finish the story of Hiyas ng Salita.
                        </div>
                    </div>

                    <div className={`achievement3 achievement ${!playerAchievements.mayaman && 'achievement_incomplete'} center`}>
                        <div className='achievement_icon-wrapper center'>
                            <img className='achievement_icon' src={Mayaman} draggable='false' />
                        </div>
                        <div className='achievement_description-wrapper center'>
                            Spend 5,000 gold or more.
                        </div>
                    </div>

                    <div className={`achievement4 achievement ${!playerAchievements.bihasa && 'achievement_incomplete'} center`}>
                        <div className='achievement_icon-wrapper center'>
                            <img className='achievement_icon' src={Bihasa} draggable='false' />
                        </div>
                        <div className='achievement_description-wrapper center'>
                            Use any items 50 times.
                        </div>
                    </div>

                    <div className={`achievement5 achievement ${!playerAchievements.maabilidad && 'achievement_incomplete'} center`}>
                        <div className='achievement_icon-wrapper center'>
                            <img className='achievement_icon' src={Maabilidad} draggable='false' />
                        </div>
                        <div className='achievement_description-wrapper center'>
                            Max out at least 1 upgrade in the shop.
                        </div>
                    </div>

                    <div className={`achievement6 achievement ${!playerAchievements.tagapagtipon && 'achievement_incomplete'} center`}>
                        <div className='achievement_icon-wrapper center'>
                            <img className='achievement_icon' src={Tagapagtipon} draggable='false' />
                        </div>
                        <div className='achievement_description-wrapper center'>
                            Own 15 avatars.
                        </div>
                    </div>

                    <div className={`achievement7 achievement ${!playerAchievements.napakagaling && 'achievement_incomplete'} center`}>
                        <div className='achievement_icon-wrapper center'>
                            <img className='achievement_icon' src={Napakagaling} draggable='false' />
                        </div>
                        <div className='achievement_description-wrapper center'>
                            Reach 500 Crowns.
                        </div>
                    </div>

                    <div className={`achievement8 achievement ${!playerAchievements.pinakamahusay && 'achievement_incomplete'} center`}>
                        <div className='achievement_icon-wrapper center'>
                            <img className='achievement_icon' src={Pinakamahusay} draggable='false' />
                        </div>
                        <div className='achievement_description-wrapper center'>
                            Achieve top 10 in the leaderboard.
                        </div>
                    </div>

                    <div className={`achievement9 achievement ${!playerAchievements.listo && 'achievement_incomplete'} center`}>
                        <div className='achievement_icon-wrapper center'>
                            <img className='achievement_icon' src={Listo} draggable='false' />
                        </div>
                        <div className='achievement_description-wrapper center'>
                            Have an average time of 8 seconds or less.
                        </div>
                    </div>

                    <div className={`achievement10 achievement ${!playerAchievements.maalam && 'achievement_incomplete'} center`}>
                        <div className='achievement_icon-wrapper center'>
                            <img className='achievement_icon' src={Maalam} draggable='false' />
                        </div>
                        <div className='achievement_description-wrapper center'>
                            Answer all bugtong.
                        </div>
                    </div>

                    <div className={`achievement11 achievement ${!playerAchievements.matalino && 'achievement_incomplete'} center`}>
                        <div className='achievement_icon-wrapper center'>
                            <img className='achievement_icon' src={Matalino} draggable='false' />
                        </div>
                        <div className='achievement_description-wrapper center'>
                            Answer all sawikain.
                        </div>
                    </div>

                    <div className={`achievement12 achievement ${!playerAchievements.paham && 'achievement_incomplete'} center`}>
                        <div className='achievement_icon-wrapper center'>
                            <img className='achievement_icon' src={Paham} draggable='false' />
                        </div>
                        <div className='achievement_description-wrapper center'>
                            Answer all salawikain.
                        </div>
                    </div>

                </div>
            </div>
        </SketchyLongWrapper>
    )
}

export default Achievements