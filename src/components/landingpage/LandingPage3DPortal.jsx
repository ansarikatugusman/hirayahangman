import WorldPortal from '../../assets/images/3d_world_portal.jpg'

import './LandingPage3DPortal.css'

const LandingPage3DPortal = () => {
    return (
        <div className='landing_page_3d_portal-container ohpw center'>
            <div className='landing_page_3d_portal_title-wrapper center'>
				<div className='landing_page_3d_portal_title center'>
					<p>3D World Portal</p>
				</div>
			</div>
            <div className='landing_page_3d_portal_description-wrapper'>
                <div className='landing_page_3d_portal_description'>
                    Travel through the enchanted portal connecting each book’s world. Each transition immerse players in every realm of Filipino wisdom.
                </div>
            </div>
            <div className='landing_page_3d_world_portal_image-wrapper center'>
                <img className='landing_page_3d_world_portal_image' src={WorldPortal} />
            </div>
        </div>
    )
}

export default LandingPage3DPortal