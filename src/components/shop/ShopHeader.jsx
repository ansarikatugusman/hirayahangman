import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import SketchedButton from '../buttons/SketchedButton'
import Gold from "../../assets/images/gold.png"

import './ShopHeader.css'

const ShopHeader = ({ gold }) => {
    return(
        <div className='shop_header-container ohpw center'>
            <Link className='link_href' to='/'>
                <div className='return_button-wrapper'>
                    <SketchedButton text='RETURN' width='100px' fontsize='1rem' />
                </div>
            </Link>

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
    )
}

export default ShopHeader