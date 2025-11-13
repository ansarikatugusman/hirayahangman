import { useNavigate } from 'react-router'
import ArrowLeft from '../../assets/images/icons/arrow_left.svg'
import Home from '../../assets/images/icons/home.png'
import ArrowRight from '../../assets/images/icons/arrow_right.svg'

import './PlayTopNavigation.css'

const PlayTopNavigation = ({ bugtongPortalActive, handleBugtongPortalActive, sawikainUnlocked, sawikainPortalActive, handleSawikainPortalActive, salawikainUnlocked, salawikainPortalActive, handleSalawikainPortalActive }) => {

    const navigate = useNavigate()

    const ArrowLeftIcon = () => {
        if (sawikainPortalActive || salawikainPortalActive) {
            return <img className='menu_icon' src={ArrowLeft} draggable='false' />
        }
        return <div className='arrow_inactive ohph'></div>
    }

    const ArrowRightIcon = () => {
        if (salawikainUnlocked) {
            if (bugtongPortalActive || sawikainPortalActive) {
                return <img className='menu_icon' src={ArrowRight} draggable='false' />
            }
        }

        if (sawikainUnlocked) {
            if (bugtongPortalActive) {
                return <img className='menu_icon' src={ArrowRight} draggable='false' />
            }
        }
        return <div className='arrow_inactive ohph'></div>
    }

    const onClickArrowLeft = () => {
        if (sawikainPortalActive) handleBugtongPortalActive()
        if (salawikainPortalActive) handleSawikainPortalActive()
    }

    const onClickHome = () => navigate('/')

    const onClickArrowRight = () => {
        if (bugtongPortalActive && sawikainUnlocked) handleSawikainPortalActive()
        if (sawikainPortalActive && salawikainUnlocked) handleSalawikainPortalActive()
    }

    return (
        <div className='play_top_navigation-container ohpw center scale'>
            <div className='play_top_navigation-wrapper ohph center'>
                <div 
                    className='arrow_left-wrapper menu_icon-wrapper ohph center' 
                    onClick={onClickArrowLeft} 
                >
                    {ArrowLeftIcon()}
                    <p>
                        { 
                            bugtongPortalActive ? '' :
                            sawikainPortalActive ? 'BUGTONG' :
                            'SAWIKAIN'
                        }
                    </p>
                </div>
                <div className='home-wrapper menu_icon-wrapper ohph center' onClick={onClickHome} >
                    <img className='menu_icon' src={Home} draggable='false' />
                    <p>HOME</p>
                </div>
                {<div 
                    className='arrow_right-wrapper menu_icon-wrapper ohph center'
                    onClick={onClickArrowRight}
                >
                    {ArrowRightIcon()}
                    <p>
                        { 
                            bugtongPortalActive && sawikainUnlocked ? 'SAWIKAIN' :
                            sawikainPortalActive && salawikainUnlocked ? 'SALAWIKAIN' :
                            ''
                        }
                    </p>
                </div>}
            </div>
        </div>
    )
}

export default PlayTopNavigation