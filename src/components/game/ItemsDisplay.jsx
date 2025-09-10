import { useEffect } from 'react'
import Items from '../../utils/Items'

import './ItemsDisplay.css'

const ItemsDisplay = ({ items, setItems }) => {

    useEffect(() => {
        Object.values(Items).map((index => {
            console.log(index)
        })) 
    }, [])
    return (
        <div className='items_display-container'>
            { Object.values(Items).map((value, index) => {
                <div className='items_display-wrapper' key={index}>
                    <img src={`../../assets/images/${value[2]}`} />
                    <p> {items[index]} </p>
                </div>
            }) }
        </div>
    )
}

export default ItemsDisplay