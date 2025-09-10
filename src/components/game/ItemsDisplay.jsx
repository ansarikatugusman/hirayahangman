import { useEffect } from 'react'
import Items from '../../utils/Items'

import './ItemsDisplay.css'

const ItemsDisplay = ({ items, setItems }) => {

    useEffect(() => {
        Object.values(Items).map(((index, i) => {
            console.log(index['game_icon'])
            console.log(items[`item${i+1}`])
        })) 
    }, [])
    return (
        <div className='items_display-container'>
            { Object.values(Items).map((value, index) => {
                let src = `/images/${value['game_icon']}`
                return (
                    <div className='items_display-wrapper' key={index}>
                        <img width={'64px'} src={src} />
                        <p> {items[`item${index+1}`]} </p>
                    </div>
                )
            }) }
        </div>
    )
}

export default ItemsDisplay