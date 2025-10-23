import EngagingGameplayImage from '../../assets/images/engaging_gameplay.jpg'

import './EngagingGameplay.css'

const EngagingGameplay = () => {
    return (
        <div className='landing_page_3d_portal-container ohpw center'>
            <div className='landing_page_3d_portal_title-wrapper center'>
                <div className='landing_page_3d_portal_title center'>
                    <p>Engaging Gameplay</p>
                </div>
            </div>
            <div className='landing_page_3d_portal_description-wrapper'>
                <div className='landing_page_3d_portal_description'>
                    Solve Filipino riddles, idioms, and proverbs in beautifully designed realms where each level rewards your insight and challenges your linguistic creativity.
                </div>
            </div>
            <div className='landing_page_3d_world_portal_image-wrapper center'>
                <img className='landing_page_3d_world_portal_image' src={EngagingGameplayImage} />
            </div>
        </div>
    )
}

export default EngagingGameplay