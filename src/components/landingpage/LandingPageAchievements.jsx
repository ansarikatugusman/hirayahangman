import Manlalaro from '../../assets/images/achievements/manlalaro.png'
import Marunong from '../../assets/images/achievements/marunong.png'
import Tagapagsalaysay from '../../assets/images/achievements/tagapagsalaysay.png'
import Mayaman from '../../assets/images/achievements/mayaman.png'
import Bihasa from '../../assets/images/achievements/bihasa.png'
import Maabilidad from '../../assets/images/achievements/maabilidad.png'
import Tagapagtipon from '../../assets/images/achievements/tagapagtipon.png'
import Napakagaling from '../../assets/images/achievements/napakagaling.png'
import Pinakamahusay from  '../../assets/images/achievements/pinakamahusay.png'
import Listo from '../../assets/images/achievements/listo.png'
import Maalam from '../../assets/images/achievements/maalam.png'
import Matalino from '../../assets/images/achievements/matalino.png'
import Paham from '../../assets/images/achievements/paham.png'

import './LandingPageAchievements.css'
import { useEffect, useState } from 'react'

const LandingPageAchievements = () => {
    const [achievementIcon, setAchievementIcon] = useState(<img className='landing_page_achievements_icon' src={Manlalaro} alt='achievement' />)

    const landingPageAchievements = [
        <img className='landing_page_achievements_icon' src={Manlalaro} alt='achievement' />,
        <img className='landing_page_achievements_icon' src={Marunong} alt='achievement' />,
        <img className='landing_page_achievements_icon' src={Tagapagsalaysay} alt='achievement' />,
        <img className='landing_page_achievements_icon' src={Mayaman} alt='achievement' />,
        <img className='landing_page_achievements_icon' src={Bihasa} alt='achievement' />,
        <img className='landing_page_achievements_icon' src={Maabilidad} alt='achievement' />,
        <img className='landing_page_achievements_icon' src={Tagapagtipon} alt='achievement' />,
        <img className='landing_page_achievements_icon' src={Napakagaling} alt='achievement' />,
        <img className='landing_page_achievements_icon' src={Pinakamahusay} alt='achievement' />,
        <img className='landing_page_achievements_icon' src={Listo} alt='achievement' />,
        <img className='landing_page_achievements_icon' src={Maalam} alt='achievement' />,
        <img className='landing_page_achievements_icon' src={Matalino} alt='achievement' />,
        <img className='landing_page_achievements_icon' src={Paham} alt='achievement' />,
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setAchievementIcon(landingPageAchievements[Math.floor(Math.random() * landingPageAchievements.length)])
        }, 2000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className='landing_page_achievements-container ohpw center'>
            <div className='landing_page_achievements_title-wrapper center'>
				<div className='landing_page_achievements_title center'>
					<p>Achievements</p>
				</div>
			</div>

            <div className='landing_page_achievements_description-wrapper'>
                <div className='landing_page_achievements_description'>
                    Unlock achievements to celebrate your milestone in the game while appreciating culture and rediscovering the timeless value of Filipino expression.
                </div>
            </div>

            <div className='landing_page_achievements-wrapper ohpw center'>
                <div className='landing_page_achievements center'>
                    {achievementIcon}

                    <div className='landing_page_achievements-back'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPageAchievements