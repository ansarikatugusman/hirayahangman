import { useMemo } from 'react'
import { Html } from '@react-three/drei'
import SalawikainWordBank from '../../utils/SalawikainWordBank'
import SlBookOpen from '../../assets/images/sl_book_open.png'
import SlBookClosed from '../../assets/images/sl_book_closed.png'
import SalawikainBookOpen from '../../assets/images/salawikain_book_open.png'
import SalawikainBookClosed from '../../assets/images/salawikain_book_closed.png'
import Ribbon from '../../assets/images/ribbon3.png'

import './SalawikainBooks.css'

const SalawikainBooks = ({ numberOfBooks = 16, radius = 3, handleCurrentBook, levelStarted, books, currentBook, booksSolved }) => {
    const totalSalawikainBooks = SalawikainWordBank.easy.length + SalawikainWordBank.medium.length + SalawikainWordBank.hard.length

    const salawikainBooks = useMemo(() => {
        let salawikain_books = []

        for (let i = 0; i < numberOfBooks; i++) {
            const angle = Math.PI * 2 * i / numberOfBooks

            const x = Math.sin(angle) * radius
            const y = 0.5
            const z = Math.cos(angle) * radius

            if (i === numberOfBooks - 1) {
                salawikain_books.push(
                    <Html
                        className='center'
                        key={i}
                        position-x={x}
                        position-y={y}
                        position-z={z}
                    >
                        <div className='salawikain_book-container center' >
                            <div
                                className='salawikain_book_image-wrapper center'
                                onClick={(e) => {
                                    levelStarted()
                                    handleCurrentBook(e);
                                }}
                                style={{ pointerEvents: booksSolved.length >= 15 ? '' : 'none' }}>
                                <img
                                    id='last_book'
                                    className='salawikain_book_image'
                                    src={booksSolved.length >= 15 ? SalawikainBookOpen : SalawikainBookClosed}
                                    draggable='false'
                                />
                            </div>
                            <div 
                                className='salawikain_book_completed-wrapper center'
                            >
                                <div className='salawikain_book_completed'>
                                    { booksSolved.length >= 15
                                        ? <span>{booksSolved.length} / {totalSalawikainBooks}</span>
                                        : <span>{booksSolved.length} / 15</span>
                                    }
                                </div> 
                            </div>
                        </div>
                    </Html>
                )
            } else {
                salawikain_books.push(
                    <Html
                        className='center'
                        key={i}
                        position-x={x}
                        position-y={y}
                        position-z={z}
                    >
                        <div className='salawikain_book-container center'>
                            <div
                                className='salawikain_book_image-wrapper center'
                                onClick={(e) => {
                                    levelStarted()
                                    handleCurrentBook(e);
                                }}
                                style={{ pointerEvents: books[`salawikainBook${i+1}`] === true ? 'none' : '' }}>
                                <img
                                    id={Object.keys(books)[i]}
                                    className='salawikain_book_image'
                                    src={books[`salawikainBook${i+1}`] === true ? SlBookClosed : SlBookOpen}
                                    draggable='false'
                                />
                                
                                <img
                                    className='salawikain_book_ribbon'
                                    src={Ribbon}
                                    style={{ display: books[`salawikainBook${i+1}`] === true ? 'block' : 'none' }}
                                    draggable='false'
                                />
                            </div>
                        </div>
                    </Html>
                )
            }
        }

        return salawikain_books
    }, [books, handleCurrentBook, levelStarted, currentBook])
    
    return (
        <>
            {salawikainBooks}
        </>
    )
}

export default SalawikainBooks